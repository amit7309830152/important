"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
require("reflect-metadata");
var ninja = inversify_config_1.myContainer.get(types_1.TYPES.Warrior);
console.log(ninja.fight());
console.log(ninja.sneak());
// @injectable()
// class Ninja implements Warrior {
//     @inject(TYPES.Weapon) private _katana: Weapon;
//     @inject(TYPES.ThrowableWeapon) private _shuriken: ThrowableWeapon;
//     public fight() { return this._katana.hit(); }
//     public sneak() { return this._shuriken.throw(); }
// }
