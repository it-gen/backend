import {plFirstName, plLastName} from "../pl/pl-data";

function generateFirstName(locale: string, sex: string) {
    let array = plFirstName.filter(value => value.sex == sex)
    return array[Math.floor(Math.random() * array.length)].firstName;
}

function generateLastName(locale: string, sex: string) {
    let array = plLastName.filter(value => value.sex == sex)
    return array[Math.floor(Math.random() * array.length)].lastName;
}


