
var request = require('request');
module.exports = {
    getData: async (url) => {
        return new Promise((resolve) => {
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    let data = JSON.stringify(response);
                    data = data.split('\\').join('');
                    data = data.split(',')
                    let newdata = [];
                    for (let i = 0; i < data.length; i++) {
                        if ((data[i]).length >= 15 && data[i].includes('x5d') == false && data[i].includes('Trường') == false && !isNumeric(data[i]))
                            newdata.push(data[i])
                    }
                    newdata = JSON.stringify(newdata).split('x22');
                    let finalData = [];
                    for (let i = 1; i < newdata.length; i++) {
                        if ((newdata[i]).length >= 15 && !isNumeric(newdata[i]) && (newdata[i]).length <= 100)
                            finalData.push(newdata[i])
                    }
                    resolve(finalData);
                }
            })
        }).then((result) => { return result })
    }
};
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
