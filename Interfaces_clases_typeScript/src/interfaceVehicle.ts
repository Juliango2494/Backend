// EDITAR EL NOMBRE DEL ARCHIVO EN EL MAIN DEL PACKAGE.JSON

interface Vehicle {
    model: string;
    year: number;
    color: string;
  }
  
  
  interface Car extends Vehicle {
    nroPuertas: number;
    capacidadCarga: number;
  }
  
  interface Motorcycle extends Vehicle {
    tipoManillar: string;
    fullinjection: boolean;
  }
  
  
  class CarImplementation implements Car {
    model: string;
    year: number;
    color: string;
    nroPuertas: number;
    capacidadCarga: number;
  
    constructor(model: string, year: number, color: string, nroPuertas: number, capacidadCarga: number) {
      this.model = model;
      this.year = year;
      this.color = color;
      this.nroPuertas = nroPuertas;
      this.capacidadCarga = capacidadCarga;
    }
  }
  
  class MotorcycleImplementation implements Motorcycle {
    model: string;
    year: number;
    color: string;
    tipoManillar: string;
    fullinjection: boolean;
  
    constructor(model: string, year: number, color: string, tipoManillar: string, fullinjection: boolean) {
      this.model = model;
      this.year = year;
      this.color = color;
      this.tipoManillar = tipoManillar;
      this.fullinjection = fullinjection;
    }
  }
  