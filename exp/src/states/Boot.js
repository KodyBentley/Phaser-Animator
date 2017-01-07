import Animations from '../animations/animations';

export default class Boot extends Phaser.State {

	init() {
        	this.game.scale.trackParentInterval = 1;
        	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	}

	preload() {
		
	}

	create() {
		this.game.animations = new Animations(this.game);
		this.game.state.start('Preload');
	}
}