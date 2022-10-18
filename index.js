/* To make it work make sure NPM is installed and run the following command in the terminal:
npm init (It will create a package.json file)
npm i Cheerio
npm i axios
npm i nodemon
npm is a package manager for Node.js packages, or modules if you like. A package in npm is a piece of code that someone else wrote that can be used in your application. To download and install a package, you use the npm install command in your terminal. */
/*Node also need to be installed.*/

const  PORT = 3000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()

const url = 'https://www.geo.tv/'

axios(url)  /* Get the HTML from the URL */
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)  /* Load the HTML into cheerio (Certain part of the website*/
    const articles = []
    $('.heading', html).each(function() {
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title,
            url
        })
    })
    console.log(articles)
}).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT ${PORT}'))