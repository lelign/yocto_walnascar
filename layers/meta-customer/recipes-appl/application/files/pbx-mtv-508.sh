#! /bin/sh

name=pbx-mtv-508
binpath=/usr/bin/$name
. /etc/profile.d/qt-qpa.sh

GPIO_LIST="504 505 506 507 508 509 510 511 501 502 480 481 482 483 484 485 486 487 488 489 491 446 444 445"

gpio_export () {
    echo $1 > /sys/class/gpio/export
    echo $3 > /sys/class/gpio/$2/direction
}

gpio_export_all () {
    gpio_export 504 gpio504 low
    gpio_export 505 gpio505 low
    gpio_export 506 gpio506 low
    gpio_export 507 gpio507 low
    gpio_export 508 gpio508 low
    gpio_export 509 gpio509 low
    gpio_export 510 gpio510 low
    gpio_export 511 gpio511 low

    gpio_export 501 gpio501 in
    gpio_export 502 gpio502 high

    gpio_export 480 gpio480 in
    gpio_export 481 gpio481 in
    gpio_export 482 gpio482 in
    gpio_export 483 gpio483 in
    gpio_export 484 gpio484 in
    gpio_export 485 gpio485 in
    gpio_export 486 gpio486 in
    gpio_export 487 gpio487 in
    gpio_export 488 gpio488 in
    gpio_export 489 gpio489 in
    
    gpio_export 491 gpio491 high
    
    gpio_export 446 gpio446 low
    
    gpio_export 444 gpio444 in
    gpio_export 445 gpio445 in
}

gpio_unexport () {
    echo $1 > /sys/class/gpio/unexport
}

gpio_unexport_all () {
    for i in $GPIO_LIST
    do
        gpio_unexport $i
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
    m26-eeprom
    mkdir -p /var/volatile/hls/
    ln -sf /var/volatile/hls/ /www/pages/
    start-stop-daemon --start -b --startas $binpath --name $name -- -w
    ;;
  stop)
    log_begin_msg "Stopping $name daemon..."
    gpio_unexport_all
    start-stop-daemon --stop --signal INT --retry 5 --name $name
    ;;
  restart)
    log_begin_msg "Restarting $name daemon..."
    start-stop-daemon --stop --signal INT --retry 5 --name $name
    start-stop-daemon --start -b --startas $binpath --name $name -- -w
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
    log_success_msg "Usage: /etc/init.d/proflex-spi.sh {start|stop|reload|restart|force-reload|reload-or-restart}"
    exit 1
esac

exit 0
