const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const styles = fs.readFileSync('styles.css', 'utf-8');
    res.render('template', { styles });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});

// ejs.renderFile(templatePath, data, (err, html) => {
//     if (err) throw err;
//     fs.writeFileSync('output-html.html', html);
//     console.log('HTML создан!');
// });
