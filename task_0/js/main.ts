interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Enzo",
    lastName: "Messaoudi",
    age: 21,
    location: "Troyes",
}
const student2: Student = {
    firstName: "Jade",
    lastName: "Grandrémy",
    age: 21,
    location: "Troyes",
}

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

document.body.appendChild(table);

for (let i = 0; i < studentsList.length; i++) {
    const studentName: string = studentsList[i].firstName;
    const studentLocation: string = studentsList[i].location;
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    td1.textContent = studentName
    td2.textContent = studentLocation
    tr.appendChild(td1)
    tr.appendChild(td2) 
    table.appendChild(tr)
}
