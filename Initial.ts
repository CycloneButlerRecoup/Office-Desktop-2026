interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}

class EmployeeManager {
    private employees: Employee[] = [];

    add(employee: Employee): void {
        this.employees.push(employee);
    }

    findByDepartment(department: string): Employee[] {
        return this.employees.filter(employee => employee.department === department);
    }

    averageSalary(): number {
        if (this.employees.length === 0) {
            return 0;
        }

        const total = this.employees.reduce((sum, employee) => sum + employee.salary, 0);
        return total / this.employees.length;
    }

    print(): void {
        console.log("Employee Directory");
        console.log("==================");

        for (const employee of this.employees) {
            console.log(`${employee.id} | ${employee.name} | ${employee.department} | $${employee.salary.toFixed(2)}`);
        }

        console.log("==================");
        console.log(`Average Salary: $${this.averageSalary().toFixed(2)}`);
    }
}

const manager = new EmployeeManager();

manager.add({ id: 1, name: "Alice", department: "Engineering", salary: 72000 });
manager.add({ id: 2, name: "Brian", department: "Marketing", salary: 58000 });
manager.add({ id: 3, name: "Clara", department: "Engineering", salary: 81000 });
manager.add({ id: 4, name: "David", department: "Finance", salary: 69000 });

manager.print();

console.log("");
console.log("Engineering Team");

for (const employee of manager.findByDepartment("Engineering")) {
    console.log(employee.name);
}
