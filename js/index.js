"use strict";

class RangeValidator {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }

  get from() {
    return this._from;
  }

  set from(value) {
    if (!value || typeof value !== "number") {
      throw new TypeError("Please enter a valid value");
    }

    this._from = value;
  }

  get to() {
    return this._to;
  }

  set to(value) {
    if (!value || typeof value !== "number") {
      throw new TypeError("Please enter a valid value");
    }

    this._to = value;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(value) {
    if (!value || typeof value !== "number") {
      throw new TypeError("Please enter a valid value");
    }

    if (value >= this._from && value <= this._to) {
      return value;
    }

    throw new RangeError("Value out of range");
  }
}
