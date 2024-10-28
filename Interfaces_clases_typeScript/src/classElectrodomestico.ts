// modificar en package json el nombre del archivo para el scrit start

// Clase base Electrodoméstico
class Electrodomestico {
    precio: number;
    color: string;
  
    constructor(precio: number, color: string) {
      this.precio = precio;
      this.color = color;
    }
  
    mostrarInfo(): void {
      console.log(`Precio: ${this.precio}, Color: ${this.color}`);
    }
  }
  
  // Subclase Televisor
  class Televisor extends Electrodomestico {
    pulgadas: number;
  
    constructor(precio: number, color: string, pulgadas: number) {
      super(precio, color);
      this.pulgadas = pulgadas;
    }
  
    mostrarInfo(): void {
      super.mostrarInfo();
      console.log(`Pulgadas: ${this.pulgadas}`);
    }
  }
  
  // Subclase Nevera
  class Nevera extends Electrodomestico {
    capacidad: number;
  
    constructor(precio: number, color: string, capacidad: number) {
      super(precio, color);
      this.capacidad = capacidad;
    }
  
    mostrarInfo(): void {
      super.mostrarInfo();
      console.log(`Capacidad: ${this.capacidad} litros`);
    }
  }
  
  // Subclase Lavadora
  class Lavadora extends Electrodomestico {
    carga: number;
  
    constructor(precio: number, color: string, carga: number) {
      super(precio, color);
      this.carga = carga;
    }
  
    mostrarInfo(): void {
      super.mostrarInfo();
      console.log(`Carga: ${this.carga} kg`);
    }
  }
  
  // Creación de objetos y prueba de propiedades y métodos
  const televisor = new Televisor(500, "Negro", 42);
  const nevera = new Nevera(1000, "Blanco", 300);
  const lavadora = new Lavadora(750, "Gris", 8);
  
  televisor.mostrarInfo();
  nevera.mostrarInfo();
  lavadora.mostrarInfo();
  