// modificar en package json el nombre del archivo para el scrit start

// Clase Hotel
class Hotel {
    nombre: string;
    ubicacion: string;
  
    constructor(nombre: string, ubicacion: string) {
      this.nombre = nombre;
      this.ubicacion = ubicacion;
    }
  }
  
  // Clase Habitación
  class Habitacion {
    numero: number;
    precio: number;
    estado: boolean; // true = ocupada, false = libre
  
    constructor(numero: number, precio: number) {
      this.numero = numero;
      this.precio = precio;
      this.estado = false; // Inicialmente libre
    }
  
    reservar(): void {
      if (this.estado) {
        console.log(`La habitación ${this.numero} ya está ocupada.`);
      } else {
        this.estado = true;
        console.log(`La habitación ${this.numero} ha sido reservada.`);
      }
    }
  
    liberar(): void {
      if (!this.estado) {
        console.log(`La habitación ${this.numero} ya está libre.`);
      } else {
        this.estado = false;
        console.log(`La habitación ${this.numero} ha sido liberada.`);
      }
    }
  }
  
  // Creación de algunos hoteles e interacciones
  const hotel1 = new Hotel("Hotel Paraíso", "Playa del Carmen");
  const hotel2 = new Hotel("Hotel Montaña", "Cerro Verde");
  
  const habitacion1 = new Habitacion(101, 150);
  const habitacion2 = new Habitacion(102, 200);
  
  console.log(`Bienvenido a ${hotel1.nombre} en ${hotel1.ubicacion}`);
  habitacion1.reservar();
  habitacion1.liberar();
  habitacion2.reservar();
  habitacion2.reservar(); // Intento de reservar la misma habitación
  habitacion2.liberar();
  