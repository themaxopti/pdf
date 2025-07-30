const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
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
        },
        thirdSection: {
            comment: {
                label: 'Комментарий',
                desc: 'Комментарий очень  от.'
            },
            state: 'success'
        },
        fourthSection: {
            items: [
                {
                    title: 'Комментарий',
                    state: 'error',
                    images: [
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                    ],
                    comment: {
                        title: 'Комментарий',
                        desc: 'Комментарий очень  от.'
                    }
                },
                {
                    title: 'Комментарий',
                    state: 'success',
                    images: [
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                    ],
                    comment: null
                }
            ]
        },
        fifthSection: {
            items: [
                {
                    heading: 'Левое переднее колесо',
                    items: [
                        {
                            label: 'Комментарий',
                            colorNumber: 5
                        },
                        {
                            label: 'Комментарий',
                            colorNumber: 1
                        }
                    ],
                    comment: {
                        title: 'Комментарий',
                        desc: 'Комментарий очень  от.'
                    },
                    images: [
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                    ],
                },
                {
                    heading: 'Левое переднее колесо',
                    items: [
                        {
                            label: 'Комментарий',
                            colorNumber: 5
                        },
                        {
                            label: 'Комментарий',
                            colorNumber: 1
                        }
                    ],
                    comment: null,
                    images: [
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                        'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                    ],
                }
            ]
        },
        sixthSection: {
            items: [
                {
                    number: 1,
                    label: 'Капот',
                    badgeLabel: '2 повреждения',
                    badgeState: 'success'
                },
                {
                    number: 2,
                    label: 'Капот',
                    badgeLabel: '2 повреждения',
                    badgeState: 'error'
                }
            ],
            carImage: 'https://i.postimg.cc/Y0FrHcTT/img-7.png',
            imagesComments: [
                {
                    heading: 'Левое переднее колесо',
                    imagesComments: [
                        {
                            label: 'Комментарий',
                            comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                            images: [
                                'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                            ],
                        },
                        {
                            label: 'Скол',
                            comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                            // images: [
                            //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                            //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                            //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                            // ],
                        }
                    ]
                },
                {
                    heading: 'Левое переднее колесо',
                    imagesComments: [
                        {
                            label: 'Комментарий',
                            comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                            images: [
                                'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                            ],
                        },
                        {
                            label: 'Скол',
                            comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                            // images: [
                            //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                            //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                            //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                            // ],
                        }
                    ]
                }
            ],
            rightSide: {
                carImage: 'https://i.postimg.cc/MGvsN5jj/img-8.png',
                items: [
                    {
                        number: 1,
                        label: 'Капот 2',
                        badgeLabel: '2 повреждения',
                        badgeState: 'success'
                    },
                    {
                        number: 2,
                        label: 'Капот 2',
                        badgeLabel: '2 повреждения',
                        badgeState: 'error'
                    }
                ],
                imagesComments: [
                    {
                        heading: 'Левое переднее колесо',
                        imagesComments: [
                            {
                                label: 'Комментарий',
                                comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                                images: [
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                ],
                            },
                            {
                                label: 'Скол',
                                comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                                // images: [
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                // ],
                            }
                        ]
                    },
                    {
                        heading: 'Левое переднее колесо',
                        imagesComments: [
                            {
                                label: 'Комментарий',
                                comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                                images: [
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                ],
                            },
                            {
                                label: 'Скол',
                                comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                                // images: [
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                // ],
                            }
                        ]
                    }
                ],
            },
            leftSide: {
                carImage: 'https://i.postimg.cc/MGvsN5jj/img-8.png',
                items: [
                    {
                        number: 1,
                        label: 'Капот 2',
                        badgeLabel: '2 повреждения',
                        badgeState: 'success'
                    },
                    {
                        number: 2,
                        label: 'Капот 2',
                        badgeLabel: '2 повреждения',
                        badgeState: 'error'
                    }
                ],
                imagesComments: [
                    {
                        heading: 'Левое переднее колесо',
                        imagesComments: [
                            {
                                label: 'Комментарий',
                                comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                                images: [
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                ],
                            },
                            {
                                label: 'Скол',
                                comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                                // images: [
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                // ],
                            }
                        ]
                    },
                    {
                        heading: 'Левое переднее колесо',
                        imagesComments: [
                            {
                                label: 'Комментарий',
                                comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                                images: [
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                ],
                            },
                            {
                                label: 'Скол',
                                comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                                // images: [
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                // ],
                            }
                        ]
                    }
                ],
            },
            backSide: {
                items: [
                    {
                        number: 1,
                        label: 'Капот',
                        badgeLabel: '2 повреждения',
                        badgeState: 'success'
                    },
                    {
                        number: 2,
                        label: 'Капот',
                        badgeLabel: '2 повреждения',
                        badgeState: 'error'
                    }
                ],
                carImage: 'https://i.postimg.cc/Y0FrHcTT/img-7.png',
                imagesComments: [
                    {
                        heading: 'Левое переднее колесо',
                        imagesComments: [
                            {
                                label: 'Комментарий',
                                comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                                images: [
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                ],
                            },
                            {
                                label: 'Скол',
                                comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                                // images: [
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                // ],
                            }
                        ]
                    },
                    {
                        heading: 'Левое переднее колесо',
                        imagesComments: [
                            {
                                label: 'Комментарий',
                                comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                                images: [
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                    'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                ],
                            },
                            {
                                label: 'Скол',
                                comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                                // images: [
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                                // ],
                            }
                        ]
                    }
                ],
            },
            topSide: {
                carImage: 'https://i.postimg.cc/MGvsN5jj/img-8.png',
                items: [
                    {
                        number: 1,
                        label: 'Капот 2',
                        badgeLabel: '2 повреждения',
                        badgeState: 'success'
                    },
                    {
                        number: 2,
                        label: 'Капот 2',
                        badgeLabel: '2 повреждения',
                        badgeState: 'error'
                    }
                ],
                // imagesComments: [
                //     {
                //         heading: 'Левое переднее колесо',
                //         imagesComments: [
                //             {
                //                 label: 'Комментарий',
                //                 comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                //                 images: [
                //                     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                 ],
                //             },
                //             {
                //                 label: 'Скол',
                //                 comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                //                 // images: [
                //                 //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                 //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                 //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                 // ],
                //             }
                //         ]
                //     },
                //     {
                //         heading: 'Левое переднее колесо',
                //         imagesComments: [
                //             {
                //                 label: 'Комментарий',
                //                 comment: { title: 'Комментарий', desc: 'Комментарий очень  от.' },
                //                 images: [
                //                     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                 ],
                //             },
                //             {
                //                 label: 'Скол',
                //                 comment: { title: 'Комментарий', desc: 'Этот комментарий очень важен. Прям настолько важен, что мне надо его растянуть на две или три строки. От так от.' },
                //                 // images: [
                //                 //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                 //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                 //     'https://i.postimg.cc/Rh5Jd1VL/770f63bd3ec58dca14d9c0e9253175d07007ef01.jpg',
                //                 // ],
                //             }
                //         ]
                //     }
                // ],
            },
        }
    }
    const styles = fs.readFileSync('styles.css', 'utf-8');
    res.render('template', { styles, data });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});

// ejs.renderFile(templatePath, data, (err, html) => {
//     if (err) throw err;
//     fs.writeFileSync('output-html.html', html);
//     console.log('HTML создан!');
// });
