import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
interface estudiante {
    nombre: string;
    cod: string;
    nota: number;
};

let estudianteBd: estudiante[] = [
    {nombre: "Pablo Pepino", cod: "001", nota: 5},
    {nombre: "PMichael Alonso", cod: "002", nota: 2},
    {nombre: "Santiago Barriaga", cod: "003", nota: 3},
    {nombre: "Cristian Salcedo", cod: "004", nota: 4},
    {nombre: "Carlos Negreira", cod: "005", nota: 4}
];
function agregarEstudiante(nombre: string, cod: string, nota: number):void{
    const nuevoEstudiante: estudiante = {nombre, cod, nota};
    estudianteBd.push(nuevoEstudiante);
    console.log(`El estudiante "${nombre}" ha sido agregado a la base de datos`);
}
function buscarEstudiante(nombre: string): void {
    const emp = estudianteBd.find(est => est.nombre === nombre);
    if(emp){
        console.log(`Informacion del estudiante: Nombre: ${emp.nombre}, Cod: ${emp.cod}, Nota: ${emp.nota}`)
    }else {
        console.log(`No existe ningun estudiante llamado "${nombre}"`)
    }
}
function eliminarEstudiante(cod: string): void {
    const indice = estudianteBd.findIndex(est => est.cod === cod);
    if (indice !== -1){
        const eliminado = estudianteBd.splice(indice, 1);
        console.log(`El estudiante "${eliminado[0].nombre}" ha sido eliminado de la base de datos`)
    } else {
        console.log(`No se encontro ningun estudiante por el cod: "${cod}"`)
    }
}
function verEstudiantes (): void {
    let msj: string = "Estudiantes:"
    estudianteBd.forEach(est => {
        msj += `\n nombre: ${est.nombre}, cod: ${est.cod}, precio: $${est.nota}`
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
                        rl.question("Cod del estudiante: ", (cod) => {
                            if(estudianteBd.find(est => est.cod === cod)) {
                                console.log("\nEl estudiante ingresado ya existe en base de datos");
                                menuPPal();
                            }else {
                                rl.question("Nombre del estudiante:", (nombre) => {
                                    rl.question("Nota del estudiante:", (nota) => {
                                        agregarEstudiante(nombre, cod, Number(nota));
                                        menuPPal(); // Volvemos al menú
                                    });
                                });
                            };
                            //rl.close();
                        });
                        break;
                    case "2":
                        console.log("\nEliminar estudiante: ")
                        rl.question("Cod del estudiante: ", (cod) => {
                            if(estudianteBd.find(est => est.cod === cod)){
                                eliminarEstudiante(cod);
                            }else{
                                console.log("\nEl cod ingresado no existe")
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
                        let longBD: number = estudianteBd.length
                        estudianteBd.forEach(est => {
                            promNotas += est.nota;                           
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
