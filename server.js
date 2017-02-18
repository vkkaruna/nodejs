const express = require('express');
let app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

// capitilization helper
hbs.registerHelper('screamIt', (text) => {
   return text.toUpperCase()
});

app.use(express.static(__dirname+'/public/'));
app.set('view engine', hbs);

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageHeading: 'Home head',
        welcomeMessage: 'Welcome to Infinijith NodeJS programme!'
    })
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
       pageHeading: 'About',
   });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Bad request'
    })
});
app.listen(4000, () =>{
    console.log('Server is up and running on port 4000');
    
});