#! /bin/sh

name=pbx-mtv-508
binpath=/usr/bin/$name
. /etc/profile.d/qt-qpa.sh

GPIO=/var/volatile/gpio
GPIO_LIST=$(seq 1 16)


gpio_export_all () {
	rm -rf $GPIO && mkdir $GPIO
	# leds led/led_class.cpp
		for i in $GPIO_LIST; do
			echo 0 > $GPIO/led_$i
		done
		echo 1 > $GPIO/reset_button # reset_button factory_defaults/factory_defaults.cpp (444)

	# gpio inputs solo solo_disable time_counter gpio/gpio.cpp
		for i in $GPIO_LIST; do
			echo 1 > $GPIO/SOLO_IN_$i # /var/volatile/gpio/SOLO_IN_
		done
		echo 1 > $GPIO/COMMON_ALARM # gpio/gpio.cpp PATH_TO_GPIO_OUT (491)
		echo 1 > $GPIO/SOLO_DISABLE # gpio/gpio.cpp SOLO_DISABLE (???) new var
		echo 1 > $GPIO/TIME_COUNTER # gpio/gpio.cpp TIME_COUNTER (???) new var

	# model_device 
		echo 1 > $GPIO/MODEL_DEVICE # mtv-web/mtv_web.cpp (445)

	#hardware_diagnostics
    echo 1 > $GPIO/FAN_STATE # hardware_diagnostics/hardware_diagnostics.cpp PATH_TO_FAN_STATE (501)
    echo 1 > $GPIO/FAN_STATE_RESET # hardware_diagnostics/hardware_diagnostics.cpp PATH_TO_FAN_STATE (502)
    echo 7340000 > $GPIO/POWER1_INPUT # temp issue

  # board_config.h
    echo 1 > $GPIO/M26_GPIO #  #define M26_GPIO "M26_GPIO"

  # m26-test.cpp
    echo 1 > $GPIO/m26_a_control 

	# leds on board
		echo 517 > /sys/class/gpio/export
		echo low > /sys/class/gpio/gpio517/direction
		echo 518 > /sys/class/gpio/export
		echo low > /sys/class/gpio/gpio518/direction	
	}

gpio_unexport_all () {
	rm -rf $GPIO
	echo 517 > /sys/class/gpio/unexport
	echo 518 > /sys/class/gpio/unexport
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
    # $binpath
    # start-stop-daemon --start -b --startas $binpath --name $name -- -w
#    start-stop-daemon --start -x $binpath
    ;;
  stop)
    log_begin_msg "Stopping $name daemon..."
    gpio_unexport_all
    # start-stop-daemon --stop --signal INT --retry 5 --name $name
    start-stop-daemon --stop -x $binpath
    ;;
  restart)
    log_begin_msg "Restarting $name daemon..."
    #start-stop-daemon --stop --signal INT --retry 5 --name $name
    #start-stop-daemon --start -b --startas $binpath --name $name -- -w
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
    log_success_msg "Usage: /etc/init.d/proflex-spi.sh {start|stop|reload|restart|force-reload|reload-or-restart}"
    exit 1
esac

exit 0
