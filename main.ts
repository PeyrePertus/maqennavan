basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    }
})
