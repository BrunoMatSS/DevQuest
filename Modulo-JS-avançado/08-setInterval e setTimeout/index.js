setTimeout(() => {
    alert('HelloWorld')
}, 2000);

const idSetInterval = setInterval(() => {
    console.log('Executando a cada 2 seg')
}, 2000);

clearInterval(idSetInterval)