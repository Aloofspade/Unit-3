export class Aims {
    static pi = 3.14;


    static area = {
        /**
     * finds the area of an triangle 
     * @param {number} base - bottom of a  triangle  
     * @param {number} height - distance from the bottom to teh tip using a 90deg angle 
     * @returns {number}  
     */
         triangle(base:number, height: number): number{
            return base * height / 2
        },

        /**
     * finds the area of an rectangle 
     * @param {number} length - the top or bottom of the  rectangle
     * @param {number} width  - the left or right side of the rectangle 
     * @returns {number}  
     */
         rectangle(length:number, width: number): number{
            return length * width
        },

        /**
     * finds the area of an Trapezoid
     * @param {number} base - the top or bottom of the  Trapezoid
     * @param {number} height  - the height of inside the Trapezoid
     * @returns {number}  
     */
         trapezoid(base1:number, base2:number,  height: number): number{
            return  base1 + base2 *  height / 2
        },

        /**
     * finds the area of an parallelogram
     * @param {number} base - is the length of the base in the Parallelogram 
     * @param {number} height  -  is the height or altitude of the  Parallelogram 
     * @returns {number}  
     */
         parallelogram(base:number,   height: number): number{
            return  base *  height
        },
        /**
     * finds the area of an circle
     * @param {number} radius - radius of a circle  
     * @returns {number}  
     */
         circle(radius:number): number{
            return  radius * Aims.pi **2
        }
    }

    static volume = {
        /**
     * finds the volume of an Right circular cone
     * @param {number} radius - the radius of the circular base of the cone.
     * @param {number} height - the height of the cone.
     * @returns {number}  
     */
          cone(radius:number, height: number): number{
            return (radius **2 * height) / 3 * Aims.pi   
        },

        /**
     * finds the volume of an Pyramid
     * @param {number} base - the area of the pyramid
     * @param {number} height - the altitude pyramid.
     * @returns {number}  
     */
         pyramid(base:number, height: number): number{
            return  (base * height) / 3
        },
        /**
     * finds the volume of an Sphere 
     * @param {number} radius - the area of the Sphere 
     * @returns {number}  
     */
         sphere(radius:number): number{
            return  (4/3) * Aims.pi * radius **3 
        },
        /**
     * finds the volume of an  Right Circular Cylinder 
     * @param {number} radius - radius of the base
     * @param {number} height - height of cylinder 
     * @returns {number}  
     */
         cylinder(radius:number, height:number): number{
            return Aims.pi * radius **2 * height
        },
        /**
     * finds the volume of an Prism
     * @param {number} base -  area of base 
     * @param {number} height - height of Prism 
     * @returns {number}  
     */
         prism(base:number, height:number): number{
            return base * height
        },
    }
    
    static SurfaceArea = {
        /**
     * finds the Surface Area of an Right circular cone
     * @param {number} radius - the radius of the circular base of the cone.
     * @param {number} height - the slant height of the cone.
     * @returns {number}  
     */
         cone(radius:number, height: number): number{
            return   Aims.pi * (radius * height) + Aims.pi * radius **2
        },
        /**
     * finds the Surface Area of an  Pyramid 
     * @param {number}  perimeter - the  perimeter of the base
     * @param {number} height - the slant height of the pyramid 
     * @param {number} base - the area of the base 
     * @returns {number}  
     */
         pyramid(base:number, height: number, perimeter: number): number{
            return  (1/2 * (perimeter * height **2) + base)  
        },
        
        /**
     * finds the Surface Area of an  Sphere 
     * @param {number}  radius - the  radius of the Sphere 
     * @returns {number}  
     */
         sphere(radius: number): number{
            return  4 * Aims.pi * radius **2 
        },
        /**
     * finds the Surface Area of an Right Circular Cylinder
     * @param {number}  radius - the  radius of the  Cylinder
     * @param {number}  height - the  height of the  Cylinder
     * @returns {number}  
     */
         cylinder(radius: number, height: number): number{
            return  (2 * Aims.pi * radius * height) + (2 * Aims.pi * radius **2)
        },
        /**
     * finds the Surface Area of an Right Prism
     * @param {number}  radius - the  radius of the  Prism
     * @param {number}  height - the  height of the  Prism
     * @returns {number}  
     */
         prism(radius: number, height: number): number{
            return  (2 * Aims.pi * radius * height) + (2 * Aims.pi * radius **2)
        },

        

    }
}