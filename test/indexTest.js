"use strict";

var index = require("../bin/index");

describe('index', function () {
    var subject;

    beforeEach(function () {
        subject = new index["default"]();
    });

    describe('add', function () {
        it('should add two numbers together', function () {
            var result = subject.add(2, 3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });

    describe('subtract', function() {
        it('should sbtract too numbers', function() {
            var result = subject.subtract(5, 3);
            if(result !== 2) {
                throw new Error('Expected 5 - 3 = 2 but was ' + result);
            }
        })
    });

    describe('divide', function() {
        it('should divide too numbers', function() {
            var result = subject.divide(20, 5);
            if(result !== 4) {
                throw new Error('Expected 20 / 5 = 4 but was ' + result);
            }
        })
    });

    describe('multiply', function() {
        it('should multiply too numbers', function() {
            var result = subject.multiply(5, 5);
            if(result !== 25) {
                throw new Error('Expected 5 * 5 = 25 but was ' + result);
            }
        })
    });

});