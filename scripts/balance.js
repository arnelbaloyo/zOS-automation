#! /bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var https = require('https');
var data = '';
var options = {
    hostname: 'ipo2',
    port: 3880,
    path: '/zos-account-balances-api/v1/PCIB/156873764',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic SVM0MjY6YWNiMDUyMA=='
    }
};
var req = https.request(options, function (res) {
    console.log("statusCode: " + res.statusCode);
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        var getBalanceData = JSON.parse(data);
        console.log(data);
        fs.writeFileSync("./output/balances.txt", JSON.stringify(getBalanceData, null, 4));
    });
});
req.on('error', function (error) {
    console.error(error);
});
req.end();
//# sourceMappingURL=balance.js.map