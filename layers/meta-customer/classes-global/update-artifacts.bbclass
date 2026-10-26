# meta-customer/classes/update-artifacts.bbclass

# Используем обработчик событий BitBake, который вызывается строго ПОСЛЕ коммита buildhistory
BB_HANDLER_SUPPORTED = "1"
addhandler collect_changed_ipks_handler
collect_changed_ipks_handler[eventmask] = "bb.build.BuildContext"

python collect_changed_ipks_handler() {
    # Этот обработчик нам нужен только при завершении всей сборки
    pass
}

# Используем правильный хук завершения сборки образа
IMAGE_POSTPROCESS_COMMAND:append = " collect_changed_ipks; "

collect_changed_ipks() {
    BH_DIR="${BUILDHISTORY_DIR}"
    
    # Жестко нацеливаемся на вашу структуру папок: walnascar_deploy/ipk/arria10
    IPK_DEPLOY_DIR="${DEPLOY_DIR_IPK}/${MACHINE}"
    TARGET_UPDATE_DIR="$HOME/for_remote_update"

    if [ ! -d "$BH_DIR/.git" ]; then
        return
    fi

    cd $BH_DIR

    # Нам нужно проверить как закоммиченные изменения (если buildhistory успел), 
    # так и еще НЕ закоммиченные файлы в рабочей копии (на случай, если мы вызвались раньше коммита)
    # Собираем измененные пакеты из обоих состояний
    
    # 1. Из незакоммиченного состояния (рабочая копия)
    UNCOMMITTED=$(git status --porcelain | awk '{print $2}' | grep '^packages/' | cut -d'/' -f3)
    
    # 2. Из последнего коммита (на случай, если коммит уже произошел)
    COMMITTED=""
    if git rev-parse HEAD~1 >/dev/null 2>&1; then
        COMMITTED=$(git diff --name-only HEAD~1 HEAD | grep '^packages/' | cut -d'/' -f3)
    fi

    # Объединяем списки и убираем дубликаты
    # CHANGED_PACKAGES=$(echo -e "${UNCOMMITTED}\n${COMMITTED}" | grep -v '^packages$' | sort -u)
    # CHANGED_PACKAGES=$(printf "%s\n%s\n" "${UNCOMMITTED}" "${COMMITTED}" | grep -v '^packages$' | grep -v '^$' | sort -u)

    # Дополнительно ищем .ipk, которые были физически созданы на диске в последние 5 минут
    TIME_CHANGED=$(find "${DEPLOY_DIR_IPK}" -name "*.ipk" -mmin -5 | awk -F'/' '{print $NF}' | cut -d'_' -f1 | sort -u)
    
    # Объединяем результаты Git и результаты поиска по времени
    CHANGED_PACKAGES=$(printf "%s\n%s\n%s\n" "${UNCOMMITTED}" "${COMMITTED}" "${TIME_CHANGED}" | grep -v '^packages$' | grep -v '^$' | sort -u)

    if [ -z "$CHANGED_PACKAGES" ]; then
        bbplain "Update-artifacts: Изменений в пакетах не обнаружено."
        return
    fi

    # Создаем/очищаем папку для обновлений
    #rm -rf "$TARGET_UPDATE_DIR"

    if [ ! -d "$TARGET_UPDATE_DIR" ]; then
        mkdir "$TARGET_UPDATE_DIR"
    fi
   

    bbplain "=== Анализ изменений для папки обновлений ==="
    bbplain "remote_update directory: $TARGET_UPDATE_DIR"

    for pkg in $CHANGED_PACKAGES; do
        # Исключаем системные строки, если они пролезли в фильтр
        if [ "$pkg" = "packages" ] || [ -z "$pkg" ]; then
            continue
        fi

        # ФИЛЬТР: Пропускаем отладочные, девелоперские и исходные пакеты
        case "$pkg" in
            *-dbg|*-dev|*-src|*-staticdev|*-doc|*-locale)
                bbnote "Update-artifacts: Игнорируем сервисный пакет $pkg"
                continue
                ;;
        esac

        # Ищем .ipk по всей директории деплоя IPK
        FOUND_IPK=$(find "${DEPLOY_DIR_IPK}" -name "${pkg}_*.ipk" -type f | head -n 1)

        if [ -n "$FOUND_IPK" ]; then
            bbplain "  -> Найдено и скопировано: $(basename $FOUND_IPK)"
            cp "$FOUND_IPK" "$TARGET_UPDATE_DIR/"
        else
            bbnote "Update-artifacts: Пакет [$pkg] не имеет основного .ipk файла."
        fi
    done

    bbplain "=== Сборка папки обновлений завершена! ==="
}
