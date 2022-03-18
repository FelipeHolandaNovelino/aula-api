const app = require('./src/app');
const port = 3500;

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
});