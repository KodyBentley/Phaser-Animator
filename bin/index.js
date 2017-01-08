"use strict";
var Animations = (function () {
    function Animations() {
    }
    Animations.prototype.shakeX = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 200,
            distance: 15
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            x: obj['x'] - data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut).to({
            x: obj['x'] + data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut, false, 15);
        var tween2 = game.add.tween(obj).to({
            x: obj['x'] - data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut).to({
            x: obj['x'] + data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut, false, 15);
        var tween3 = game.add.tween(obj).to({
            x: obj['x']
        }, 0.3846 * data['duration'], Phaser.Easing.Sinusoidal.InOut);
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween1.start();
        if (callback) {
            tween3.onComplete.add(function () {
                callback();
            });
        }
    };
    Animations.prototype.shakeY = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 200,
            distance: 15
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            y: obj['y'] - data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut).to({
            y: obj['y'] + data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut, false, 15);
        var tween2 = game.add.tween(obj).to({
            y: obj['y'] - data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut).to({
            y: obj['y'] + data['distance']
        }, 0.1538 * data['duration'], Phaser.Easing.Sinusoidal.InOut, false, 15);
        var tween3 = game.add.tween(obj).to({
            y: obj['y']
        }, 0.3846 * data['duration'], Phaser.Easing.Sinusoidal.InOut);
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween1.start();
        if (callback) {
            tween3.onComplete.add(function () {
                callback();
            });
        }
    };
    Animations.prototype.bounce = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 200,
            distance: 15
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            y: obj['y'] - data['distance']
        }, 0.25 * data['duration'], Phaser.Easing.Bounce.Out, false, 15);
        var tween2 = game.add.tween(obj).to({
            y: obj['y']
        }, 0.25 * data['duration'], Phaser.Easing.Bounce.Out).to({
            y: obj['y'] - data['distance'] / 2
        }, 0.25 * data['duration'], Phaser.Easing.Bounce.Out).to({
            y: obj['y']
        }, 0.25 * data['duration'], Phaser.Easing.Bounce.Out, false, 15);
        tween1.chain(tween2);
        tween1.start();
        if (callback) {
            tween2.onComplete.add(function () {
                callback();
            });
        }
    };
    Animations.prototype.fadeOut = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 200
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            alpha: 0
        }, data['duration'], Phaser.Easing.Linear.None, false, 15);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.start();
    };
    Animations.prototype.fadeIn = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 200
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            alpha: 1
        }, data['duration'], Phaser.Easing.Linear.None, false, 15);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.start();
    };
    Animations.prototype.fadeFlash = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            alpha: 0
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None).to({
            alpha: 1
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None, false, 15).loop(true);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.start();
    };
    Animations.prototype.fadeInDown = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 200,
            distance: 30
        };
        data = this.validate(deflt, data);
        obj['y'] = obj['y'] - data['distance'];
        var tween1 = game.add.tween(obj).to({
            y: obj['y'] + data['distance'],
            alpha: 1
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None, false, 15);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.start();
    };
    Animations.prototype.pop = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 100,
            distance: 0.25
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'] + data['distance'],
            y: obj['scale']['y'] + data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None);
        var tween2 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'],
            y: obj['scale']['y']
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None, false, 15);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.chain(tween2);
        tween1.start();
    };
    Animations.prototype.popOut = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 100,
            distance: 0.25
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'] + data['distance'],
            y: obj['scale']['y'] + data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None);
        var tween2 = game.add.tween(obj['scale']).to({
            x: 0,
            y: 0
        }, 0.5 * data['duration'], Phaser.Easing.Linear.None, false, 15);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.chain(tween2);
        tween1.start();
    };
    Animations.prototype.onOver = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 100,
            distance: 0.25
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'] + data['distance'],
            y: obj['scale']['y'] + data['distance']
        }, data['duration'], Phaser.Easing.Linear.None, false, 15);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.start();
    };
    Animations.prototype.onOut = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 100,
            distance: 0.25
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj['scale']).to({
            x: obj['scale']['x'] - data['distance'],
            y: obj['scale']['y'] - data['distance']
        }, data['duration'], Phaser.Easing.Linear.None, false, 15);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.start();
    };
    Animations.prototype.inFromTopBounce = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 200,
            distance: 30
        };
        data = this.validate(deflt, data);
        obj['y'] = obj['y'] - data['distance'];
        var tween1 = game.add.tween(obj).to({
            y: obj['y'] + data['distance']
        }, data['duration'], Phaser.Easing.Bounce.Out);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.start();
    };
    Animations.prototype.inFromTopFadeBounce = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1500,
            distance: 30
        };
        data = this.validate(deflt, data);
        obj['alpha'] = 0;
        obj['y'] = obj['y'] - data['distance'];
        var tween1 = game.add.tween(obj).to({
            y: obj['y'] + data['distance'],
            alpha: 1
        }, data['duration'], Phaser.Easing.Bounce.Out);
        if (callback) {
            tween1.onComplete.add(function () {
                callback();
            });
        }
        tween1.start();
    };
    Animations.prototype.rotateIn = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            rotation: obj['rotation'] + 6.283
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.rotateInFade = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000
        };
        data = this.validate(deflt, data);
        obj['alpha'] = 0;
        var tween1 = game.add.tween(obj).to({
            rotation: obj['rotation'] + 6.283,
            alpha: 1
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.rotateOutFade1 = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            rotation: 3.1415,
            alpha: 0
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.rotateOutFade2 = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            rotation: 6.283,
            alpha: 0
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.slideInFromBottom = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000,
            distance: 500
        };
        data = this.validate(deflt, data);
        obj['y'] = obj['y'] + data['distance'];
        var tween1 = game.add.tween(obj).to({
            y: obj['y'] - data['distance']
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.slideInFromTop = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000,
            distance: 500
        };
        data = this.validate(deflt, data);
        obj['y'] = obj['y'] - data['distance'];
        var tween1 = game.add.tween(obj).to({
            y: obj['y'] + data['distance']
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.slideInFromRight = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000,
            distance: 750
        };
        data = this.validate(deflt, data);
        obj['x'] = obj['x'] + data['distance'];
        var tween1 = game.add.tween(obj).to({
            x: obj['x'] - data['distance']
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.slideInFromLeft = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000,
            distance: 750
        };
        data = this.validate(deflt, data);
        obj['x'] = obj['x'] - data['distance'];
        var tween1 = game.add.tween(obj).to({
            x: obj['x'] + data['distance']
        }, data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.slideOutToBottom = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000,
            distance: 500
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            y: obj['y']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut).to({
            y: obj['y'] + data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.slideOutToTop = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000,
            distance: 500
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            y: obj['y']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut).to({
            y: obj['y'] - data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.slideOutToLeft = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000,
            distance: 750
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            x: obj['x']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut).to({
            x: obj['x'] - data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.slideOutToRight = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 1000,
            distance: 750
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj).to({
            x: obj['x']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut).to({
            x: obj['x'] + data['distance']
        }, 0.5 * data['duration'], Phaser.Easing.Exponential.InOut, false);
        tween1.onComplete.add(function () {
            callback();
        });
        tween1.start();
    };
    Animations.prototype.scaleOutY = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 350
        };
        data = this.validate(deflt, data);
        if (this.isArray(obj)) {
            var tweens = [];
            for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
                var i = obj_1[_i];
                tweens.push(game.add.tween(i['scale']).to({
                    x: 1,
                    y: 0
                }, data['duration'], Phaser.Easing.Linear.InOut));
            }
            tweens[tweens.length - 1].onComplete.add(function () {
                callback();
            });
            for (var _a = 0, tweens_1 = tweens; _a < tweens_1.length; _a++) {
                var i = tweens_1[_a];
                i.start();
            }
        }
        else {
            var tween1 = game.add.tween(obj['scale']).to({
                x: 1,
                y: 0
            }, data['duration'], Phaser.Easing.Linear.InOut);
            tween1.onComplete.add(function () {
                callback();
            });
            tween1.start();
        }
    };
    Animations.prototype.scaleInY = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 350
        };
        data = this.validate(deflt, data);
        if (this.isArray(obj)) {
            var tweens = [];
            for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
                var i = obj_2[_i];
                tweens.push(game.add.tween(i['scale']).to({
                    x: 1,
                    y: 1
                }, data['duration'], Phaser.Easing.Linear.InOut));
            }
            tweens[tweens.length - 1].onComplete.add(function () {
                callback();
            });
            for (var _a = 0, tweens_2 = tweens; _a < tweens_2.length; _a++) {
                var i = tweens_2[_a];
                i.start();
            }
        }
        else {
            var tween1 = game.add.tween(obj['scale']).to({
                x: 1,
                y: 1
            }, data['duration'], Phaser.Easing.Linear.InOut);
            tween1.onComplete.add(function () {
                callback();
            });
            tween1.start();
        }
    };
    Animations.prototype.scaleOutX = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 350
        };
        data = this.validate(deflt, data);
        if (this.isArray(obj)) {
            var tweens = [];
            for (var _i = 0, obj_3 = obj; _i < obj_3.length; _i++) {
                var i = obj_3[_i];
                tweens.push(game.add.tween(i['scale']).to({
                    x: 0,
                    y: 1
                }, data['duration'], Phaser.Easing.Linear.InOut));
            }
            tweens[tweens.length - 1].onComplete.add(function () {
                callback();
            });
            for (var _a = 0, tweens_3 = tweens; _a < tweens_3.length; _a++) {
                var i = tweens_3[_a];
                i.start();
            }
        }
        else {
            var tween1 = game.add.tween(obj['scale']).to({
                x: 0,
                y: 1
            }, data['duration'], Phaser.Easing.Linear.InOut);
            tween1.onComplete.add(function () {
                callback();
            });
            tween1.start();
        }
    };
    Animations.prototype.scaleInX = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 350
        };
        data = this.validate(deflt, data);
        if (this.isArray(obj)) {
            var tweens = [];
            for (var _i = 0, obj_4 = obj; _i < obj_4.length; _i++) {
                var i = obj_4[_i];
                tweens.push(game.add.tween(i['scale']).to({
                    x: 1,
                    y: 1
                }, data['duration'], Phaser.Easing.Linear.InOut));
            }
            tweens[tweens.length - 1].onComplete.add(function () {
                callback();
            });
            for (var _a = 0, tweens_4 = tweens; _a < tweens_4.length; _a++) {
                var i = tweens_4[_a];
                i.start();
            }
        }
        else {
            var tween1 = game.add.tween(obj['scale']).to({
                x: 1,
                y: 1
            }, data['duration'], Phaser.Easing.Linear.InOut);
            tween1.onComplete.add(function () {
                callback();
            });
            tween1.start();
        }
    };
    Animations.prototype.shrinkIt = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 350
        };
        data = this.validate(deflt, data);
        if (this.isArray(obj)) {
            var tweens = [];
            for (var _i = 0, obj_5 = obj; _i < obj_5.length; _i++) {
                var i = obj_5[_i];
                tweens.push(game.add.tween(i['scale']).to({
                    x: 0,
                    y: 0
                }, data['duration'], Phaser.Easing.Linear.InOut));
            }
            tweens[tweens.length - 1].onComplete.add(function () {
                callback();
            });
            for (var _a = 0, tweens_5 = tweens; _a < tweens_5.length; _a++) {
                var i = tweens_5[_a];
                i.start();
            }
        }
        else {
            var tween1 = game.add.tween(obj['scale']).to({
                x: 0,
                y: 0
            }, data['duration'], Phaser.Easing.Linear.InOut);
            tween1.onComplete.add(function () {
                callback();
            });
            tween1.start();
        }
    };
    Animations.prototype.shrinkX = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 350,
            texture: 't2'
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj['scale']).to({
            x: 0
        }, data['duration'] * 0.5, Phaser.Easing.Bounce.In, false);
        var tween2 = game.add.tween(obj['scale']).to({
            x: 1
        }, data['duration'] * 0.5, Phaser.Easing.Bounce.Out, false);
        tween1.onComplete.add(function () {
            obj['loadTexture'](data['texture']);
            tween2.start();
        });
        tween1.start();
    };
    Animations.prototype.shrinkY = function (game, obj, data, callback) {
        if (callback === void 0) { callback = null; }
        var deflt = {
            duration: 350,
            texture: 't2'
        };
        data = this.validate(deflt, data);
        var tween1 = game.add.tween(obj['scale']).to({
            y: 0
        }, data['duration'] * 0.5, Phaser.Easing.Bounce.In, false);
        var tween2 = game.add.tween(obj['scale']).to({
            y: 1
        }, data['duration'] * 0.5, Phaser.Easing.Bounce.Out, false);
        tween1.onComplete.add(function () {
            obj['loadTexture'](data['texture']);
            var currentTexture = data['texture'];
            tween2.start();
        });
        tween1.start();
    };
    Object.defineProperty(Animations.prototype, "inFromTop", {
        get: function () {
            var _this = this;
            return {
                bounce: function (game, obj, data, callback) { _this.inFromTopBounce(game, obj, data, callback); },
                fade: function (game, obj, data, callback) { _this.inFromTopFadeBounce(game, obj, data, callback); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animations.prototype, "rotateFromCenter", {
        get: function () {
            var _this = this;
            return {
                rotateIn: function (game, obj, data, callback) { _this.rotateIn(game, obj, data, callback); },
                rotateInFade: function (game, obj, data, callback) { _this.rotateInFade(game, obj, data, callback); },
                rotateOutFade1: function (game, obj, data, callback) { _this.rotateOutFade1(game, obj, data, callback); },
                rotateOutFade2: function (game, obj, data, callback) { _this.rotateOutFade2(game, obj, data, callback); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animations.prototype, "slide", {
        get: function () {
            var _this = this;
            return {
                slideInFromBottom: function (game, obj, data, callback) { _this.slideInFromBottom(game, obj, data, callback); },
                slideInFromTop: function (game, obj, data, callback) { _this.slideInFromTop(game, obj, data, callback); },
                slideInFromRight: function (game, obj, data, callback) { _this.slideInFromRight(game, obj, data, callback); },
                slideInFromLeft: function (game, obj, data, callback) { _this.slideInFromLeft(game, obj, data, callback); },
                slideOutToBottom: function (game, obj, data, callback) { _this.slideOutToBottom(game, obj, data, callback); },
                slideOutToTop: function (game, obj, data, callback) { _this.slideOutToTop(game, obj, data, callback); },
                slideOutToLeft: function (obj, data, callback) { _this.slideOutToLeft(obj, data, callback); },
                slideOutToRight: function (game, obj, data, callback) { _this.slideOutToRight(game, obj, data, callback); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animations.prototype, "size", {
        get: function () {
            var _this = this;
            return {
                shrinkIt: function (game, obj, data, callback) { _this.shrinkIt(game, obj, data, callback); },
                pop: function (game, obj, data, callback) { _this.pop(game, obj, data, callback); },
                popOut: function (game, obj, data, callback) { _this.popOut(game, obj, data, callback); },
                scaleOutY: function (game, obj, data, callback) { _this.scaleOutY(game, obj, data, callback); },
                scaleInY: function (game, obj, data, callback) { _this.scaleInY(game, obj, data, callback); },
                scaleOutX: function (game, obj, data, callback) { _this.scaleOutX(game, obj, data, callback); },
                scaleInX: function (game, obj, data, callback) { _this.scaleInX(game, obj, data, callback); },
                onOver: function (game, obj, data, callback) { _this.onOver(game, obj, data, callback); },
                onOut: function (game, obj, data, callback) { _this.onOut(game, obj, data, callback); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animations.prototype, "fade", {
        get: function () {
            var _this = this;
            return {
                fadeIn: function (game, obj, data, callback) { _this.fadeIn(game, obj, data, callback); },
                fadeInDown: function (game, obj, data, callback) { _this.fadeInDown(game, obj, data, callback); },
                fadeOut: function (game, obj, data, callback) { _this.fadeOut(game, obj, data, callback); },
                fadeFlash: function (game, obj, data, callback) { _this.fadeFlash(game, obj, data, callback); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animations.prototype, "shakes", {
        get: function () {
            var _this = this;
            return {
                shakeX: function (game, obj, data, callback) { _this.shakeX(game, obj, data, callback); },
                shakeY: function (game, obj, data, callback) { _this.shakeY(game, obj, data, callback); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animations.prototype, "switch", {
        get: function () {
            var _this = this;
            return {
                shrinkX: function (game, obj, data, callback) { _this.shrinkX(game, obj, data, callback); },
                shrinkY: function (game, obj, data, callback) { _this.shrinkY(game, obj, data, callback); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Animations.prototype.isArray = function (obj) {
        if (obj instanceof Array) {
            return true;
        }
        else {
            return false;
        }
    };
    Animations.prototype.validate = function (obj1, obj2) {
        var valid = {};
        if (obj2 === undefined || obj2 === null || obj2 === false) {
            valid = obj1;
        }
        else {
            for (var property in obj1) {
                if (obj1.hasOwnProperty(property)) {
                    if (!obj2[property]) {
                        valid[property] = obj1[property];
                    }
                    else {
                        valid[property] = obj2[property];
                    }
                }
            }
        }
        return valid;
    };
    return Animations;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Animations;
