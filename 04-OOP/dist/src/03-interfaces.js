//! if you are creating a interface for a function the proper convention is to write Fn  
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var add2 = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 30;
        if (name)
            this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log("".concat(phrase, " ").concat(this.name));
        }
        else {
            console.log("".concat(phrase));
        }
    };
    return Person;
}());
var Jimmy = new Person("Jimmy");
Jimmy.greet('Welcome');
console.log(Jimmy);
var anon = new Person();
anon.greet('Hey There');
console.log(anon);
