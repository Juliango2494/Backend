import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
interface producto {
    nombre: string;
    cod: string;
    precio: number;
    cantidad: number;
};

let productosBd: producto[] = [
    {nombre: "Papas de limon", cod: "001", precio: 2100, cantidad: 5},
    {nombre: "Papas de pollo", cod: "002", precio: 2000, cantidad: 10},
    {nombre: "Papas de BBQ", cod: "003", precio: 2200, cantidad: 3},
    {nombre: "Trocipollos", cod: "004", precio: 1500, cantidad: 4},
    {nombre: "Coca cola", cod: "005", precio: 5400, cantidad: 13}
];
function agregarProducto(nombre: string, cod: string, precio: number, cantidad: number):void{
    const nuevoProducto: producto = {nombre, cod, precio, cantidad};
    productosBd.push(nuevoProducto);
    console.log(`El producto "${nombre}" ha sido agregado a la base de datos`);
}
function buscarProducto(nombre: string): void {
    const emp = productosBd.find(producto => producto.nombre === nombre);
    if(emp){
        console.log(`Informacion del producto: Nombre: ${emp.nombre}, Cod: ${emp.cod}, Precio: ${emp.precio}`)
    }else {
        console.log(`No existe ningun producto llamado "${nombre}"`)
    }
}
function eliminarProducto(cod: string): void {
    const indice = productosBd.findIndex(producto => producto.cod === cod);
    if (indice !== -1){
        const productoEliminado = productosBd.splice(indice, 1);
        console.log(`El producto "${productoEliminado[0].nombre}" ha sido eliminado de la base de datos`)
    } else {
        console.log(`No se encontro ninguna persona por el cod: "${cod}"`)
    }
}
function verProductos (): void {
    let msj: string = "Productos:"
    productosBd.forEach(producto => {
        msj += `\n nombre: ${producto.nombre}, cod: ${producto.cod}, precio: $${producto.precio}, cantidad en inventario: ${producto.cantidad}`
    });
    console.log(msj);
}

rl.question('Iniciar programa? [s/n] ', (answer) => {
    switch(answer.toLowerCase()) {
    case 's':
        console.log('Iniciando ...');
        let flag: boolean = true;
        const menuPPal = () => {
            rl.question("\nMenu (Ingresa el numero de la opcion deseada):\n0) Salir del programa \n1) Agregar producto \n2) Eliminar producto \n3) Buscar producto \n4) Ver productos \n5) Valor en inventario \n", (seleccion) => {
                switch(seleccion) {
                    case "0": 
                        flag = false; 
                        console.log("\nSaliendo.....")
                        rl.close();
                        break;
                    case "1":
                        console.log("\nAgregar nuevo producto:")
                        rl.question("Cod del producto: ", (cod) => {
                            if(productosBd.find(producto => producto.cod === cod)) {
                                console.log("\nEl producto ingresado ya existe en base de datos");
                                menuPPal();
                            }else {
                                rl.question("Nombre del producto:", (nombre) => {
                                    rl.question("Precio del producto:", (precio) => {
                                        rl.question("Cantidad que ingresa: ",(cantidad) => {
                                            agregarProducto(nombre, cod, Number(precio), Number(cantidad));
                                            menuPPal(); // Volvemos al menú
                                        });
                                    });
                                });
                            };
                            //rl.close();
                        });
                        break;
                    case "2":
                        console.log("\nEliminar producto: ")
                        rl.question("Cod del producto: ", (cod) => {
                            if(productosBd.find(producto => producto.cod === cod)){
                                eliminarProducto(cod);
                            }else{
                                console.log("\nEl cod ingresado no existe")
                            };
                            //rl.close();
                            menuPPal();
                        });
                        break;
                    case "3":
                        console.log("\nBuscar producto:")
                        rl.question("Nombre del producto: ", (nombre) => {
                            buscarProducto(nombre);
                            menuPPal();
                            //rl.close();
                        });
                        break;
                    case "4":
                        verProductos();
                        menuPPal();
                        break;
                    case "5":
                        console.log("\nCalculando el valor total del inventario.... ")
                        let valorInventario: number = 0;
                        productosBd.forEach(producto => {
                            valorInventario += producto.precio * producto.cantidad;                           
                        });
                        console.log(`El valor del inventario es de: $${valorInventario}`)
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
