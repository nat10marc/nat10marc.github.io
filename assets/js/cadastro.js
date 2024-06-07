
function salvarViagem() {
   
    const nome = document.getElementById('nome').value.trim();
    const descricao = document.getElementById('desc').value.trim();
    const inicio = document.getElementById('inic').value.trim();
    const saida = document.getElementById('said').value.trim();
    const tripulantes = document.getElementById('tripus').value.trim();
    const meta = document.getElementById('metas').value.trim();
    const regiao = document.getElementById('regiao').value;

   
    function isValidDate(dateString) {
        const pattern = /^\d{4}-\d{2}-\d{2}$/;
        return pattern.test(dateString);
    }

  
    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

  
    if (nome === '') {
        alert('Por favor, insira seu nome.');
        return;
    }

    if (descricao === '') {
        alert('Por favor, insira uma descrição.');
        return;
    }

    if (inicio === '') {
        alert('Por favor, insira a data de partida.');
        return;
    }

    if (!isValidDate(inicio)) {
        alert('Por favor, insira uma data de partida válida (no formato aaaa-mm-dd).');
        return;
    }

    if (saida === '') {
        alert('Por favor, insira a data de retorno.');
        return;
    }

    if (!isValidDate(saida)) {
        alert('Por favor, insira uma data de retorno válida (no formato aaaa-mm-dd).');
        return;
    }

    if (tripulantes === '') {
        alert('Por favor, insira o número de tripulantes.');
        return;
    }

    if (meta === '') {
        alert('Por favor, insira a meta de resíduos a serem coletados.');
        return;
    }

  
    if (typeof(Storage) !== 'undefined') {
       
        let viagens = JSON.parse(localStorage.getItem('viagens')) || [];

        
        viagens.push({
            nome: nome,
            descricao: descricao,
            inicio: formatDate(inicio), 
            saida: formatDate(saida), 
            tripulantes: tripulantes,
            meta: meta,
            regiao: regiao
        });

      
        localStorage.setItem('viagens', JSON.stringify(viagens));

       
        document.getElementById('form-cadastro').reset();

        
        alert('Viagem cadastrada com sucesso!');
    } else {
        alert('Desculpe, o armazenamento local não está disponível neste navegador.');
    }
}


document.getElementById('botao-cadastrar').addEventListener('click', salvarViagem);
