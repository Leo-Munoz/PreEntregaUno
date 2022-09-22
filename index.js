// El usuario consulta una empresa para saber el valor unitario de la acción.

const cotizacionAcciones = [
    { empresa: "Broota INC", precio: 200 },
    { empresa: "Farmaloop LLC", precio: 180 },
    { empresa: "Ecopass INC", precio: 210 },
    { empresa: "Kidsbook Enterprise", precio: 60 },
];

// Con filter filtrará todos los elementos que cumplan la condición:

let accionCotizada = prompt("Ingrese la empresa a consultar el valor de la acción. \n (Broota INC, Farmaloop LLC, Ecopass INC, Kidsbook Enterprise)");
let filtrado = cotizacionAcciones.filter(item => item.empresa === accionCotizada);

filtrado.forEach((item) => {
    let mensaje = `El valor de la acción de ${item.empresa} es de $${item.precio} CLP.`;
    alert(mensaje);
})