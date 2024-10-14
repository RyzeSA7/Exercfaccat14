let anoAtual = parseInt(prompt("Digite o ano atual:"))
    let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"))

    // Cálculo da idade
    let idade = anoAtual - anoNascimento

    // Verificação se a pessoa pode votar
    let mensagem;
    if (idade >= 16) {
        mensagem = "Você pode votar este ano."
    } else {
        mensagem = "Você não pode votar este ano."
    }

    
    alert(mensagem)

