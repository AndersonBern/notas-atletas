function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        //Copia as notas para sem alterar o array original
        let notas = [...atletas[i].notas];

        //Ordena as notas em ordem crescente
        notas.sort((a, b) => a - b);

        //Remove a meno e a maior
        let notasComputadas = notas.slice(1, 4);

        //Calcula a media
        let soma = 0;
        notasComputadas.forEach(nota => soma += nota);
        let media = soma / notasComputadas.length;

        //Exibe o resultado
        console.log(`Atleta: ${atletas[i].nome}`);
        console.log(`Notas Obtidas: ${atletas[i].notas.join(', ')}`);
        console.log(`Média Válida: ${media}\n`);
}
}

let atletas = [
    {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
    },
    {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
    },
    {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
    }
];

calcularMedia(atletas);