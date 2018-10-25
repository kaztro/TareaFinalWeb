// Object Literal
var person = {
    /* property: value*/
    name: "Néstor",
    lastname: "Aldana",
    birthday: Date.now()
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
// Change object's property value
person.birthday = new Date(1994, 0, 11); // 11 - Jan - 1994
console.log(person.birthday);

console.log(person.dui) // undefined
person.dui = "000000000" // Assign 
console.log(person.dui) // 000000000

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save persons

// To Add 10 fake persons
for (let i = 0; i < 10; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`, new Date().setFullYear(1990 + i + Math.floor(Math.random() * 5)), `000000${i}`));
}

console.table(list);

// Array Higher function
// Show only the name persons
console.table(list.map(({
    name
}) => name));

// Get average age
console.log("Average age %i", list.reduce((sum, {
    birthday
}) => {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970) + sum;
}, 0) / list.length);


// More readable

function getAge(birthday) {
    /*
    aNac = birthday.getUTCFullYear();
    dNac = birthday.getUTCDay();
    mNac = birthday.getUTCMonth();
    if ((((aNac % 100) != 0) && ((aNac % 4) == 0)) || ((aNac % 400) == 0)) {
        if (mNac == 1 && dNac == 29) {
            dNac = 28;
            birthday = new Date(aNac, mNac, dNac);      
        }
    }*/
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    //var rAg;
    aneo = ageDate.getUTCFullYear();
    dia = ageDate.getUTCDay();
    mes = ageDate.getUTCMonth();

    return Math.abs(aneo - 1970);
}

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);

function valAge(dia, mes, aneo) {
    if ((((aneo % 100) != 0) && ((aneo % 4) == 0)) || ((aneo % 400) == 0)) {
        if (mes == 1 && dia == 29) {
            dia = 28;
            //ageDate.setFullYear(aneo, mes, dia);
        }
    } else {
        if (dia - 1 == 0) {
            if ((mes % 2 == 0 || mes == 9 || mes == 11) && mes != 8) {
                if (mes == 7) dia = 31;
                if (mes == 2) dia = 28;
                if (mes == 0) {
                    mes = 11;
                    dia = 31;
                }
                dia = 30;
            } else {
                if (mes == 8) dia = 31;
                dia = 31;
            }
        }
    }
}