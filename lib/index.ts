/// <reference path="./phaser.d.ts" />

/*
List of animations:
    tweenTint:         For changing the tint of an Object
    textChangeFade:    Fade out, change text, then fade back in
    shakeX:             Shake the Object a few times left and right
    shakeY:             Shake the Object a few times up and down
    pop:               Object will grow and shrink to create a pop effect

    In From Top
        bounce: Object drops in from top with a small bounce
        fade: Object fades in from top with a small bounce
    
    Rotate From Center
        rotateIn: Rotates Object in on event
        rotateInFade: Rotates and fades Object in on event
        rotateOutFade1: Rotates and fades Object out 360 degree on event
        rotateOutFade2: Rotates and fades Object out 180 degree on event 
    
    Slide
        slideInFromBottom: Slides Object in from bottom
        slideInFromTop: Slides Object in from top
        slideInFromRight: Slides Object in from right
        slideInFromLeft: Slides Object in from left
        slideOutToBottom: Slides Object out to bottom
        slideOutToTop: Slides Object out to top
        slideOutToLeft: Slides Object out to left
        slideOutToRight: Slides Object out to right

    Size
        shrinkIt: Shrinks both Object X and Y scale to 0 evenly
        pop: Increases Objects X and Y scale evenly
        popOut: Increases Objects X and Y sclae evenly, then shrinks scale to 0 evenly
        ScaleOutY: Shrinks Object Y scale to 0 while keeping X scale consistent
        ScaleInY: Increases Object Y scale to 1 while keeping X scale consistent
        ScaleOutX: Shrinks Object X scale to 0 while keeping Y scale consistent
        ScaleInX: Shrinks Object X scale to 1 while keeping Y scale consistent

    Fade   
        fadeIn: Fades Object in 
        fadeInDown: Fades Object in from top of screen
        fadeOut: Fades Object out
        fadeFlash: Object alternates between two alpha points to give flashing effect

    Shakes 
        shakeX: Object wobbles from left and right to give shaking effect
        shakeY: Object wobbles from up and down to give shaking effect

    Switch
        shrinkX: Shrinks Object scale to 0 then back to 1 horizontally
        shrinkY: Shrinks Object scale to 0 then back to 1 horizontally
 */

// BUGS/ToDo
// Rotate in will only work once when clicked afterwards if clicked again it will do nothing. Probably a callback issue
//Need to create JSON Object for inFromTopBounce data

// import * as Phaser from './phaser';

export default class Animations {

    private _game:any;

    constructor(game) {
        game = game;
    }

        /**
         * Gives a wobble effect left and right
         * @param {Object} obj Display Object or Array of Display Objects
         */
    shakeX(game, obj:Object, data:Object = {duration: 200, distance: 15}, callback:Function = null) {
        // create a wobble animation
        let tween1 = game.add.tween(obj).to({
            x: obj['x'] - data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut).to({
            x: obj['x'] + data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut, false, 15);
        let tween2 = game.add.tween(obj).to({
            x: obj['x'] - data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut).to({
            x: obj['x'] + data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut, false, 15);
        let tween3 = game.add.tween(obj).to({
            x: obj['x']
        }, 0.3846 * data['duration'], Phaser.Easing.Sinusoidal.InOut);
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween1.start();
    }

        /**
         * Gives a wobble effect up and down
         * @param {Object} obj Display Object or Array of Display Objects
         */
    shakeY(game, obj:Object, data:Object = {duration: 200, distance: 15}, callback:Function = null) {
        // create a wobble animation
        let tween1 = game.add.tween(obj).to({
            y: obj['y'] - data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut).to({
            y: obj['y'] + data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut, false, 15);
        let tween2 = game.add.tween(obj).to({
            y: obj['y'] - data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut).to({
            y: obj['y'] + data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut, false, 15);
        let tween3 = game.add.tween(obj).to({
            y: obj['y']
        }, 0.3846 * data['duration'], Phaser.Easing.Sinusoidal.InOut);
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween1.start();
        if(callback) {
            tween3.onComplete.add(() => {
                callback();
            });
        }
    }

    /**
     * Gives a wobble effect up and down
     * @param {Object} obj Display Object or Array of Display Objects
     */
    bounce(game, obj:Object, data:Object = {duration: 200, distance: 15}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            y: obj['y'] - data['distance']
        }, 0.25 * data['duration'], Phaser.Easing.Bounce.Out, false, 15);
        let tween2 = game.add.tween(obj).to({
            y: obj['y']
        }, 0.25 * data['duration'], Phaser.Easing.Bounce.Out).to({
            y: obj['y'] - data['distance'] / 2
        }, 0.25 * data['duration'], Phaser.Easing.Bounce.Out).to({
            y: obj['y']
        }, 0.25 * data['duration'], Phaser.Easing.Bounce.Out, false, 15);
        tween1.chain(tween2);
        tween1.start();
        if(callback) {
            tween2.onComplete.add(() => {
                callback();
            }); 
        }
    }

    /**
     * Fades out
     * @param {Object} obj Display Object or Array of Display Objects
     */
    fadeOut(game, obj:Object, data:Object = {duration: 200}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            alpha: 0
        }, data['duration'], Phaser.Easing.Linear.None, false, 15);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.start();
    }

    /**
     * Fades in
     * @param {Object} obj Display Object or Array of Display Objects
     */
    fadeIn(game, obj:Object, data:Object = {duration: 200}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            alpha: 1
        }, data['duration'], Phaser.Easing.Linear.None, false, 15);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.start();
    }

    /**
     * Tweens alpha in a loop to give flashing effect
     * @param {Object} obj Display Object or Array of Display Objects
     */
    fadeFlash(game, obj:Object, data:Object = {duration: 200}, callback:Function = null) {
         let tween1 = game.add.tween(obj).to({
            alpha: 0
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None).to({
            alpha: 1
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None, false, 15).loop(true);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.start();
    }

    /**
     * Fades in from top
     * @param {Object} obj Display Object or Array of Display Objects
     */
    fadeInDown(game, obj:Object, data:Object = {duration: 200, distance: 30}, callback:Function = null) {
        obj['y'] = obj['y'] - data['distance'];
        let tween1 = game.add.tween(obj).to({
            y: obj['y'] + data['distance'],
            alpha: 1
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None, false, 15);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.start();
    }
    
    /**
     * Increases scale to desired amount then shrinks back to original scale 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    pop(game, obj:Object, data:Object = {duration: 100, distance: 0.25}, callback:Function = null) {
        // create a pop animation
        let tween1 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'] + data['distance'],
            y: obj['scale']['y'] + data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None);
        let tween2 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'],
            y: obj['scale']['y'] 
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None, false, 15);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.chain(tween2);
        tween1.start(); 
    }

    /**
     * Increases scale to desired distance then shrinks out 
     * @param {Object} obj Display Object or Array of Display Objects
     */ 
    popOut(game, obj:Object, data:Object = {duration: 100, distance: 0.25}, callback:Function = null) {
        // create a pop animation
        let tween1 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'] + data['distance'],
            y: obj['scale']['y'] + data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None);
        let tween2 = game.add.tween(obj['scale']).to({
            x: 0,
            y: 0 
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None, false, 15);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.chain(tween2);
        tween1.start();
       
    }

    /**
     * Gives a wobble effect up and down
     * @param {Object} obj Display Object or Array of Display Objects
     */
    onOver(game, obj:Object, data:Object = {duration: 100, distance: 0.25}, callback:Function = null) {

        let tween1 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'] + data['distance'],
            y: obj['scale']['y'] + data['distance']
        }, data['duration'], Phaser.Easing.Linear.None, false, 15);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.start();
    }

    /**
     * Gives a wobble effect up and down
     * @param {Object} obj Display Object or Array of Display Objects
     */
    onOut(game, obj:Object, data:Object = {duration: 100, distance: 0.25}, callback:Function = null) {
        let tween1 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'] - data['distance'],
            y: obj['scale']['y'] - data['distance']
        }, data['duration'], Phaser.Easing.Linear.None, false, 15);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.start();
       
    }

    /**
     * Drops in and bounces from top 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    inFromTopBounce(game, obj:Object, data:Object = {duration: 200, distance: 30}, callback:Function = null) {
        obj['y'] = obj['y'] - data['distance'];
        let tween1 = game.add.tween(obj).to({
            y: obj['y'] + data['distance']
        }, data['duration'], Phaser.Easing.Bounce.Out);
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.start();
    }

    /**
     * Drops in, fades, and bounces from top 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    inFromTopFadeBounce(game, obj:Object, data:Object = {duration: 3000, distance: 30}, callback:Function = null) {
        obj['alpha'] = 0;
        obj['y'] = obj['y'] - data['distance'];
        let tween1 = game.add.tween(obj).to({
            y: obj['y'] + data['distance'],
            alpha: 1
        }, data['duration'], Phaser.Easing.Bounce.Out)
        if(callback) {
            tween1.onComplete.add(() => {
                callback();
            })
        }
        tween1.start();
    }

    /**
     * Rotates in 360 degrees 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    rotateIn(game, obj:Object, data:Object = {duration: 1000, distance: 300}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            rotation: 6.283
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Rotates  and fades in 360 degrees 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    rotateInFade(game, obj:Object, data:Object = {duration: 1000, distance: 300}, callback:Function = null) {
        obj['alpha'] = 0;
        let tween1 = game.add.tween(obj).to({
            rotation: 6.283,
            alpha: 1
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Rotates and fades out 180 degrees 
     * @param {Object} obj Display Object or Array of Display Objects
     */   
    rotateOutFade1(game, obj:Object, data:Object = {duration: 1000, distance:100}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            rotation: 3.1415,
            alpha: 0
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback()
        });
        tween1.start();
    }

    /**
     * Rotates and fades out 360 degrees 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    rotateOutFade2(game, obj:Object, data:Object = {duration: 1000, distance: 300}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            rotation: 6.283,
            alpha: 0
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback()
        });
        tween1.start();
    }

    /**
     * Slides in from bottom 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    slideInFromBottom(game, obj:Object, data:Object = {duration: 1000, distance: 750}, callback:Function = null) {
        obj['y'] = obj['y'] + data['distance'];
        let tween1 = game.add.tween(obj).to({
            y: obj['y'] - data['distance']
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }


    /**
     * Slides in from top 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    slideInFromTop(game, obj:Object, data:Object = {duration: 1000, distance: 750}, callback:Function = null) {
        obj['y'] = obj['y'] - data['distance'];
        let tween1 = game.add.tween(obj).to({
            y: obj['y'] + data['distance']
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Slides in from right 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    slideInFromRight(game, obj:Object, data:Object = {duration: 1000, distance: 750}, callback:Function = null) {
        obj['x'] = obj['x'] + data['distance'];
        let tween1 = game.add.tween(obj).to({
            x: obj['x'] - data['distance']
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Slides in from left 
     * @param {Object} obj Display Object or Array of Display Objects
     */
     slideInFromLeft(game, obj:Object, data:Object = {duration: 1000, distance: 750}, callback:Function = null) {
        obj['x'] = obj['x'] - data['distance'];
        let tween1 = game.add.tween(obj).to({
            x: obj['x'] + data['distance']
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Slides out to  bottom 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    slideOutToBottom(game, obj:Object, data:Object = {duration: 1000, distance: 750}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            y: obj['y']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut).to({
            y: obj['y'] + data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Slides out to top 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    slideOutToTop(game, obj:Object, data:Object = {duration: 1000, distance: 750}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            y: obj['y']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut).to({
            y: obj['y'] - data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Slides out to left 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    slideOutToLeft(game, obj:Object, data:Object = {duration: 1000, distnace: 750}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            x: obj['x']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut).to({
            x: obj['x'] - data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Slides out to right 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    slideOutToRight(game, obj:Object, data:Object = {duration: 1000, distance: 750}, callback:Function = null) {
        let tween1 = game.add.tween(obj).to({
            x: obj['x']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut).to({
            x: obj['x'] + data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(() => {
            callback();
        });
        tween1.start();
    }

    /**
     * Scales Y to 0  
     * @param {Object} obj Display Object or Array of Display Objects
     */
    scaleOutY(game, obj:Array<Object>, data:Object= {duration: 350, distance: 100}, callback:Function = null) {
        if(this.isArray(obj)) {
            let tweens = [];
            
            for(let i of obj) {
                tweens.push(game.add.tween(i['scale']).to({
                    x: 1,
                    y: 0
                }, data['duration'], Phaser.Easing.Linear.InOut))
            }

            tweens[tweens.length-1].onComplete.add(() => {
                callback();
            });

            for(let i of tweens) {
                i.start();
            }
        } else {
            let tween1 = game.add.tween(obj['scale']).to({
			x: 1,
			y: 0
            }, data['duration'], Phaser.Easing.Linear.InOut)
            tween1.onComplete.add(() => {
                callback();
            })
            tween1.start();
        }
        
    }

    /**
     * Scales Y from 0 to set scale 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    scaleInY(game, obj:Array<Object>, data:Object= {duration: 350, distance: 100}, callback:Function = null) {
        if(this.isArray(obj)) {
            let tweens = [];
            
            for(let i of obj) {
                tweens.push(game.add.tween(i['scale']).to({
                    x: 1,
                    y: 1
                }, data['duration'], Phaser.Easing.Linear.InOut))
            }

            tweens[tweens.length-1].onComplete.add(() => {
                callback();
            });

            for(let i of tweens) {
                i.start();
            }
        } else {
            let tween1 = game.add.tween(obj['scale']).to({
			x: 1,
			y: 1
            }, data['duration'], Phaser.Easing.Linear.InOut)
            tween1.onComplete.add(() => {
                callback();
            })
            tween1.start();
        }
        
    }

    /**
     * Scales X  to 0  
     * @param {Object} obj Display Object or Array of Display Objects
     */
    scaleOutX(game, obj:Array<Object>, data:Object = {duration: 350, distance: 100}, callback:Function = null) {
        if(this.isArray(obj)) {
            let tweens = [];
            
            for(let i of obj) {
                tweens.push(game.add.tween(i['scale']).to({
                    x: 0,
                    y: 1
                }, data['duration'], Phaser.Easing.Linear.InOut))
            }

            tweens[tweens.length-1].onComplete.add(() => {
                callback();
            });

            for(let i of tweens) {
                i.start();
            }
        } else {
            let tween1 = game.add.tween(obj['scale']).to({
			x: 0,
			y: 1
            }, data['duration'], Phaser.Easing.Linear.InOut)
            tween1.onComplete.add(() => {
                callback();
            })
            tween1.start();
        }
        
    }

    /**
     * Scales X from  0 to set scale 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    scaleInX(game, obj:Array<Object>, data:Object = {duration: 350, distance: 100}, callback:Function = null) {
        if(this.isArray(obj)) {
            let tweens = [];
            
            for(let i of obj) {
                tweens.push(game.add.tween(i['scale']).to({
                    x: 1,
                    y: 1
                }, data['duration'], Phaser.Easing.Linear.InOut))
            }

            tweens[tweens.length-1].onComplete.add(() => {
                callback();
            });

            for(let i of tweens) {
                i.start();
            }
        } else {
            let tween1 = game.add.tween(obj['scale']).to({
			x: 1,
			y: 1  
            }, data['duration'], Phaser.Easing.Linear.InOut)
            tween1.onComplete.add(() => {
                callback();
            })
            tween1.start();
        }
        
    }

    /**
     * Shrinks to scale 0
     * 
     * @param {Object} obj Display Object or Array of Display Objects
     */
    shrinkIt(game, obj:Array<Object>, data:Object = {duration: 350, distance: 100}, callback:Function = null) {
        if(this.isArray(obj)) {
            let tweens = [];
            
            for(let i of obj) {
                tweens.push(game.add.tween(i['scale']).to({
                    x: 0,
                    y: 0
                }, data['duration'], Phaser.Easing.Linear.InOut))
            }

            tweens[tweens.length-1].onComplete.add(() => {
                callback();
            });

            for(let i of tweens) {
                i.start();
            }
        } else {
            let tween1 = game.add.tween(obj['scale']).to({
			x: 0,
			y: 0
            }, data['duration'], Phaser.Easing.Linear.InOut)
            tween1.onComplete.add(() => {
                callback();
            })
            tween1.start();
        }
    }


    /**
     * Scales X to 0 then back to normal scale and changes the texture mid tween  
     * @param {Object} obj Display Object or Array of Display Objects
     */
    shrinkX(game, obj:Object, data:Object = {duration: 350, distance: 100, texture: 't2'}, callback:Function = null) {
        // create tween 1 - shrink to nothing
        let tween1 = game.add.tween(obj['scale']).to({
            x: 0
        }, data['duration'] * 0.5, Phaser.Easing.Bounce.In, false);

        // create tween 2 - shrink back to full size
        let tween2 = game.add.tween(obj['scale']).to({
            x:1
        }, data['duration'] * 0.5, Phaser.Easing.Bounce.Out, false);

        tween1.onComplete.add(() => {
            obj['loadTexture'](data['texture']);
            tween2.start();
        });

        tween1.start();
    }

    /**
     * Scales Y to 0 then back to normal scale and changes the texture mid tween  
     * @param {Object} obj Display Object or Array of Display Objects
     */
    shrinkY(game, obj:Object, data:Object = {duration: 350, distance: 100, texture: 't2'}, callback:Function = null) {
        // create tween 1 - shrink to nothing

        let tween1 = game.add.tween(obj['scale']).to({
            y: 0
        }, data['duration'] * 0.5, Phaser.Easing.Bounce.In, false);

        // create tween 2 - shrink back to full size
        let tween2 = game.add.tween(obj['scale']).to({
            y:1
        }, data['duration'] * 0.5, Phaser.Easing.Bounce.Out, false);

        tween1.onComplete.add(() => {
            obj['loadTexture'](data['texture']);
            let currentTexture = data['texture'];
            tween2.start();
        });

        tween1.start();
    }



    get inFromTop() {
        return {
            bounce: (game, obj:Object, data:Object, callback:Function) => {this.inFromTopBounce(game, obj, data, callback)},
            fade: (game, obj:Object, data:Object, callback:Function) => {this.inFromTopFadeBounce(game, obj, data, callback)}
        }
    }

    get rotateFromCenter() {
        return {
            rotateIn: (game, obj:Object, data:Object, callback:Function) => {this.rotateIn(game, obj, data, callback)},
            rotateInFade: (game, obj, data, callback) => {this.rotateInFade(game, obj, data, callback)},
            rotateOutFade1: (game, obj, data, callback) => {this.rotateOutFade1(game, obj, data, callback)},
            rotateOutFade2: (game, obj, data, callback) => {this.rotateOutFade2(game, obj, data, callback)}
        }
    }

    get slide() {
        return {
            slideInFromBottom: (game, obj, data, callback) => {this.slideInFromBottom(game, obj, data, callback)},
            slideInFromTop: (game, obj, data, callback) => {this.slideInFromTop(game, obj, data, callback)},
            slideInFromRight: (game, obj, data, callback) => {this.slideInFromRight(game, obj, data, callback)},
            slideInFromLeft: (game, obj, data, callback) => {this.slideInFromLeft(game, obj, data, callback)},
            slideOutToBottom:(game, obj, data, callback) => {this.slideOutToBottom(game, obj, data, callback)},
            slideOutToTop:(game, obj, data, callback) => {this.slideOutToTop(game, obj, data, callback)},
            slideOutToLeft:(obj, data, callback) => {this.slideOutToLeft(obj, data, callback)},
            slideOutToRight:(game, obj, data, callback) => {this.slideOutToRight(game, obj, data, callback)}
        }
    }

    get size() {
        return {
            shrinkIt:(game, obj, data, callback) => {this.shrinkIt(game, obj, data, callback)},
            pop:(game, obj, data, callback) => {this.pop(game, obj, data, callback)},
            popOut:(game, obj, data, callback) => {this.popOut(game, obj, data, callback)},
            scaleOutY:(game, obj, data, callback) => {this.scaleOutY(game, obj, data, callback)},
            scaleInY:(game, obj, data, callback) => {this.scaleInY(game, obj, data, callback)},
            scaleOutX:(game, obj, data, callback) => {this.scaleOutX(game, obj, data, callback)},
            scaleInX:(game, obj, data, callback) => {this.scaleInX(game, obj, data, callback)},
            onOver:(game, obj, data, callback) => {this.onOver(game, obj, data, callback)},
            onOut:(game, obj, data, callback) => {this.onOut(game, obj, data, callback)}
        }
    }

    get fade() {
        return {
            fadeIn:(game, obj, data, callback) => {this.fadeIn(game, obj, data, callback)},
            fadeInDown:(game, obj, data, callback) => {this.fadeInDown(game, obj, data, callback)},
            fadeOut:(game, obj, data, callback) => {this.fadeOut(game, obj, data, callback)},
            fadeFlash:(game, obj, data, callback) => {this.fadeFlash(game, obj, data, callback)}
        }
    }

    get shakes() {
        return{
            shakeX:(game, obj, data, callback) => {this.shakeX(game, obj, data, callback)},
            shakeY:(game, obj, data, callback) => {this.shakeY(game, obj, data, callback)}
        }
    }

    get switch() {
        return {
            shrinkX:(game, obj, data, callback) => {this.shrinkX(game, obj, data, callback)},
            shrinkY:(game, obj, data, callback) => {this.shrinkY(game, obj, data, callback)}
        }
    }

    isArray(obj) {
        if(obj instanceof Array) {
            return true;
        } else {
            return false;
        }
    }
}