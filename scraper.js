const axios = require('axios');
const { parse } = require('node-html-parser');

// Original vanilla JS attempt
// Returns all markup from a specified URL
// const getMarkup = async (url) => {
//     const page = await axios.get(url);
//     const data = page.data;
//     console.log(data);
// };

// getMarkup('http://localhost:3000');


const getDom = async (url) => {
    const page = await axios.get(url);
    const dom = parse(page.data);
    const heading = dom.querySelector('h1');
    const content = dom.querySelectorAll('p').reduce((acc,{text})=> acc + text, '');

    // console.log(heading.text);
    console.log(content)
    
};

// 
getDom('http://localhost:3000');