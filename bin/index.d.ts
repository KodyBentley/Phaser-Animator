/// <reference path="../lib/phaser.d.ts" />
export default class Animations {
    constructor();
    shakeX(game: any, obj: Object, data: Object, callback?: Function): void;
    shakeY(game: any, obj: Object, data: Object, callback?: Function): void;
    bounce(game: any, obj: Object, data: Object, callback?: Function): void;
    fadeOut(game: any, obj: Object, data: Object, callback?: Function): void;
    fadeIn(game: any, obj: Object, data: Object, callback?: Function): void;
    fadeFlash(game: any, obj: Object, data: Object, callback?: Function): void;
    fadeInDown(game: any, obj: Object, data: Object, callback?: Function): void;
    pop(game: any, obj: Object, data: Object, callback?: Function): void;
    popOut(game: any, obj: Object, data: Object, callback?: Function): void;
    onOver(game: any, obj: Object, data: Object, callback?: Function): void;
    onOut(game: any, obj: Object, data: Object, callback?: Function): void;
    inFromTopBounce(game: any, obj: Object, data: Object, callback?: Function): void;
    inFromTopFadeBounce(game: any, obj: Object, data: Object, callback?: Function): void;
    rotateIn(game: any, obj: Object, data: Object, callback?: Function): void;
    rotateInFade(game: any, obj: Object, data: Object, callback?: Function): void;
    rotateOutFade1(game: any, obj: Object, data: Object, callback?: Function): void;
    rotateOutFade2(game: any, obj: Object, data: Object, callback?: Function): void;
    slideInFromBottom(game: any, obj: Object, data: Object, callback?: Function): void;
    slideInFromTop(game: any, obj: Object, data: Object, callback?: Function): void;
    slideInFromRight(game: any, obj: Object, data: Object, callback?: Function): void;
    slideInFromLeft(game: any, obj: Object, data: Object, callback?: Function): void;
    slideOutToBottom(game: any, obj: Object, data: Object, callback?: Function): void;
    slideOutToTop(game: any, obj: Object, data: Object, callback?: Function): void;
    slideOutToLeft(game: any, obj: Object, data: Object, callback?: Function): void;
    slideOutToRight(game: any, obj: Object, data: Object, callback?: Function): void;
    scaleOutY(game: any, obj: Array<Object>, data: Object, callback?: Function): void;
    scaleInY(game: any, obj: Array<Object>, data: Object, callback?: Function): void;
    scaleOutX(game: any, obj: Array<Object>, data: Object, callback?: Function): void;
    scaleInX(game: any, obj: Array<Object>, data: Object, callback?: Function): void;
    shrinkIt(game: any, obj: Array<Object>, data: Object, callback?: Function): void;
    shrinkX(game: any, obj: Object, data: Object, callback?: Function): void;
    shrinkY(game: any, obj: Object, data: Object, callback?: Function): void;
    readonly inFromTop: {
        bounce: (game: any, obj: Object, data: Object, callback: Function) => void;
        fade: (game: any, obj: Object, data: Object, callback: Function) => void;
    };
    readonly rotateFromCenter: {
        rotateIn: (game: any, obj: Object, data: Object, callback: Function) => void;
        rotateInFade: (game: any, obj: any, data: any, callback: any) => void;
        rotateOutFade1: (game: any, obj: any, data: any, callback: any) => void;
        rotateOutFade2: (game: any, obj: any, data: any, callback: any) => void;
    };
    readonly slide: {
        slideInFromBottom: (game: any, obj: any, data: any, callback: any) => void;
        slideInFromTop: (game: any, obj: any, data: any, callback: any) => void;
        slideInFromRight: (game: any, obj: any, data: any, callback: any) => void;
        slideInFromLeft: (game: any, obj: any, data: any, callback: any) => void;
        slideOutToBottom: (game: any, obj: any, data: any, callback: any) => void;
        slideOutToTop: (game: any, obj: any, data: any, callback: any) => void;
        slideOutToLeft: (obj: any, data: any, callback: any) => void;
        slideOutToRight: (game: any, obj: any, data: any, callback: any) => void;
    };
    readonly size: {
        shrinkIt: (game: any, obj: any, data: any, callback: any) => void;
        pop: (game: any, obj: any, data: any, callback: any) => void;
        popOut: (game: any, obj: any, data: any, callback: any) => void;
        scaleOutY: (game: any, obj: any, data: any, callback: any) => void;
        scaleInY: (game: any, obj: any, data: any, callback: any) => void;
        scaleOutX: (game: any, obj: any, data: any, callback: any) => void;
        scaleInX: (game: any, obj: any, data: any, callback: any) => void;
        onOver: (game: any, obj: any, data: any, callback: any) => void;
        onOut: (game: any, obj: any, data: any, callback: any) => void;
    };
    readonly fade: {
        fadeIn: (game: any, obj: any, data: any, callback: any) => void;
        fadeInDown: (game: any, obj: any, data: any, callback: any) => void;
        fadeOut: (game: any, obj: any, data: any, callback: any) => void;
        fadeFlash: (game: any, obj: any, data: any, callback: any) => void;
    };
    readonly shakes: {
        shakeX: (game: any, obj: any, data: any, callback: any) => void;
        shakeY: (game: any, obj: any, data: any, callback: any) => void;
    };
    readonly switch: {
        shrinkX: (game: any, obj: any, data: any, callback: any) => void;
        shrinkY: (game: any, obj: any, data: any, callback: any) => void;
    };
    isArray(obj: any): boolean;
    validate(obj1: Object, obj2: Object): Object;
}
