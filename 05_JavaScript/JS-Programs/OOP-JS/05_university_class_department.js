class University{
    constructor(name){
        this.name = name;
        this.departments = [];
    }

    addDepartments(department) {
        this.departments.push(department);
        console.log(`Department "${department}" added to ${this.name}`);
    }

    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if(index !== -1) {
            this.departments.splice(index, 1);
            console.log(`Department "${department}" removed from ${this.name}`);
        } else {
            console.log(`Department "${department}" does not exist in ${this.name}`);
        }
    }

    displayDepartments(){
        console.log(`Departments in ${this.name}:`);
        if(this.departments.length === 0) {
            console.log('No departments available');
        } else {
            this.departments.forEach((department, index) => {
                console.log(`${index + 1}. ${department}`);
            });
        }
    }
}

//University instance
const university = new University('Aura University');

university.displayDepartments();

university.addDepartments('Science');
university.addDepartments('Maths');
university.addDepartments('Physics');

university.displayDepartments();

university.removeDepartment('Maths');
university.displayDepartments();

university.removeDepartment('Chemistry');