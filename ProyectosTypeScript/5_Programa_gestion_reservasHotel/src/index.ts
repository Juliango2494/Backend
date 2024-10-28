import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
interface hotel {
    h: number;
    disp: boolean;   
}
interface reserva {
    nombre: string;
    h: number;
    cantidadHuesped: number;
};

let reservasBd: reserva [] = [
    {nombre: "Pablo Perez", h: 1, cantidadHuesped: 5},
    {nombre: "Michael Alonso", h: 2, cantidadHuesped: 2},
    {nombre: "Santiago Barrios", h: 3, cantidadHuesped: 3}
];

let hotelBd: hotel [] = [
    {h: 1, disp: false},
    {h: 2, disp: false},
    {h: 3, disp: false},
    {h: 4, disp: false},
    {h: 5, disp: false},
    {h: 6, disp: false}
]
// funcion mostrar disponibles


//funcion verificar disponibilidad de habitacion

function agregarEstudiante(nombre: string, h: string, cantidadHuesped: number):void{
    const nuevoEstudiante: reserva = {nombre, h, cantidadHuesped};
    reservasBd.push(nuevoEstudiante);
    console.log(`El estudiante "${nombre}" ha sido agregado a la base de datos`);
}
function buscarEstudiante(nombre: string): void {
    const emp = reservasBd.find(est => est.nombre === nombre);
    if(emp){
        console.log(`Informacion del estudiante: Nombre: ${emp.nombre}, Cod: ${emp.h}, Nota: ${emp.cantidadHuesped}`)
    }else {
        console.log(`No existe ningun estudiante llamado "${nombre}"`)
    }
}
function eliminarEstudiante(h: string): void {
    const indice = reservasBd.findIndex(est => est.h === h);
    if (indice !== -1){
        const eliminado = reservasBd.splice(indice, 1);
        console.log(`El estudiante "${eliminado[0].nombre}" ha sido eliminado de la base de datos`)
    } else {
        console.log(`No se encontro ningun estudiante por el h: "${h}"`)
    }
}
function verEstudiantes (): void {
    let msj: string = "Estudiantes:"
    reservasBd.forEach(est => {
        msj += `\n nombre: ${est.nombre}, h: ${est.h}, precio: $${est.cantidadHuesped}`
    });
    console.log(msj);
}

rl.question('Iniciar programa? [s/n] ', (answer) => {
    switch(answer.toLowerCase()) {
    case 's':
        console.log('Iniciando ...');
        let flag: boolean = true;
        const menuPPal = () => {
            rl.question("\nMenu (Ingresa el numero de la opcion deseada):\n0) Salir del programa \n1) Agregar estudiante \n2) Eliminar estudiante \n3) Buscar estudiante \n4) Ver estudiante \n5) Promedio de notas del curso \n", (seleccion) => {
                switch(seleccion) {
                    case "0": 
                        flag = false; 
                        console.log("\nSaliendo.....")
                        rl.close();
                        break;
                    case "1":
                        console.log("\nAgregar nuevo estudiante:")
                        rl.question("Cod del estudiante: ", (h) => {
                            if(reservasBd.find(est => est.h === h)) {
                                console.log("\nEl estudiante ingresado ya existe en base de datos");
                                menuPPal();
                            }else {
                                rl.question("Nombre del estudiante:", (nombre) => {
                                    rl.question("Nota del estudiante:", (cantidadHuesped) => {
                                        agregarEstudiante(nombre, h, Number(cantidadHuesped));
                                        menuPPal(); // Volvemos al menú
                                    });
                                });
                            };
                            //rl.close();
                        });
                        break;
                    case "2":
                        console.log("\nEliminar estudiante: ")
                        rl.question("Cod del estudiante: ", (h) => {
                            if(reservasBd.find(est => est.h === h)){
                                eliminarEstudiante(h);
                            }else{
                                console.log("\nEl h ingresado no existe")
                            };
                            //rl.close();
                            menuPPal();
                        });
                        break;
                    case "3":
                        console.log("\nBuscar estudiante:")
                        rl.question("Nombre del estudiante: ", (nombre) => {
                            buscarEstudiante(nombre);
                            menuPPal();
                            //rl.close();
                        });
                        break;
                    case "4":
                        verEstudiantes();
                        menuPPal();
                        break;
                    case "5":
                        console.log("\nCalculando el promedio de notas del curso: \n....... ")
                        let promNotas: number = 0;
                        let longBD: number = reservasBd.length
                        reservasBd.forEach(est => {
                            promNotas += est.cantidadHuesped;                           
                        });
                        console.log(`El promedio de notas del curso es de: ${promNotas/longBD}`)
                        menuPPal();
                        break;
                    default:
                        console.log("Opción inválida.");
                        menuPPal(); // Volvemos al menú en caso de selección inválida
                        break;
                }
                //rl.close();
            });
        }
        menuPPal();
        break;
    case 'n':
        console.log('Cerrando .....');
        rl.close();
        break;
    default:
        console.log('Invalid answer!');
        rl.close();
        break;
    }
    
});
