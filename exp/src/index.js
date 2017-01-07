import Boot from 'states/Boot';
import Preload from 'states/Preload';
import GameState from 'states/Game';


class Game extends Phaser.Game {

	constructor() {
		super(1000, 1000, Phaser.AUTO, 'content', null);
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Game', GameState, false);
		this.state.start('Boot');
	}
}

new Game();