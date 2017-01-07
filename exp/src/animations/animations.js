export default class Animations {
    constructor(game) {
        this.game = game;
    }

    pop(obj, data = {duration: 25, distance: 0.03}, callback = null) {
        let tweenGrow = this.game.add.tween(obj.scale).to({
            x: obj.scale.x + data.distance,
            y: obj.scale.y + 0.03
        }, data.duration, Phaser.Easing.Linear.None);
        let tweenShrink = this.game.add.tween(obj.scale).to({
            x: obj.scale.x - data.distance,
            y: obj.scale.y - data.distance
        }, data.duration, Phaser.Easing.Linear.None);
        tweenShrink.chain(tweenGrow);
        tweenShrink.start();
        tweenGrow.onComplete.add(() => {
            if(callback) callback();
        });
    }

    shakeVertical(obj, data = {duration: 200, distance: 25}, callback = null) {
        // create a wobble animation
        var tween1 = this.game.add.tween(obj).to({
            y: obj.y - data.distance
        }, data.duration * 0.25, Phaser.Easing.Sinusoidal.InOut).to({
            y: obj.y + data.distance
        }, data.duration * 0.25, Phaser.Easing.Sinusoidal.InOut, false, 10);
        var tween2 = this.game.add.tween(obj).to({
            y: obj.y - data.distance
        }, data.duration * 0.25, Phaser.Easing.Sinusoidal.InOut).to({
            y: obj.y + data.distance
        }, data.duration * 0.25, Phaser.Easing.Sinusoidal.InOut, false, 10);
        var tween3 = this.game.add.tween(obj).to({
            y: obj.y
        }, data.duration * 0.25, Phaser.Easing.Sinusoidal.InOut);
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween3.onComplete.add(() => {
            if(callback) callback();
        });
        tween1.start();
    }
}