const fs = require('fs');
const ejs = require('ejs');
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    // Параметры
    const styles = fs.readFileSync('styles.css', 'utf-8');

    const content = {
        firstSection: {
            items: [
                {
                    slug: 'data-card',
                    heading: 'Основные характеристики',
                    items: [
                        {
                            label: 'VIN-номер',
                            value: 'Volkswagen'
                        },
                        {
                            label: 'VIN-номер 2',
                            value: 'Volkswagen'
                        }
                    ]
                },
                {
                    slug: 'data-color-card',
                    heading: 'Цвет автомобиля',
                    items: [
                        {
                            label: 'Белый',
                            color: '#FEFEFE'
                        },
                        {
                            label: 'Красный',
                            color: '#FE546D'
                        }
                    ]
                },
                {
                    slug: 'data-card-comment-border',
                    heading: 'Цвет автомобиля',
                    comment: 'Комментарий'
                },
                {
                    slug: 'data-card-additional-checkboxes',
                    heading: 'Состояние автомобиля',
                    items: [
                        {
                            label: 'Белый',
                            value: 'Тест'
                        },
                        {
                            label: 'Красный',
                            value: 'Тест'
                        }
                    ],
                    labels: [
                        {
                            label: 'Белый',
                            checked: true
                        },
                        {
                            label: 'Красный',
                            checked: false
                        }
                    ]
                }
            ]
        },
        secondSection: {
            items: [
                {
                    slug: 'data-check-card',
                    title: 'Уровень масла ДВС',
                    state: 'error',
                    comment: {
                        title: 'Комментарий',
                        desc: 'Комментарий очень  от.'
                    },
                    additionalData: {
                        labels: [
                            {
                                label: 'Белый',
                                checked: true
                            },
                            {
                                label: 'Красный',
                                checked: false
                            }
                        ]
                    },
                    imageUrl: 'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                },
                {
                    slug: 'data-check-card',
                    title: 'Уровень масла ДВС',
                    state: 'success',
                    comment: null,
                    additionalData: null,
                    imageUrl: 'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                }
            ]
        }
    }


    const data = {
        name: 'Иван Иванов',
        styles,
        data: content
    };


    // Рендерим HTML из EJS-шаблона
    const templatePath = path.join(__dirname, 'views/template.ejs');
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
