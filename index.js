const fs = require('fs');
const ejs = require('ejs');
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    // Параметры
    const styles = fs.readFileSync('styles.css', 'utf-8');
    const data = {
        name: 'Иван Иванов',
        styles,
    };


    // Рендерим HTML из EJS-шаблона
    const templatePath = path.join(__dirname, 'template.ejs');
    const html = await ejs.renderFile(templatePath, data);

    // Создаем PDF через Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    await page.setViewport({
        deviceScaleFactor: 3,
        width: 2480,
        height: 3508,

    })

    await page.pdf({
        path: 'output.pdf',
        // format: 'A4',
        width: '2480px',
        height: '3508px',
        // width: '210mm',
        // height: '297mm',
        printBackground: true,
        // margin: { top: '40px', bottom: '40px', left: '40px', right: '40px' },
    });

    await browser.close();

    console.log('PDF успешно создан!');
})();
