

function FormulaBhaskara(a, b, c) {
   const delta = (b * b) - (4 * a * c);
   const x1 = (-b + Math.sqrt(delta)) / (2 * a);
   const x2 = (-b - Math.sqrt(delta)) / (2 * a);

   if(a === 0){
    alert('O valor de A não pode ser zero');
   }
   if(delta < 0){
    alert('A equação não possui raízes reais');
   }
   if(isNaN(parseFloat(a)) || isNaN(parseFloat(b)) || isNaN(parseFloat(c))){
    alert('Erro', 'Insira números válidos!');
   }
   else{
    alert(`delta = ${delta}, x1 = ${x1}, x2 = ${x2}`)
   }
}

export default {FormulaBhaskara};