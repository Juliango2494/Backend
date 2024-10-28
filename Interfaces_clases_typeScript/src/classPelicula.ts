// modificar en package json el nombre del archivo para el scrit start

// Clase Película
class Pelicula {
    titulo: string;
    duracion: number; // en minutos
    director: string;
  
    constructor(titulo: string, duracion: number, director: string) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.director = director;
    }
  }
  
  // Clase CatalogoPeliculas
  class CatalogoPeliculas {
    peliculas: Pelicula[];
  
    constructor() {
      this.peliculas = [];
    }
  
    agregarPelicula(pelicula: Pelicula): void {
      this.peliculas.push(pelicula);
    }
  
    buscarPorTitulo(titulo: string): Pelicula | undefined {
      return this.peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
    }
  
    filtrarPorDirector(director: string): Pelicula[] {
      return this.peliculas.filter(pelicula => pelicula.director.toLowerCase() === director.toLowerCase());
    }
  }
  
  // Creación de un catálogo de películas y prueba de funcionalidades
  const catalogo = new CatalogoPeliculas();
  
  const pelicula1 = new Pelicula("Inception", 148, "Christopher Nolan");
  const pelicula2 = new Pelicula("Interstellar", 169, "Christopher Nolan");
  const pelicula3 = new Pelicula("The Matrix", 136, "Lana Wachowski");
  
  catalogo.agregarPelicula(pelicula1);
  catalogo.agregarPelicula(pelicula2);
  catalogo.agregarPelicula(pelicula3);
  
  // Buscar película por título
  const busquedaTitulo = catalogo.buscarPorTitulo("Inception");
  if (busquedaTitulo) {
    console.log(`Película encontrada: ${busquedaTitulo.titulo}, Duración: ${busquedaTitulo.duracion} minutos, Director: ${busquedaTitulo.director}`);
  } else {
    console.log("Película no encontrada.");
  }
  
  // Filtrar películas por director
  const peliculasNolan = catalogo.filtrarPorDirector("Christopher Nolan");
  console.log(`Películas dirigidas por Christopher Nolan:`);
  peliculasNolan.forEach(pelicula => {
    console.log(`- ${pelicula.titulo}, Duración: ${pelicula.duracion} minutos`);
  });
  