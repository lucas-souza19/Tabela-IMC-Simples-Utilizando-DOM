function tabela_pacientes(){
    debugger

    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var gordura = document.getElementById('gordura').value

    if (nome === "" || peso === "" || altura === "" || gordura === "") {
        alert("Insira os valores para gerar a tabela!")
        return
    }

    var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
     
    var tabela = document.getElementById('tabela_pacientes')
    if (!tabela) {
        tabela = document.createElement('table')
        tabela.setAttribute('id', 'tabela_pacientes')

        var cabecalho = document.createElement('thead')
        var linha = document.createElement('tr')
    
        var th = document.createElement('th')
        th.textContent = 'Nome'
        linha.append(th)
        
        var th = document.createElement('th')
        th.textContent = 'Peso (kg)'
        linha.append(th)
        
        var th = document.createElement('th')
        th.textContent = 'Altura (m)'
        linha.append(th)
        
        var th = document.createElement('th')
        th.textContent = 'Gordura Corporal (%)'
        linha.append(th)

        var th = document.createElement('th')
        th.textContent = 'IMC'
        linha.append(th)
        
        cabecalho.append(linha)
        tabela.append(cabecalho)
    }
    
    var conteudo = document.getElementById('conteudo')
    if (!conteudo) {
        conteudo = document.createElement('tbody')
        conteudo.setAttribute('id', 'conteudo')
    }

    var linha = document.createElement('tr')

    var td = document.createElement('td')
        td.textContent = nome
        linha.append(td)

    var td = document.createElement('td')
        td.textContent = peso
        linha.append(td)

    var td = document.createElement('td')
        td.textContent = altura
        linha.append(td)

    var td = document.createElement('td')
        td.textContent = gordura
        linha.append(td)

    var td = document.createElement('td')
        td.textContent = imc.toFixed(2)
        linha.append(td)

    conteudo.append(linha)
    tabela.append(conteudo)

    document.getElementById('section_pacientes').append(tabela)
}