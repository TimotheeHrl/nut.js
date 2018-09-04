'use strict'

const Point = require("./point");
const Area = require("./area");

class Location {
  constructor(config) {
    this._config = config;
  }

  centerOf(target) {
    if (target instanceof Area) {
      const x = Math.floor(target.left + target.width / 2);
      const y = Math.floor(target.top + target.height / 2);

      return new Point(x, y);
    } else {
      throw new TypeError("Not an area.");
    }
  }

  randomPointAt(target) {
    if (target instanceof Area) {
      const x = Math.floor(target.left + Math.random() * target.width);
      const y = Math.floor(target.top + Math.random() * target.height);

      return new Point(x, y);
    } else {
      throw new TypeError("Not an area.");
    }
  }
}

function create(config) {
  return new Location(config);
}

module.exports = create;