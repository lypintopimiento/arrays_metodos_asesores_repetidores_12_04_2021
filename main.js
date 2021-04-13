

//Crear una lista (Array) y pedir los datos del usuario x maximo 10
//datos, usando el metodo unshift, eliminar los datos que deseas con
//el metodo shift  mostrar el resultado en consola o en alert


const datos = [];
let i = 1;
 while(i <= 8){
   datos.push(prompt(`Ingrese el dato - ${i}`));
    i++
        }
//const datos = [1,2,3,4,5,6,7,8];
console.warn('Agragar datos con unshift');
console.log(datos.unshift(9, 10));
console.log(datos);
console.warn('Eliminar dato con shift');
const eliminar = datos.shift();
console.log(datos);
console.log(eliminar);




//Ejemplo
//const lista = [];
 //let i = 1;
// while(i <= 4){
  //  lista.push(prompt(`Ingrese el dato - ${i}`));
 //   i++
 //}
 //console.log(lista);
 //console.log(lista.pop());





//Metodo pop el elimina el ultimo dato de la lista y devuel el valor del dato eliminado
// const plantas = ["Brocoli", "Coliflor", "Tomate"];
// const datoeliminado = plantas.pop();
// console.log(plantas);
// console.log(datoeliminado);



//Metodo push ingrese un dato al final del array y devuelve el total de datos que hay en el array
// const animal = ["Cerdo", "Cabra", "Oveja"];
// const animalesDomesticos = ["Haster","Gato","Perro", "Iguana"];
// let total = '';
// for (let i = 0; i < animalesDomesticos.length; i++) {
//     total = animal.push(animalesDomesticos[i]);
// }
// // for(i of animalesDomesticos){
// //     total = animal.push(i);
// // }
// console.log(animal);
// console.log(total);




// Declaramos un variable de tipo array y almacemanos los datos del usuario 
// function verificar(){
//     let opc = null;
//     do{
//         opc = prompt(`¿Que tipo de usuario eres?\n \n1. Profesor\n2. Estudiante`);
//         switch (opc) {
//             case '1':
//                 opc = true;
//                 break;
//             case '2':
//                 opc = false;
//                 break;
//             default:
//                 opc = null;
//                 alert("La opcion seleciona no existe porfavor ver nuevamente las opciones");
//                 break;
//         }
//     }while(opc==null);
//     return opc;
// }

// let listadatos = [];
// listadatos[0] = prompt("Ingrese su nombre");
// listadatos[1] = parseInt(prompt("Ingrese su edad"));
// listadatos[2] = parseFloat(prompt("Ingrese su altura"));
// listadatos[3] = verificar();
// listadatos[4] = ["Programar","Cocinar"];
// listadatos[5] = function (){
//         return `Hola soy la funcion del array`;
//     };
// console.log(listadatos);



//Declaracion de una variable tipo array, por medio de los indices llenamos la lista o array que almacena los datos en secuencia
// let array = [];
// array[0] = "Miguel Angel Castro Escamilla";
// array[1] = 23;
// array[2] = 1.85;
// array[3] = true;
// array[4] = ["Programar","Cocinar"];
// array[5] = function (){
//     return `Hola soy la funcion del array`;
// };
// console.log(array);



// Declaracion de una variable tipo array y inicializada con los datos
// let informacion_del_usuario = [
//         "Miguel Angel Castro Escamilla", 
//         23,
//         1.85,
//         true,
//         ["Programar","Cocinar"],
//         function (){
//             return `Hola soy la funcion del array`;
//         }
//     ];
// console.log(informacion_del_usuario);

