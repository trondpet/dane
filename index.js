#!/usr/bin/env node
const https = require('https');

const handleResponse = (resp) => {
    let data = '';
    resp.on('data', chunk => data += chunk);
    
    resp.on('end', () => {
        const parsed = JSON.parse(data);
        console.log(parsed.quote);
    });
}

const req = https.get('https://seinfeld-quotes.herokuapp.com/random', handleResponse);
req.on('error', err => console.log(`Error: ${err.message}`));