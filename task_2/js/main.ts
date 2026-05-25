interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }
}

class Teacher  implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
    }
    getCoffeeBreak() {
        return "Cannot have a break";
    }
    workTeacherTasks() {
        return "Getting to work";
    }
}

interface createEmployeeFunction {
    (salary: number | string): Director | Teacher;
}

const createEmployee: createEmployeeFunction = (salary) => {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director):  void {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    } else {
       employee.workTeacherTasks();
    }
}
