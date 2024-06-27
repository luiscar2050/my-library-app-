import { Libro } from "./models/Libro";
import { Libreria } from "./models/Libreria";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const miLibreria = new Libreria('accion', 'libros de accion');

function AgregarLibro(): void {
  const titulo: string = prompt("Ingrese título: ");
  const autor: string = prompt("Ingrese autor: ");
  const genero: string = prompt("Ingrese género: ");
  const idioma: string = prompt("Ingrese idioma: ");
  const precio: number = parseFloat(prompt("Ingrese precio: "));
  const formato: string = prompt("Ingrese formato: ");
  const isbn: string = prompt("Ingrese ISBN: ");
  const descripcion: string = prompt("Ingrese descripción: ");
  const estado: string = prompt("Ingrese estado: ");
  const ubicacion: string = prompt("Ingrese ubicación: ");
  const fecha_publicacion: number = parseInt(prompt("Ingrese fecha de publicación: "));
  const editorial: string = prompt("Ingrese editorial: ");
  const paginas: number = parseInt(prompt("Ingrese número de páginas del libro: "));
  const dimensiones: string = prompt("Ingrese las dimensiones: ");
  const peso: string = prompt("Ingrese el peso del libro (kg): ");
  const disponible: string = prompt("¿El libro está disponible?: ");
  
  const nuevoLibro = new Libro(titulo, autor, 
    genero, idioma, precio, formato, isbn, descripcion, 
    estado, ubicacion, fecha_publicacion, editorial, paginas, 
    dimensiones, peso, disponible);
  
    miLibreria.AgregarLibro(nuevoLibro);
        console.log(`El libro "${titulo}" ha sido agregado a la librería.`);
}

function EliminarLibros(): any {
  miLibreria.EliminarLibros();
  console.log(`El libro ha sido eliminado de la librería.`);
}

function VerLibros(): void {
  miLibreria.VerLibros();
}

function menu(): void {
  let opcion: string;
  do {
      console.log('\n--- Menú ---');
      console.log("1. Ver libros");
      console.log("2. Agregar libro");
      console.log("3. Eliminar libro");
      console.log("4. Salir");
      opcion = prompt('Seleccione una opción: ');

      switch (opcion) {
          case '1':
            VerLibros();
              break;
          case '2':
            AgregarLibro();
              break;
          case '3':
            EliminarLibros();
              break;
          case '4':
              console.log('Saliste de menu');
              break;
          default:
              console.log('Opción no válida. Intente de nuevo.');
      }
  } while (opcion !== '5');
}

menu();

