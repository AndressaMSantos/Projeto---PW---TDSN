window.onload = () => {
    const formularios = document.querySelectorAll("td form");
    formularios.forEach(formulario =>{
        formulario.onsubmit = (evento) =>{
            const resposta = confirm("Deseja Realmente Excluir?");
            if(resposta === false){
            evento.preventDefault();
            }
        };
    });
};
