function steam_Sensor () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        return true
    } else {
        return false
    }
}
basic.forever(function () {
	
})
