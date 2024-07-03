const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = 'your api key';
const getApiData = async () => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc1037af1e2d45e28f055d296531586e&apikey=${API_KEY}`)
                    .then(function(response) {
                    console.log(response.data.articles);
                    return response.data.articles;
                   });
}

app.get('/', async (request, response) => {
    // const data = [
    //     {
    //         title: 'title111',
    //         author: 'author111',
    //         publishedAt: '2024-07-03 15:56:33',
    //         url: 'http://www.naver.com'
    //     },
    //     {
    //         title: 'title222',
    //         author: 'author222',
    //         publishedAt: '2024-07-03 15:56:33',
    //         url: 'http://www.daum.net'
    //     },
    //     {
    //         title: 'title333',
    //         author: 'author333',
    //         publishedAt: '2024-07-03 15:56:33',
    //         url: 'http://www.kakao.com'
    //     }
    // ];

    const data = await getApiData();
    let html = `
        <html>
        <body>
        <div id='wrapper'>
    `;

    data.forEach(d => {
        html += `
        <p>뉴스데이터 제목(title): ${d.title}</p>
        <p>뉴스데이터 작성자(author): ${d.author}</p>
        <p>뉴스데이터 작성일(publishedAt): ${d.publishedAt}</p>
        <a href='${d.url}'>뉴스데이터url(url)</a>
        <hr/>
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
