let stop = 0
let outils = 0
input.onGesture(Gesture.Shake, function () {
    stop = 1
    outils = randint(1, 3)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (outils == 1) {
        music.ringTone(330)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . # # . .
            `)
        music.stopAllSounds()
    }
    if (outils == 2) {
        music.ringTone(587)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        music.stopAllSounds()
    }
    if (outils == 3) {
        music.ringTone(988)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.stopAllSounds()
    }
})
basic.forever(function () {
    while (stop == 0) {
        music.ringTone(262)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . # # . .
            `)
        music.ringTone(349)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        music.ringTone(440)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
