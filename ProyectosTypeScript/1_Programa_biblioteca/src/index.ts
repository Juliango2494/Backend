// Definir la estructura de un libro con una interfaz
interface Libro {
    codigo: string;
    titulo: string;
    autor: string;
  }
  
  // Array que almacenará los libros
  let biblioteca: Libro[] = [
    {codigo: "001", titulo: "30 formas de alimentar a tu mascota", autor: "Leonardo Otero"},
    {codigo: "002", titulo: "Las aventuras de Campo Elias el gato naranja", autor: "Hector Manrique"}
  ];
  // Función para agregar un libro
  function agregarLibro(codigo: string, titulo: string, autor: string): void {
    const nuevoLibro: Libro = { codigo, titulo, autor };
    biblioteca.push(nuevoLibro);
    mostrarMensaje(`Libro "${titulo}" agregado a la biblioteca.`);
  }
  
  // Función para buscar un libro por código
  function buscarLibro(codigo: string): Libro | undefined {
    return biblioteca.find(libro => libro.codigo === codigo);
  }
  
  // Función para eliminar un libro por código
  function eliminarLibro(codigo: string): void {
    const indice = biblioteca.findIndex(libro => libro.codigo === codigo);
    if (indice !== -1) {
      const libroEliminado = biblioteca.splice(indice, 1);
      mostrarMensaje(`Libro "${libroEliminado[0].titulo}" eliminado de la biblioteca.`);
    } else {
      mostrarMensaje(`No se encontró ningún libro con el código: ${codigo}`);
    }
  }
  
  // Función para mostrar todos los libros
  function mostrarLibros(): void {
    let msj: string = "Libros en la biblioteca: <br>";
    let nro: number = 1
    biblioteca.forEach(libro => {
      msj += `${nro}) Código: ${libro.codigo}, Título: ${libro.titulo}, Autor: ${libro.autor} <br>`;
      nro += 1
    });
    mostrarMensaje(msj)
  }

  // Función para mostrar mensajes en el HTML
function mostrarMensaje(mensaje: string): void {
  const output = document.getElementById("output");
  if (output) {
      output.innerHTML = mensaje;
  }
}

  const botonAgregar = document.getElementById("agregar");
  const botonEliminar = document.getElementById("eliminar");
  const botonMostrar = document.getElementById("mostrar");
  const botonBuscar = document.getElementById("buscar");

  if (botonAgregar) {
    botonAgregar.addEventListener("click", () => {
        const codigo = prompt("Ingrese el código del libro:");
        if (biblioteca.find(libro => libro.codigo === codigo)) {
          mostrarMensaje("El codigo ingresado ya existe");
        } else {
          const titulo = prompt("Ingrese el título del libro:");
          const autor = prompt("Ingrese el autor del libro:");
          if (codigo && titulo && autor) {
              agregarLibro(codigo, titulo, autor);
          } else {
              mostrarMensaje("Debe completar todos los campos.");
          }
        }
    });
}

if (botonEliminar) {
    botonEliminar.addEventListener("click", () => {
        const codigo = prompt("Ingrese el código del libro a eliminar:");
        if (codigo) {
            eliminarLibro(codigo);
        } else {
            mostrarMensaje("Debe ingresar un código.");
        }
    });
}

if (botonMostrar) {
    botonMostrar.addEventListener("click", mostrarLibros);
}

if (botonBuscar) {
    botonBuscar.addEventListener("click", () => {
        const codigo = prompt("Ingrese el código del libro a buscar:");
        if (codigo) {
            const libro = buscarLibro(codigo);
            if (libro) {
                mostrarMensaje(`Código: ${libro.codigo}, Título: ${libro.titulo}, Autor: ${libro.autor}`);
            } else {
                mostrarMensaje(`No se encontró ningún libro con el código: ${codigo}`);
            }
        } else {
            mostrarMensaje("Debe ingresar un código.");
        }
    });
}