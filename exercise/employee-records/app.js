let employees = []

function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;

    this.printEmployeeForm = function(){
        console.log("Name: " + this.name + " Job Title: " + this.jobTitle + " Salary: " + this.salary
        + " Status: " + this.status)
    }

    employees.push(this)
} 

var Zach = new Employee("Zach", "V School student", 0)
var Cory = new Employee("Cory", "Dental student", "$0", "Contract")
var Sam = new Employee("Sam", "V School instructor", "$3000/hr", "Part Time")

Zach.printEmployeeForm();

console.log(employees)