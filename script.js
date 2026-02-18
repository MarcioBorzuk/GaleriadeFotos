function irGaleria() {
    window.location.href = "galeria.html";
}

function voltar() {
    window.location.href = "index.html";
}

const alunos = [
    {nome: "Aluno 1", idade: 17, email: "aluno1@email.com", foto: "aluno1.jpg"},
    {nome: "Aluno 2", idade: 16, email: "aluno2@email.com", foto: "aluno2.jpg"},
    {nome: "Aluno 3", idade: 17, email: "aluno3@email.com", foto: "aluno3.jpg"},
    // Continue até 30 alunos
];

const galeria = document.getElementById("galeria");

if (galeria) {
    alunos.forEach(aluno => {
        galeria.innerHTML += `
            <div class="aluno">
                <img src="${aluno.foto}" alt="${aluno.nome}">
                <div>
                    <h2>${aluno.nome}</h2>
                    <p>Idade: ${aluno.idade}</p>
                    <p>Email: ${aluno.email}</p>
                </div>
            </div>
        `;
    });
}
