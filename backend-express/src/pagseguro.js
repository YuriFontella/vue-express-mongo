'use strict'

var Pagseguro = require('pagseguro-nodejs')

var pag = new Pagseguro({
  email: '',
  token: '',
  mode: (Pagseguro.MODE_SANDBOX),
  debug: (true)
})

// Configurando a moeda e a referência do pedido
pag.currency('BRL')
pag.reference('12345')

// Configuranto URLs de retorno e de notificação (Opcional)
pag.redirect('http://localhost:8080')
pag.notify('http://localhost:3000/notification')

// exportar a configuração do pagseguro
module.exports = pag
