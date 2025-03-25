const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let people = [];

function askForPerson() {
    rl.question("Ingrese el nombre: ", (name) => {
        rl.question("Ingrese el apellido: ", (surname) => {
            rl.question("Ingrese el DNI: ", (dni) => {
                let phones = [];
                
                function askForPhone() {
                    rl.question("Ingrese un número de teléfono (o presione Enter para finalizar): ", (phone) => {
                        if (phone === "") {
                            people.push([name, surname, dni, phones]);
                            askForAnotherPerson();
                        } else {
                            phones.push(phone);
                            askForPhone();
                        }
                    });
                }
                askForPhone();
            });
        });
    });
}

function askForAnotherPerson() {
    rl.question("¿Desea ingresar otra persona? (s/n): ", (answer) => {
        if (answer.toLowerCase() === "s") {
            askForPerson();
        } else {
            console.log("\nDatos ingresados:", JSON.stringify(people, null, 2));
            rl.close();
        }
    });
}

askForPerson();
