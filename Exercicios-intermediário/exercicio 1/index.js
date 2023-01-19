let pos = 1;

function imageChanger(direction) {
	if (direction == 0 && pos != 1) {
		pos--;
	} else if (direction == 1 && pos != 4) {
		pos++;
	}

	const setas = Array.from(document.getElementsByClassName('seta'));
	
    if(pos > 1 && pos < 4){
        setas.forEach(element => {
            element.classList.remove('desativa')
        });
    }

	const cardAtivo = document.querySelector('.ativo');
	cardAtivo.classList.remove('ativo');
	switch (pos) {
		case 1:
			setas[0].classList.add('desativa');
			const cerejeira = document.getElementById('cerejeira');
			cerejeira.classList.add('ativo');
			break;
		case 2:
			const flores = document.getElementById('flores');
			flores.classList.add('ativo');
			break;
		case 3:
			const porDoSol = document.getElementById('porDoSol');
			porDoSol.classList.add('ativo');
			break;
		case 4:
			setas[1].classList.add('desativa');
			const lago = document.getElementById('lago');
			lago.classList.add('ativo');
			break;
	}
}
