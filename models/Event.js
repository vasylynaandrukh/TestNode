"use strict";

const Model = use("Model");

class Event extends Model {
    static get table() {
        return "events";
    }
}

module.exports = User;
