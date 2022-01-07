var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    // name: string;
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        // this.name = name
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.id);
        console.log(this.employees.length + "employees");
        console.log.apply(console, this.employees);
    };
    Department.fiscalYear = 2022;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, "IT", id) || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID ".concat(this.id));
    };
    ITDepartment.prototype.setAdmin = function (name) {
        this.admins.push(name);
    };
    ITDepartment.prototype.getAdmin = function () {
        console.log(this.admins);
        return this.admins;
    };
    return ITDepartment;
}(Department));
var IT = new ITDepartment("D2", ["Jimmy"]);
IT.addEmployee("Timmy");
IT.addEmployee("Jammy");
IT.printEmployeeInfo();
var IT2 = new ITDepartment("D3", ["Timmy"]);
IT2.addEmployee("Tammy");
IT2.printEmployeeInfo();
//! create your own class for accounting 
//! this class does not have abins and  instead  has daily net profits
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(id, netProfits) {
        var _this = _super.call(this, "Accounting", id) || this;
        _this.netProfits = netProfits;
        return _this;
    }
    Accounting.prototype.describe = function () {
        console.log("Accounting Department - ID ".concat(this.id));
    };
    Accounting.prototype.addProfits = function (report) {
        this.netProfits.push(report);
    };
    Accounting.prototype.getProfits = function () {
        console.log.apply(console, this.netProfits);
    };
    Accounting.prototype.removeLastProfits = function () {
        this.netProfits.pop();
    };
    return Accounting;
}(Department));
