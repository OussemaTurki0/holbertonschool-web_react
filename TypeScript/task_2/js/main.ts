// Define interfaces for Director and Teacher roles
export interface IDirector {
    workRemotely(): string;
    takeCoffeeBreak(): string;
    completeDirectorDuties(): string;
}

export interface ITeacher {
    workRemotely(): string;
    takeCoffeeBreak(): string;
    completeTeacherDuties(): string;
}

// Director class implementing IDirector interface
export class Director implements IDirector {
    workRemotely(): string {
        return 'Working from home';
    }

    takeCoffeeBreak(): string {
        return 'Taking a coffee break';
    }

    completeDirectorDuties(): string {
        return 'Handling director responsibilities';
    }
}

// Teacher class implementing ITeacher interface
export class Teacher implements ITeacher {
    workRemotely(): string {
        return 'Unable to work from home';
    }

    takeCoffeeBreak(): string {
        return 'No break available';
    }

    completeTeacherDuties(): string {
        return 'Handling teacher responsibilities';
    }
}

// Function to create either a Director or Teacher based on salary
export function hireEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Type guard function to check if an employee is a Director
export function isEmployeeDirector(employee: IDirector | ITeacher): employee is Director {
    return employee instanceof Director;
}

// Function to execute work based on the type of employee
export function performWork(employee: IDirector | ITeacher): string {
    if (isEmployeeDirector(employee)) {
        return employee.completeDirectorDuties();
    } else {
        return employee.completeTeacherDuties();
    }
}

// Define possible subjects for teaching
export type ClassSubjects = 'Mathematics' | 'History';

// Function to determine what subject is being taught
export function teach(todayClass: ClassSubjects): string {
    if (todayClass === 'Mathematics') {
        return 'Instructing Mathematics';
    } else if (todayClass === 'History') {
        return 'Instructing History';
    }
}
