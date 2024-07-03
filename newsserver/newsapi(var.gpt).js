const express = require('express');
const app = express();

// 퍼블리싱 작업.
app.get('/', (request, response) => {
    const data = [
        {
            title: 'title111',
            author: 'author111',
            publishedAt: '2024-07-03 15:56:33',
            url: 'http://www.naver.com'
        },
        {
            title: 'title222',
            author: 'author222',
            publishedAt: '2024-07-03 15:56:33',
            url: 'http://www.daum.net'
        },
        {
            title: 'title333',
            author: 'author333',
            publishedAt: '2024-07-03 15:56:33',
            url: 'http://www.kakao.com'
        }
    ];

    let html = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f2f5;
                    margin: 0;
                    padding: 0;
                    color: #333;
                }
                #wrapper {
                    width: 80%;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 0 20px rgba(0,0,0,0.1);
                    border-radius: 10px;
                }
                h1 {
                    text-align: center;
                    color: #4CAF50;
                }
                .card {
                    background-color: #fff;
                    padding: 20px;
                    margin: 20px 0;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    border-radius: 10px;
                    transition: transform 0.2s;
                }
                .card:hover {
                    transform: translateY(-10px);
                }
                .card p {
                    margin: 10px 0;
                }
                .card a {
                    text-decoration: none;
                    color: #3498db;
                    font-weight: bold;
                }
                .card a:hover {
                    color: #2980b9;
                    text-decoration: underline;
                }
                .title {
                    font-size: 1.2em;
                    color: #e74c3c;
                }
                .author {
                    font-size: 1em;
                    color: #2ecc71;
                }
                .publishedAt {
                    font-size: 0.9em;
                    color: #9b59b6;
                }
                .url {
                    font-size: 1em;
                    color: #3498db;
                }
            </style>
        </head>
        <body>
        <div id='wrapper'>
            <h1>뉴스 데이터</h1>
    `;

    data.forEach(d => {
        html += `
        <div class='card'>
            <p class="title"><strong>제목:</strong> ${d.title}</p>
            <p class="author"><strong>작성자:</strong> ${d.author}</p>
            <p class="publishedAt"><strong>작성일:</strong> ${d.publishedAt}</p>
            <p><a class="url" href='${d.url}'>기사 링크</a></p>
        </div>
        `;
    });

    html += `
        </div>
        </body>
        </html>
    `;

    response.send(html);
});

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
