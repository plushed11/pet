input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    soundExpression.yawn.playUntilDone()
    basic.showIcon(IconNames.Asleep)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Sad)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.twinkle.playUntilDone()
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.Happy)
