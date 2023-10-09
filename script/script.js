

    let textoCampo = document.querySelector("#texto-campo");
    let result;
    let botaoCampo = document.querySelector("#btn-campo");

    let texto = document.querySelector("#texto");
    //textoCampo = textoCampo.toLowerCase();
    let btn = document.querySelector("#btn-id");
    btn.addEventListener("click", () => {
        window.location.reload();
    })

    botaoCampo.addEventListener("click", () => {

        result = textoCampo.value.toLowerCase();

        if ( result === "a" || result === "e" || result === "i" || result === "o" || result === "u") {
            texto.textContent = `" ${result} " : Você digitou uma VOGAL.`;
            texto.style.backgroundColor = "rgb(60,179,113)";
    
        } else {
            texto.textContent = `" ${result} " : Você digitou uma CONSOANTE.`;
            texto.style.backgroundColor = "rgb(60,179,113)";
        }
    
        if ( textoCampo.value === ""){
            texto.textContent = "Por favor, digite uma letra."
            texto.style.backgroundColor = "rgb(60,179,113)";
        }
    })

    botaoCampo.addEventListener("click", limpar);

    function limpar() {
        textoCampo.value = "";
    }

    textoCampo.addEventListener("keypress", function (e) {
        let keycode = (e.keycode ? e.keycode : e.which);
            if (keycode >= 32 && keycode <= 64) {
                e.preventDefault();
            } else if (keycode >= 91 && keycode <= 96) {
                e.preventDefault();
            } else if (keycode >= 123 && keycode <= 9830) {
                e.preventDefault();
            }

        if (textoCampo.value.length > 0) {
            e.preventDefault();
        }
    })



    //let letra;
    // do {
    //     letra = prompt("Escreva uma letra.");
    // } while(!letra)


    

