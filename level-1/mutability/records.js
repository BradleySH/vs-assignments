let employee = []

function Employee(Name, Jobtitle, Salary){
    this.Name = Name
    this.Jobtitle = Jobtitle
    this.Salary = Salary
    this.Status = function (){
        console.log("Full Time");
    }
    
};
let print = Employee.prototype.printEmployeeForm = function(){
    console.log(Employee())
    this.printEmployeeForm.push(print)
 };
 
let bob = Employee["Bob", "V School Instructor", "$3000/hour"];
 
Employee()

//let bob = new Employee["Bob", "V School Instructor", "$3000/hour"];

