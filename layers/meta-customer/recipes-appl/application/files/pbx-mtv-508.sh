#! /bin/sh

name=pbx-mtv-508
binpath=/usr/bin/$name
. /etc/profile.d/qt-qpa.sh
gpio_out=/etc/profile.d/gpio_out

#GPIO_LIST="504 505 506 507 508 509 510 511 501 502 480 481 482 483 484 485 486 487 488 489 491 446 444 445"
#GPIO_LIST="513 514 515 516 517 518 519 520 521 523 524 525 526 527 528 529 530 531 532 533 534 535 536 537 538 539 540 545 546 547 548 549 550 551 552"
GPIO_LIST="513 514 515 516 517 518 519 520 521 523 524 525 526 527 528 529 530 531 532 533 534 535 550
"
GPIO_OUT_LIST="0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"
# (35)
#

gpio_export () {
    echo $1 > /sys/class/gpio/export
    echo $3 > /sys/class/gpio/$2/direction
}

gpio_export_all () {
    gpio_export 513 gpio513 low
    gpio_export 514 gpio514 low
    gpio_export 515 gpio515 low
    gpio_export 516 gpio516 low

    gpio_export 517 gpio517 low
    gpio_export 518 gpio518 low

    gpio_export 519 gpio519 low
    gpio_export 520 gpio520 low
    gpio_export 521 gpio521 low
    gpio_export 523 gpio523 low
    gpio_export 524 gpio524 low
    gpio_export 525 gpio525 low
    gpio_export 526 gpio526 low
    gpio_export 527 gpio527 low
    gpio_export 528 gpio528 low
    gpio_export 529 gpio529 low
    gpio_export 530 gpio530 low
    gpio_export 531 gpio531 low

    gpio_export 532 gpio532 high
    gpio_export 533 gpio533 high

    gpio_export 534 gpio534 in
    gpio_export 535 gpio535 in
    gpio_export 550 gpio550 in


    echo "PATH_TO_GPIO_OUT=1" > $gpio_out
    for i in $GPIO_OUT_LIST; do
      echo "PATH_TO_GPIO_IN_$i=1" >> $gpio_out
    done

    

}

gpio_unexport () {
    echo $1 > /sys/class/gpio/unexport
}

gpio_unexport_all () {
    rm -f $gpio_out
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
    # m26-eeprom
    mkdir -p /var/volatile/hls/
    ln -sf /var/volatile/hls/ /www/pages/
    $binpath -w
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
