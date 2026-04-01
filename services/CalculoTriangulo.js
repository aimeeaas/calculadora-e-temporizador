
function CalculoTriangulo(l1, l2, l3) {
    l1 = parseFloat(l1);
    l2 = parseFloat(l2);
    l3 = parseFloat(l3);


    if (isNaN(l1) || isNaN(l2) || isNaN(l3)) {
        alert('Erro', 'Insira números válidos!');
    }

    if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) {
        alert("Não forma um triângulo");
        return;
    }

    let tipo = "";

    if (l1 === l2 && l2 === l3) {
        tipo = "Equilátero";
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        tipo = "Isósceles";
    } else {
        tipo = "Escaleno";
    }

    alert(`Triângulo ${tipo}`);
}


export default {CalculoTriangulo};