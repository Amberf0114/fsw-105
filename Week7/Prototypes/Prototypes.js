var employees = [];     //empty arraygk.
  

function Employee(name, jobTitle, salary, status = "Full-time") {    //constructor function
    this.name = name 
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    employees.push(this)  ;oih
}

Employee.prototype.printEmployeeForm = function() {     //Printing Function
    console.log(this.name)
    console.log(this.jobTitle)
    console.log(this.salary)
    console.log(this.status)
}

employee1 = new Employee("Amber", "Server", 40000)      //3 Employees
employee2 = new Employee("John", "Cook", 35000)
employee3 = new Employee("Rose", "Hostess", 20000, "Part-time")

employee1.printEmployeeForm()      //3 Employees Printed
employee2.printEmployeeForm()
employee3.printEmployeeForm()

console.log(employees) 



