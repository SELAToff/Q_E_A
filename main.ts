input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let BotãoDESpressionado = true
basic.forever(function () {
    while (BotãoDESpressionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            music.ringTone(262)
            BotãoDESpressionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            music.ringTone(523)
            BotãoDESpressionado = false
        }
    }
})
