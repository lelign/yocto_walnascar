#! /bin/sh
# add driver mtv-overlay
# add driver mtv-overlay mtv as mtv-overlay
DRIVER="mtv" 
MODULE_INFO=$(lsmod | grep -i $DRIVER)
if [ -z "$MODULE_INFO" ]; then
    insmod /lib/modules/*/kernel/profitt/mtv-overlay.ko
fi

# start app
name=pbx-mtv-5161
binpath=/usr/bin/$name
. /etc/profile.d/qt-qpa.sh

INPUTS_ALL=$(seq 1 16)
GPIO_LIST_IN=$(seq 512 521)" "$(seq 528 535)" 544 545" # inputs on d14 d15 (16) & fan_state (2)
GPIO_LIST_OUT="536 546 553 554" # output d15, fan_reset & leds on plate
# total 22 gpios 18 inputs 4 outputs

gpio_unexport_all () {
    for i in $(echo $GPIO_LIST_IN" "$GPIO_LIST_OUT); do
        echo $i > /sys/class/gpio/unexport;
    done
}

gpio_export_all () {
    rm -f  /var/volatile/input*
    touch /var/volatile/inputs_all
    echo 0 > /var/volatile/M26_GPIO
    echo 1 > /var/volatile/MODEL_DEVICE
    echo 1 > /var/volatile/RESET_BUTTON
    for i in $INPUTS_ALL; do
        echo 1 > /var/volatile/input_$i
        echo "input_$i 1" >> /var/volatile/inputs_all
    done
    for i in $(echo $GPIO_LIST_IN" "$GPIO_LIST_OUT); do
        echo $i > /sys/class/gpio/export 2>/dev/null;
    done
    for i in $GPIO_LIST_IN; do
        echo in > /sys/class/gpio/gpio$i/direction;
    done
    for i in $GPIO_LIST_OUT; do
        echo low > /sys/class/gpio/gpio$i/direction;
    done    
}

log_begin_msg () {
    echo $1
}

log_end_msg () {
    echo $1
}

log_success_msg () {
    echo $1
}

case "$1" in
  start)
    log_begin_msg "Starting $name daemon..."
    gpio_export_all
    # m26-eeprom
    mkdir -p /var/volatile/hls/
    ln -sf /var/volatile/hls/ /www/pages/
    start-stop-daemon --start -x $binpath
    ;;
  stop)
    log_begin_msg "Stopping $name daemon..."
    gpio_unexport_all
    start-stop-daemon --stop -x $binpath
    ;;
  restart)
    log_begin_msg "Restarting $name daemon..."
    start-stop-daemon --stop -x $binpath
    start-stop-daemon --start -x $binpath

    ;;
  reload-or-restart)
    if running
    then
	$0 reload
    else
	$0 start
    fi
    ;;
  *)
    log_success_msg "Usage: /etc/init.d/pbx-mtv-5161.sh {start|stop|reload|restart|force-reload|reload-or-restart}"
    exit 1
esac

