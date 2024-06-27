import { Libro } from "./models/Libro";
import { Libreria } from "./models/Libreria";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const miLibreria = new Libreria('accion', 'libros de accion');

function AgregarLibro(): void {
  const titulo: string = prompt("Ingrese el título del libro: ");
  const autor: string = prompt("Ingrese el autor del libro: ");
  const genero: string = prompt("Ingrese el género del libro: ");
  const idioma: string = prompt("Ingrese el idioma del libro: ");
  const precio: number = parseFloat(prompt("Ingrese el precio del libro: "));
  const formato: string = prompt("Ingrese el formato del libro: ");
  const isbn: string = prompt("Ingrese el ISBN del libro: ");
  const descripcion: string = prompt("Ingrese la descripción del libro: ");
  const estado: string = prompt("Ingrese el estado del libro: ");
  const ubicacion: string = prompt("Ingrese la ubicación del libro: ");
  const fecha_publicacion: number = parseInt(prompt("Ingrese la fecha de publicación del libro (año): "));
  const editorial: string = prompt("Ingrese la editorial del libro: ");
  const paginas: number = parseInt(prompt("Ingrese el número de páginas del libro: "));
  const dimensiones: string = prompt("Ingrese las dimensiones del libro: ");
  const peso: string = prompt("Ingrese el peso del libro (kg): ");
  const disponible: string = prompt("¿El libro está disponible? (sí/no): ");
  
  const nuevoLibro = new Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso, disponible);
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

function Descuento(): void {
  const libroPorDefecto = new Libro();
  libroPorDefecto.AplicarDescuento();
}

function menu(): void {
  let opcion: string;
  do {
      console.log('\n--- Menú ---');
      console.log('1. Agregar libro');
      console.log('2. Eliminar libro');
      console.log('3. Ver libros');
      console.log('4. Ver descuento');
      console.log('5. Salir');
      opcion = prompt('Seleccione una opción: ');

      switch (opcion) {
          case '1':
              AgregarLibro();
              break;
          case '2':
              EliminarLibros();
              break;
          case '3':
              VerLibros();
              break;
          case '4':
              Descuento();
              break;
          case '5':
              console.log('Saliendo del menu...');
              break;
          default:
              console.log('Opción no válida. Intente de nuevo.');
      }
  } while (opcion !== '5');
}

menu();
