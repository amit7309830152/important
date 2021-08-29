import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";
import { injectable, inject } from "inversify";
import "reflect-metadata";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight());
console.log(ninja.sneak());

// @injectable()
// class Ninja implements Warrior {
//     @inject(TYPES.Weapon) private _katana: Weapon;
//     @inject(TYPES.ThrowableWeapon) private _shuriken: ThrowableWeapon;
//     public fight() { return this._katana.hit(); }
//     public sneak() { return this._shuriken.throw(); }
// }