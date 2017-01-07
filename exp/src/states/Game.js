export default class Game extends Phaser.State {

	create() {
		this.animationRunning = false;

		this.logo = this.add.image(this.game.width * 0.5, this.game.height * 0.5, 'logo');
		this.logo.anchor.setTo(0.5);
		this.logo.inputEnabled = true;
		this.logo.events.onInputDown.add(() => {
			if(!this.animationRunning) {
				this.doAnimation(parent.animationType);
			}
		});
	}

	doAnimation(animVal) {
		this.animationRunning = true;
		switch(animVal) {
			case 0:
				this.game.animations.pop(this.logo, {duration: 200, distance: 0.03}, () => {
					this.animationRunning = false;
				});
				break;
			case 1:
			this.game.animations.shakeVertical(this.logo, {duration: 200, distance: 25}, () => {
					this.animationRunning = false;
				});
				break;
			case 2:
				break;
			case 3:
				break;
		}
	}
}