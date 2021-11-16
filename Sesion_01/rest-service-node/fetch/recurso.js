const recurso = 'https://pokeapi.co/api/v2/pokemon/140/';

fetch(recurso)
.then(res => res.json())
.then(data => {
    console.log(data);
    let recurso = document.getElementById('recurso')
    recurso.innerHTML = `<p>${data.name}</p>
        <img src='${data.sprites.front_default}'>`
});

