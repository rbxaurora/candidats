const express = require(`express`);
const hbs = require(`hbs`)
const app = express();
const mongoose = require(`mongoose`);
const Post = require(`./models/post`);
const Candidats = require(`./models/candidats`);

const port = 8080;
const db = `mongodb+srv://microsoftlive52:jatamoo2023@auteam-db.wsvrih7.mongodb.net/auroraTeamDataBase?retryWrites=true&w=majority`;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log(`Connected to DB.`))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(`public`));
app.set(`views`, `views`);
app.set(`view engine`, `hbs`);
// ----------

app.get(`/`, (req, res) => {
    res.render(`index`);
});

let usernames;
app.post(`/user`, (req, res) => {
    let { username } = req.body;

    if(username) {
        usernames = username;
        res.redirect(`/choice`);
        console.log(usernames);
    } else {
        res.redirect(`/error`);
    }
});

let candidatos;

app.get(`/choice`, (req, res) => {
    Candidats
        .find()
        .then((candidats) => {
            candidatos = candidats;
            res.render(`choice`, {
                candidatos: candidatos
            })
        })
        .catch((error) => {
            console.log(error);
        })
}); 

app.get(`/error`, (req, res) => {
    res.render(`400`);
});

app.post(`/send`, (req, res) => {
    let { choice } = req.body;

    const post = new Post({ usernames, choice });

    post
        .save()
        .then((result) => {
            console.log(`Данные успешно переданы на сервер.`);
            res.redirect(`/done`);
        })
        .catch((error) => {
            console.log(error);
            res.redirect(`/error`);
        });
});

app.get(`/done`, (req, res) => {
    res.render(`done`);
});