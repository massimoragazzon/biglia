let posx = 0
let posy = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    posx = Math.round(input.acceleration(Dimension.X) / 400) + 2
    posy = Math.round(input.acceleration(Dimension.Y) / 400) + 2
    led.plot(posx, posy)
})
basic.forever(function () {
    if (0 == 0) {
    	
    }
})
