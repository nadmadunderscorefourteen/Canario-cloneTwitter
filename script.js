const textarea = document.querySelector('textarea');
const cantar = document.querySelector('button');
const feed = document.querySelector('.conteudoPrincipal__listaTweets')

function pegarCanto(event) {
    event.preventDefault();
   
    const cantarTextarea = textarea.value;
    criarCanto(cantarTextarea);
}

cantar.addEventListener('click', pegarCanto);

    
function criarCanto(cantoTexto) {
    
    let data = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();
    
    const canto = {
        nome: "João",
        foto: "/assets/perfilFoto.svg",
        usuario:"@joao-D-oliveira",
        texto: cantoTexto,
        tempo: `${hora}:${minutos}`
    }

        listarTemplateCanto(canto);
}

function listarTemplateCanto(canto){

    const {nome, foto, usuario, texto, tempo} = canto;

    let li   = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet");

    let img  = document.createElement("img");
    img.src = foto;
    img.classList.add("tweet__fotoPerfil");
    
    let div  = document.createElement("div");
    div.classList.add("tweet__conteudo");

    let h2   = document.createElement("h2");
    h2.innerText = nome;

    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`;

    let p    = document.createElement("p");
    p.innerText = texto;

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

     feed.appendChild(li);
     textarea.value = ""
}