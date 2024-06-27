export class Libro {
    titulo: string;
    autor: string;
    genero: string;
    idioma: string;
    precio: number;
    formato: string;
    isbn: string;
    descripcion: string;
    estado: string;
    ubicacion: string;
    fecha_publicacion: number;
    editorial: string;
    paginas: number;
    dimensiones: string;
    peso: string;
    disponible: string;

    constructor(
        titulo:string ="La Odisea",
        autor:string ="Homero",
        genero:string ="Epopeya, Literatura clásica",
        idioma:string ="Español",
        precio:number =50.99,
        formato:string ="Tapa dura",
        isbn:string ="978-8497648452",
        descripcion:string ="Es un poema épico que relata el regreso del héroe griego Ulises a su hogar en Ítaca después de la Guerra de Troya.",
        estado:string ="Nuevo",
        ubicacion:string ="Librería La Rueda del Tiempo",
        fecha_publicacion:number =2008,
        editorial:string ="Ediciones Cátedra",
        paginas:number =480,
        dimensiones:string ="21 cm x 14 cm x 3 cm",
        peso:string ="650 gramos",
        disponible:string ="si"
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.idioma = idioma;
        this.precio = precio;
        this.formato = formato;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.fecha_publicacion = fecha_publicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.disponible = disponible;
    }

}