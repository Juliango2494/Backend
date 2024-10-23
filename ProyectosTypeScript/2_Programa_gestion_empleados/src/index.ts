import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
interface empleados {
    nombre: string;
    id: string;
    salario: number;
};

let empleadosBd: empleados[] = [
    {nombre: "Fabian Humberto Asprilla", id: "123456789", salario: 8000000},
    {nombre: "Maximiliano Alberto Ocoro", id: "987654321", salario: 5500000}
];
function agregarEmpleado(nombre: string, id: string, salario: number):void{
    const nuevoEmpleado: empleados = {nombre, id, salario};
    empleadosBd.push(nuevoEmpleado);
    console.log(`El empleado "${nombre}" ha sido agregado a la base de datos`);
}
function buscarEmpleado(nombre: string): void {
    const emp = empleadosBd.find(empleado => empleado.nombre === nombre);
    if(emp){
        console.log(`Informacion del empleado: Nombre: ${emp.nombre}, Id: ${emp.id}, Salario: ${emp.salario}`)
    }else {
        console.log(`No existe ningun empleado llamado "${nombre}"`)
    }
}
function eliminarEmpleado(id: string): void {
    const indice = empleadosBd.findIndex(empleado => empleado.id === id);
    if (indice !== -1){
        const empleadoEliminado = empleadosBd.splice(indice, 1);
        console.log(`El empleado "${empleadoEliminado[0].nombre}" ha sido eliminado de la base de datos`)
    } else {
        console.log(`No se encontro ninguna persona por el id: "${id}"`)
    }
}
function verEmpleados (): void {
    let msj: string = "Empleados:"
    empleadosBd.forEach(empleado => {
        msj += `\n nombre: ${empleado.nombre}, id: ${empleado.id}, salario: $${empleado.salario}`
    });
    console.log(msj);
}
function buscarId(id:string):boolean {
    const indice = empleadosBd.findIndex(empleado => empleado.id === id)
    if(indice !== -1){
        return true;
    }else {
        return false;
    }
}
function calcularSalario (dias: number, salario: number):number {
    let salarioDia: number = salario/30;
    return salarioDia*dias
}

rl.question('Iniciar programa? [s/n] ', (answer) => {
    switch(answer.toLowerCase()) {
    case 's':
        console.log('Iniciando ...');
        let flag: boolean = true;
        const menuPPal = () => {
            rl.question("\nMenu (Ingresa el numero de la opcion deseada):\n0) Salir del programa \n1) Agregar empleado \n2) Eliminar empleado \n3) Buscar empleado \n4) Ver empleados \n5) Calcular pago de un empleado \n", (seleccion) => {
                switch(seleccion) {
                    case "0": 
                        flag = false; 
                        console.log("\nSaliendo.....")
                        rl.close();
                        break;
                    case "1":
                        console.log("\nAgregar nuevo empleado:")
                        rl.question("id del empleado: ", (id) => {
                            if(empleadosBd.find(empleado => empleado.id === id)) {
                                console.log("\nLa Id ingresada ya existe en base de datos");
                                menuPPal();
                            }else {
                                rl.question("Nombre del empleado:", (nombre) => {
                                    rl.question("Salario mensual del empleado:", (salarioemp) => {
                                        agregarEmpleado(nombre, id, Number(salarioemp));
                                        menuPPal(); // Volvemos al menú
                                    });
                                });
                            };
                            //rl.close();
                        });
                        break;
                    case "2":
                        console.log("\nEliminar empleado: ")
                        rl.question("id del empleado: ", (id) => {
                            if(empleadosBd.find(empleado => empleado.id === id)){
                                eliminarEmpleado(id);
                            }else{
                                console.log("\nLa id ingresada no existe")
                            };
                            //rl.close();
                            menuPPal();
                        });
                        break;
                    case "3":
                        console.log("\nBuscar empleado:")
                        rl.question("Nombre del empleado: ", (nombre) => {
                            buscarEmpleado(nombre);
                            menuPPal();
                            //rl.close();
                        });
                        break;
                    case "4":
                        verEmpleados();
                        menuPPal();
                        break;
                    case "5":
                        console.log("\nCalcular el pago de un trabajador: ")
                        rl.question("Ingresa la Id del trabajador: ", (id) =>{
                            if (buscarId(id)){
                                rl.question("Ingresa los dias trabajados: ", (dias) => {
                                    const totalSalario: number = calcularSalario(Number(id),Number(dias));
                                    console.log(`El salario para el Id: ${id}, es de: $${totalSalario} pesos.`)
                                    menuPPal();
                                    //rl.close();
                                })
                            } else {
                                console.log("La Id ingresada no existe");
                                menuPPal();
                            };
                           // rl.close();
                        })
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
