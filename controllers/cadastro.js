module.exports = app => {
    app.get('/signup', (req,res) => res.send('Sessão de cadastro!'));
}