let fervendoAgua = (chaleiraNoFogao, fogaoLigado) => {
	return new Promise((resolve, reject) => {
        if(typeof chaleiraNoFogao != 'boolean') throw 'somente boolean é aceito'

		if (chaleiraNoFogao && fogaoLigado) {
			console.log('Fervendo agua');
			resolve();
		} else {
			const mensagemDeErro = 'ligue o fogao e/ou coloque chaleira no fogao';
			reject(mensagemDeErro);
		}
	});
};

let passarCafe = (aguaFervida) => {
	return new Promise((resolve) => {
		console.log('passando café');
		resolve(true);
	});
};

let tomarCafe = (cafePassado) => {
	return new Promise((resolve) => {
		console.log('Tomando café');
		resolve(true);
	});
};

let lavarXicara = (cafeTomado) => {
	return new Promise((resolve) => {
		console.log('lavando xícara');
		resolve(true);
	});
};

let chaleiraNoFogao = true;
let fogaoLigado = true;

async function iniciarProcessoDoCafe() {
	try {
		const aguaFervida = await fervendoAgua(chaleiraNoFogao, fogaoLigado);
		const cafePassado = await passarCafe(aguaFervida);
		const cafeTomado = await tomarCafe(cafePassado);
		const xicaraLavada = await lavarXicara(cafeTomado);
	}catch(err){
        console.log(err)
    }finally{
        console.log('bora trabalhar');
    }
}

iniciarProcessoDoCafe();
