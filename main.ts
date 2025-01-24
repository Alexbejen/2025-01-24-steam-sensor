function steam_Sensor () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        return 0
    } else {
        return 1
    }
}
basic.forever(function () {
    steam_Sensor()
    if (steam_Sensor() == 0) {
        music.setVolume(255)
        music.ringTone(262)
    } else {
        music.setVolume(0)
    }
})
