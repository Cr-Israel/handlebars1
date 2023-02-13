const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const port = 3000;

app.use(express.static('public'));

app.get('/loja/produtos/premium/tomate', (req, res) => {
    const tomats = [
        {
            title: "Maçã Premium",
            category: "Super cuidada e regada",
            body: "A nossa maçã é a melhor do mundo!",
        }
    ];
    res.render('tomate', { tomats });
});

app.get('/loja/produtos/premium/maca', (req, res) => {
    const macs = [
        {
            title: "Maçã Premium",
            category: "Super cuidada e regada",
            body: "A nossa maçã é a melhor do mundo!",
        }
    ];
    res.render('maca', { macs });
});

app.get('/loja/produtos/premium/batata', (req, res) => {
    const bats = [
        {
            title: "Batata Premium",
            category: "Super cuidada e regada",
            body: "A nossa batata é a melhor do mundo!",
        }
    ];
    res.render('batata', { bats });
});

app.get('/loja/produtos/premium', (req, res) => {
    res.render('premium');
});

app.get('/loja/produtos', (req, res) => {
    const produtos = ["Arroz - R$10,00", "Feijão - R$15,00", "Macarrão - R$20,00"];
    res.render('produtos', { produtos });
});

app.get('/loja', (req, res) => {
    res.render('loja');
});

app.listen(port, () => console.log(`Running on port ${port}!`));