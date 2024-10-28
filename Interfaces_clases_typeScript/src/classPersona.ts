// modificar en package json el nombre del archivo para el scrit start

// Definición de la clase Persona
class Persona {
    nombre: string;
    edad: number;
    documentoIdentidad: string;
  
    constructor(nombre: string, edad: number, documentoIdentidad: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.documentoIdentidad = documentoIdentidad;
    }
  
    caminar(): void {
      console.log(`${this.nombre} está caminando.`);
    }
  
    hablar(): void {
      console.log(`${this.nombre} está hablando.`);
    }
  
    comer(): void {
      console.log(`${this.nombre} está comiendo.`);
    }
  }
  
  // Creación de objetos Persona e interacción con sus métodos y propiedades
  const persona1 = new Persona("Carlos", 30, "123456789");
  const persona2 = new Persona("María", 25, "987654321");
  
  persona1.caminar();
  persona1.hablar();
  persona1.comer();
  
  persona2.caminar();
  persona2.hablar();
  persona2.comer();
  