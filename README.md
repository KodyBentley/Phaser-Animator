# Phaser-Animator


Phaser-Animator is a free open source UI plugin to make creating simple and efficient animations quickly using Phaser.io.

# Getting Started

To start using Phaser-Animator in your project:
- Download the project from this repo
- Include index.js found in:
```
Phaser-Animator
├── bin
│   └── index.js
```
- Add index.js to your current Phaser project in the index.html:


`Phaser-Animator` is a simple and efficient to use UI plugin to be used with Phaser.io 

## Installation



##Basic Usage
1. Include the JS script above the end of  your document's `<html>`

  ```html
<script src="scripts/phaser.min.js"></script>
<script src="scripts/index.js"></script>
  ```
2. Here is a list of premade animation functions with default parameters to be used right out of the box:

  * `shakeY`
  * `shakeY`
  * `inFromTop.bounce`
  * `inFromTop.fade`
  * `rotateIn`
  * `rotateInFade`
  *  `rotateOutFade1`
  * `rotateOutFade2`
  * `slideInFromBottom`
  * `slideInFromTop`
  * `slideInFromRight`
  * `slideInFromLeft`
  * `slideOutToBottom`
  * `slideOutToTop`
  * `slideOutToRight`
  * `slideOutToLeft`
  * `shrinkIt`
  * `pop`
  * `popOut`
  * `scaleOutY`
  * `scaleInY`
  * `scaleOutX`
  * `scaleInX`
  * `fadeIn`
  * `fadeInDown`
  * `fadeOut`
  * `fadeFlash`
  * `shrinkX`
  * `shrinkY`
 

Full example:

```html
this.animationRunning = true;
	    shakeY() {
				this.game.animations.shakes.shakeX(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
 ```
            
```html            
            shakeX() {
				this.game.animations.shakes.shakeY(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html
            inFromTopBounce() {
				this.game.animations.inFromTop.Bounce(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html
            //Set sprite to alpha zero in game before callinn this function
            inFromTopFade() {
				this.game.animations.inFromTop.fade(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
 ```
```html
            rotateIn() {
				this.game.animations.rotateFromCenter.rotateIn(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html
            rotateInFade() {
				this.game.animations.rotateFromCenter.rotateInFade(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
 ```
 ```html
            rotateOutFade1() {
				this.game.animations.rotateFromCenter.rotateOutFade1(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
 ```
```html
            rotateOutFade2() {
				this.game.animations.rotateFromCenter.roataeOutFade2(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            slideInFromBottom() {
				this.game.animations.slide.slideInFromBottom(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            slideInFromTop() {
				this.game.animations.slide.slideInFromTop(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            slideInFromRight() {
				this.game.animations.slide.slideInFromRight(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            slideInFromLeft() {
				this.game.animations.slide.slideInFromLeft(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            slideOutToBottom() {
				this.game.animations.slide.slideOutToBottom(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            slideOutToTop() {
				this.game.animations.slide.slideOutToTop(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            slideOutToRight() {
				this.game.animations.slide.slideOutToRight(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            slideOutToLeft() {
				this.game.animations.slide.slideOutToLeft(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            shrinkIt() {
				this.game.animations.size.shrinkIt(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            pop() {
				this.game.animations.size.pop(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            popOut() {
				this.game.animations.size.popOut(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            scaleOutY() {
				this.game.animations.size.scaleOutY(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            //Must set sprite Y scale to 0 to get desired effect
            scaleInY() {
				this.game.animations.size.scaleInY(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            scaleOutX() {
				this.game.animations.size.scaleOutX(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            //Must set sprite X scale to 0 to get desired effect
            scaleInX() {
				this.game.animations.size.scaleInX(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            //Must set sprite to be faded in original alpha to 0
            fadeIn() {
				this.game.animations.fade.fadeIn(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            //Must set sprite to be faded in original alpha to 0
            fadeInDown() {
				this.game.animations.fade.fadeInDown(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
             fadeOut() {
				this.game.animations.fade.fadeOut(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            fadeFlash() {
				this.game.animations.fade.fadeFlash(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            shrinkX() {
				this.game.animations.switch.shrinkX(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
```html            
            shrinkY() {
				this.game.animations.switch.shrinkY(this.game, sprite, false, () => {
					this.animationRunning = false;
				});
            }
```
            
            
