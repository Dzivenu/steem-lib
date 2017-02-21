"use strict";

/** Exception nesting.  */

var ErrorWithCause = function () {
    this.message = message;
    if (typeof cause !== "undefined" && cause !== null ? cause.message : undefined) {
        this.message = "cause\t" + cause.message + "\t" + this.message;
    }

    var stack = ""; //(new Error).stack
    if (typeof cause !== "undefined" && cause !== null ? cause.stack : undefined) {
        stack = "caused by\n\t" + cause.stack + "\t" + stack;
    }

    this.stack = this.message + "\n" + stack;    
}

ErrorWithCause.throw = function (message, cause) {
    var msg = message;
    if (typeof cause !== "undefined" && cause !== null ? cause.message : undefined) {
        msg += "\t cause: " + cause.message + " ";
    }
    if (typeof cause !== "undefined" && cause !== null ? cause.stack : undefined) {
        msg += "\n stack: " + cause.stack + " ";
    }
    throw new Error(msg);
}

module.exports = ErrorWithCause;