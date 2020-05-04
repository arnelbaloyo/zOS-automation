#! /bin/env node
import * as fs from "fs";
  
const https = require('https');
let data = '';
const options = {
  hostname: 'ipo2',
  port: 3880,
  path: '/zos-account-balances-api/v1/PCIB/156873764',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic SVM0MjY6YWNiMDUyMA=='
  }
}
 
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
 
  res.on('data', (chunk: any) => {
    data += chunk;
   });
 
  res.on('end', () => {
    var getBalanceData = JSON.parse(data);   
    console.log(data);
    fs.writeFileSync("./output/balances.txt", JSON.stringify(getBalanceData,null,4));
  });
 
})
 
req.on('error', error => {
  console.error(error)
})
 
req.end()