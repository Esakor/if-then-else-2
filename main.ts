input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, -1)
})
let Player: game.LedSprite = null
Player = game.createSprite(2, 2)
let Enemy = game.createSprite(0, 2)
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Target)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        Enemy.delete()
        Enemy = game.createSprite(randint(0, 10), 2)
    }
})
