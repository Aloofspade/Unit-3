/**
 * is a string holding the name Jimmy
 * @type {string[]}
 */
export const testing = ["Jimmmy"];
/**
 * Multiplies 2 numbers
 * @param {number} a - first number
 * @param  {number} b - second number
 * @returns {number} the product of a * b
 */
export const mult = (a, b) => {
    return a * b;
};
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Holds a bunch of math for shapes
 * @member {number} pi holds 3.14
 */
export class Areas {
}
Areas.pi = 3.14;
Areas.circle = {
    /**
         * finds the area of an circle
         * @param {number} rad - radius of a circle
         * @returns {number} area of a circle
         */
    area(rad) {
        return rad * Math.pow(Areas.pi, 2);
    },
    /**
         * finds the area of an circle
         * @param {number} rad - radius of a circle
         * @returns {number} area of a circle
         */
    circumference(rad) {
        return 2 * Areas.pi * rad;
    },
};
Areas.triangle = {
    /**
 * finds the area of an traingle
 * @param {number} base - bottom of a  traingle
 * @param {number} height - distance from the bottom to teh tip using a 90deg angle
 * @returns {number}
 */
    area(base, height) {
        return base * height / 2;
    }
};
//# sourceMappingURL=exports.js.map