/**
 * is a string holding the name Jimmy
 * @type {string[]}
 */

export const testing: string[] = ["Jimmmy"];


/**
 * Multiplies 2 numbers
 * @param {number} a - first number
 * @param  {number} b - second number
 * @returns {number} the product of a * b
 */
export const mult = (a:number, b:number): number => {
    return a * b ;
}


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
    static pi = 3.14 

    static  circle = {
/**
     * finds the area of an circle 
     * @param {number} rad - radius of a circle  
     * @returns {number} area of a circle
     */
  area(rad:number): number{
    return rad * Areas.pi **2
},


/**
     * finds the area of an circle 
     * @param {number} rad - radius of a circle  
     * @returns {number} area of a circle
     */

circumference(rad: number): number {
    return 2 * Areas.pi * rad;
},
    }

    static triangle = {
        /**
     * finds the area of an traingle 
     * @param {number} base - bottom of a  traingle  
     * @param {number} height - distance from the bottom to teh tip using a 90deg angle 
     * @returns {number}  
     */
          area(base:number, height: number): number{
            return base * height / 2
        }
    }
    
}