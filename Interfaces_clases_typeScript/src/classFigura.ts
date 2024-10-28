// modificar en package json el nombre del archivo para el scrit start

// Clase base FiguraGeometrica
class FiguraGeometrica {
    area(): number {
      return 0;
    }
  }
  
  // Subclase Triángulo
  class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    area(): number {
      return (this.base * this.altura) / 2;
    }
  }
  
  // Subclase Círculo
  class Circulo extends FiguraGeometrica {
    radio: number;
  
    constructor(radio: number) {
      super();
      this.radio = radio;
    }
  
    area(): number {
      return Math.PI * this.radio * this.radio;
    }
  }
  
  // Subclase Cuadrado
  class Cuadrado extends FiguraGeometrica {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    area(): number {
      return this.lado * this.lado;
    }
  }
  
  // Creación de objetos y cálculo de áreas
  const triangulo = new Triangulo(10, 5);
  const circulo = new Circulo(7);
  const cuadrado = new Cuadrado(4);
  
  console.log(`Área del triángulo: ${triangulo.area()}`);
  console.log(`Área del círculo: ${circulo.area()}`);
  console.log(`Área del cuadrado: ${cuadrado.area()}`);
  