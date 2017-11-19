import { Component } from '@angular/core';
import { Employee } from './domain/Employee';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {


    employees: Employee[];

    displayDialog: boolean;

    employee: Employee = new PrimeEmployee();

    selectedEmployee: Employee;

    newEmployee: boolean;

    constructor() { }

    ngOnInit() {

        this.employees = [
            {
                empId: "E101",
                name: "Ankit Kumar",
                age: 22,
                salary: 28011
            },
            {
                empId: "E102",
                name: "Shubham",
                age: 23,
                salary: 28010
            }
        ]

    }


    showDialogToAdd() {
        this.newEmployee = true;
        this.employee = new PrimeEmployee();
        this.displayDialog = true;
    }

    save() {
        let employees = [...this.employees];
        if (this.newEmployee)
            employees.push(this.employee);
        else
            employees[this.findSelectedEmployeeIndex()] = this.employee;

        this.employees = employees;
        this.employee = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.findSelectedEmployeeIndex();
        this.employees = this.employees.filter((val, i) => i != index);
        this.employee = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newEmployee = false;
        this.employee = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(e: Employee): Employee {
        let employee = new PrimeEmployee();
        for (let prop in e) {
            employee[prop] = e[prop];
        }
        return employee;
    }

    findSelectedEmployeeIndex(): number {
        return this.employees.indexOf(this.selectedEmployee);
    }

}


class PrimeEmployee implements Employee {

    constructor(public empId?, public name?, public age?, public salary?) {
    }
}
