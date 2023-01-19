let usuario = { 
    nome: 'Bruno',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluído')
    }
}

usuario.excluir()