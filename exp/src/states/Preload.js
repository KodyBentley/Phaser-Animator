export default class Preload extends Phaser.State {

	create() {
		this.game.load.onLoadStart.add(this.loadStart, this);
    	this.game.load.onFileComplete.add(this.fileComplete, this);
    	this.game.load.onLoadComplete.add(this.loadComplete, this);
    	this.start();
	}

	start() {
		// load game buttons
		this.game.load.image('logo', 'assets/logo.png', 300, 102, 2);

		this.game.load.start();
	}

	loadStart() {

	}

	fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
		//console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles)
	}

	loadComplete() {
		this.game.state.start('Game');
	}
}