//! Codigo del cuadrado
console.group("Cuadrado ⏹️")
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);
function perimetroCuadrado(lado){
  return lado * 4;
};
// console.log(`El perimetro es de ${perimetroCuadrado}cm`);
function areaCuadrado(lado){
 return lado * lado;
} 
// console.log(`El area es ${areaCuadrado}cm`);
console.groupEnd();

//! Codigo del triangulo
console.group("Triangulo 🔼")
// const lado1Triangulo = 6;
// const lado2Triangulo = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden " 
// + lado1Triangulo + "cm, "
// + lado2Triangulo + "cm y "
// + baseTriangulo + "cm");
// const altura = 5.5
// console.log(`La altura del triangulo es de ${altura}cm`);
function perimetroTriangulo (lado1, lado2, base){
  return (parseInt(lado1) + parseInt(lado2)) + parseInt(base);
};
// console.log(`El perimetro del triangulo es de ${perimetroTriangulo}cm`);
function areaTriangulo (base, altura){
  return (base * altura)/2
}
// console.log(`El area del triangulo es de ${areaTriangulo}cm`);
console.groupEnd();

//! Codigo del circulo
console.group("Circulo ⏺️")
// const radio = 4 ;
// console.log("El radio del circulo es", radio)
function diametroCirculo(radio){
 return radio * 2;
};
// console.log("El diametro del circulo es", diametro)
const pi = Math.PI;
// console.log("pi es", pi)
function perimetroCirculo (radio){
  const diametro = diametroCirculo(radio)
  return diametro * Math.PI;
};
// console.log("El perimetro del circulo es", perimetroCirculo)
function areaCirculo (radio){
  return (radio * radio) * Math.PI;
}
// console.log("El area del circulo es", areaCirculo)


console.groupEnd();

//! Interactuar con HTML
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado")
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro)
};

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado")
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area)
};

function calcularPerimetroCirculo(){
  const input = document.getElementById("InputCirculo")
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro)
};
function calcularAreaCuadrado(){
  const input = document.getElementById("InputCirculo")
  const value = input.value;
  const area = areaCirculo(value);
  alert(area)
};
function calcularPerimetroTriangulo(){
  const inputLado1 = document.getElementById("InputLado1Triangulo")
  const lado1 = inputLado1.value;
  const inputLado2 = document.getElementById("InputLado2Triangulo")
  const lado2 = inputLado2.value;
  const baseTriangulo = document.getElementById("InputBaseTriangulo")
  const base = baseTriangulo.value;
  const perimetro = perimetroTriangulo(lado1,lado2,base)
  alert (perimetro)
}


function calcularAreaTriangulo(){
const alturaTriangulo = document.getElementById("InputAlturaTriangulo")
const altura = alturaTriangulo.value;
const baseTriangulo = document.getElementById("InputBaseTriangulo")
const base = baseTriangulo.value;
const area = areaTriangulo(base,altura)
alert(area)
}

function calcularAltura(){
  const inputLado1 = document.getElementById("InputLado1Triangulo")
  const lado1 = inputLado1.value;
  const inputLado2 = document.getElementById("InputLado2Triangulo")
  const lado2 = inputLado2.value;
  const baseTriangulo = document.getElementById("InputBaseTriangulo")
  const base = baseTriangulo.value;
  const altura = 
  (lado1 === lado2) ? 
  Math.sqrt((lado1*lado2)-((base * base)/4)) : 
  alert("No es un isoseles, recuerda que los triangulos isosceles tienen sus dos lados iguales")
  alert(altura.toFixed(2))
};

