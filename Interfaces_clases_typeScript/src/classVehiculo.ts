// modificar en package json el nombre del archivo para el scrit start

// Clase base Vehículo
class Vehiculo {
    desplazarse(): void {
      console.log("El vehículo se está desplazando.");
    }
  }
  
  // Subclase Coche
  class Coche extends Vehiculo {
    desplazarse(): void {
      console.log("El coche está conduciendo por la carretera.");
    }
  }
  
  // Subclase Barco
  class Barco extends Vehiculo {
    desplazarse(): void {
      console.log("El barco está navegando en el agua.");
    }
  }
  
  // Subclase Avión
  class Avion extends Vehiculo {
    desplazarse(): void {
      console.log("El avión está volando en el aire.");
    }
  }
  
  // Creación de objetos y prueba de los métodos
  const coche = new Coche();
  const barco = new Barco();
  const avion = new Avion();
  
  coche.desplazarse();
  barco.desplazarse();
  avion.desplazarse();
  