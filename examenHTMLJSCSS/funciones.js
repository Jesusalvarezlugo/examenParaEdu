//  EJERCICIO 3. Crea las funciones (exportadas) que hagan lo siguiente
//      * Devolver la lista de préstamos formateada con bootstrap, en cada fila aparecerán todos los datos del préstamo
//      * Devolver la imagen correspondiente a préstamos o a socios
//      * Devolver la lista de socios formateada con bootstrap, puedes elegir entre una tabla o una lista con los datos en cada item del socio
// Te dejo los arrays de datos necesarios:

const arrayPrestamos = [
    {id: 1, titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', editorial: 'Minotauro', tema: 'aventuras', prestado: true},
    {id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', editorial: 'Planeta', tema: 'aventuras', prestado: true},
    {id: 3, titulo: 'El Sanador de Caballos', autor: 'Gonzalo Giner', editorial: 'Espasa', tema: 'novela histórica', prestado: true},
    {id: 4, titulo: 'Yo, César', autor: 'Santiago Posteguillo', editorial: 'Paaneta', tema: 'novela histórica', prestado: true},
    {id: 5, titulo: 'El gran libro de Angular', autor: 'Varios', editorial: 'Tecnolibros', tema: 'diseño web', prestado: true},
    {id: 6, titulo: 'Mil recetas de cocina', autor: 'La abuela cocinera', editorial: 'Tecnolibros', tema: 'cocina', prestado: true},
    {id: 7, titulo: 'Reinos de Sangre', autor: 'Oscar Eimil', editorial: 'epubLibre', tema: 'novela histórica', prestado: true},
    {id: 8, titulo: 'Los cinco lenguajes del amor', autor: 'Gary Chapman', editorial: 'Unilit', tema: 'familia', prestado: true},
    {id: 9, titulo: 'Paternidad Robada', autor: 'María Calvo', editorial: 'Almuzara', tema: 'familia', prestado: true},
    {id: 10, titulo: 'El Macedonio', autor: 'Nicholas Guild', editorial: 'Planeta', tema: 'historia', prestado: true},
    {id: 11, titulo: 'El Ritmo de la Guerra', autor: 'Brandon Sanderson', editorial: 'epulibre', tema: 'aventuras', prestado: true},   
];

const arraySocios = [
    {idSocio: 1001, nombre: 'Aitor Tilla Depapas', mail: 'atilpas@biblio.bi'},
    {idSocio: 1011, nombre: 'Domingo Díaz de Carreras', mail: 'ddiaras@biblio.bi'},
    {idSocio: 1013, nombre: 'Josechu Letón', mail: 'joston@biblio.bi'},
    {idSocio: 1021, nombre: 'Dolores Fuertes de Barriga', mail: 'dfuriga@biblio.bi'},
    {idSocio: 1022, nombre: 'Encarna Vales', mail: 'encles@biblio.bi'},
    {idSocio: 1025, nombre: 'Armando Jaleo', mail: 'armleo@biblio.bi'},
    {idSocio: 1129, nombre: 'Carmelo Cotón', mail: 'carton@biblio.bi'},
    {idSocio: 1131, nombre: 'Alberto Mate Frito', mail: 'atomito@biblio.bi'}
];

const imagenes = {prestamos: 'prestamosbiblio.jpg', socios: 'userbiblio.jpg', inicio: 'biblioteca.jpg'  }


// Aquí van las funciones

export function listaPrestamos() {
    // crea una lista de préstamos y la devuelve
    let tabla =document.createElement('table'); 
    let tituloTab=document.createElement('tr');

    tituloTab.innerHTML="<tr><th>Id</th><th>Titutlo</th><th>Autor</th><th>Editorial</th><th>Tema</th></tr>";
    tabla.appendChild(tituloTab);

    arrayPrestamos.forEach((prestamo)=>{
        let contenidoTab=document.createElement('tr');
        contenidoTab.innerHTML=`<tr><th>${prestamo.id}</th><th>${prestamo.titulo}</th><th>${prestamo.autor}</th><th>${prestamo.editorial}</th><th>${prestamo.tema}</th></tr>`;
        tabla.appendChild(contenidoTab);
    })
    
    return tabla;

    
    
}
    

export function imgPrestamos() {
    // devuelve la imagen de préstamos

    let imagen =document.createElement('img');
    imagen.className="img-fluid";
    imagen.src="./prestamosbiblio.jpg";

    return imagen;
}

export function listaSocios() {
    // Crea y devuelve la lista de socios

    let tablaSocios=document.createElement('table');
    let tituloTab=document.createElement('tr');
    tituloTab.innerHTML="<tr><th>ID</th><th>Nombre</th><th>Email</th></tr>";
    tablaSocios.appendChild(tituloTab);

    arraySocios.forEach((socio)=>{
        let contenidoTab=document.createElement('tr');
        contenidoTab.innerHTML=`<tr><th>${socio.idSocio}</th><th>${socio.nombre}</th><th>${socio.mail}</th></tr>`;
        tablaSocios.appendChild(contenidoTab);
    })
    

    return tablaSocios;
}

export function imgSocios() {
    // devuelve laimagen de socios

    let imagen =document.createElement('img');
    imagen.className="img-fluid";
    imagen.src="./userbiblio.jpg";

    return imagen;
}