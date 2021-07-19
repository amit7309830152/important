import {
    Warrior,
    Weapon,
    ThrowableWeapon
} from './interfaces'

const TYPES = {
    Warrior: Symbol("Warrior"),
    Weapon: Symbol.for("Weapon"),
    ThrowableWeapon: Symbol.for("ThrowableWeapon")
};

export { TYPES };