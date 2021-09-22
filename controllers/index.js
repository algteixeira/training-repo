module.exports = app => {
    app.get('/', (req,res) => res.send('Bem-vindo à locadora de veículos!'));
}