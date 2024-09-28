interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'mahdi',
    lastName: 'ellouz',
    age: 26,
    location: 'mahdia, tn',
}
const student2: Student = {
    firstName: 'omar',
    lastName: 'zayani',
    age: 22,
    location: 'sfax , tn'
}

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student: Student): void => {
    const newRow: HTMLTableRowElement = table.insertRow();
    const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
    const newRowLocation: HTMLTableCellElement = newRow.insertCell();
    newRowFirstName.innerHTML = student.firstName;
    newRowLocation.innerHTML = student.location;
})
