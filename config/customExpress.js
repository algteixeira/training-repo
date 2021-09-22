const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));            // bP é relativo ao conteúdo que se passa por post/updates
    app.use(bodyParser.json());

    consign()         // consign faz com que todas meus controllers das rotas sejam visiveis ao app (express) da main
        .include('controllers')
        .into(app);
    
    return app;
}
