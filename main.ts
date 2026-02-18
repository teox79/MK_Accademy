basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("distance", mecanumRobotV2.ultra())
    basic.pause(200)
})
