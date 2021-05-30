var request = require('request');
(async () => {
    request('https://drive.google.com/drive/folders/1MtGpuPiXU-N_L7phYrOC9nNLeoiIgE5u', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          //  console.log(response);
            let data = JSON.stringify(response);
           data=data.split('\\').join('');
            data = data.split(',')
            let newdata = [];
            for (let i = 0; i < data.length; i++) {
                if ((data[i]).length >= 15 && data[i].includes('x5d') == false && data[i].includes('Trường') == false && !isNumeric(data[i]))
                    newdata.push(data[i])
            }
            newdata = JSON.stringify(newdata).split('x22');
            let finalData = [];
            for (let i = 1; i < newdata.length; i++) {
                if ((newdata[i]).length >= 15 && !isNumeric(newdata[i])&& (newdata[i]).length <= 100)
                finalData.push(newdata[i])
            }
            console.log(finalData);
        }
        else {
            console.log("Error " + response.statusCode)
        }
    })
})()

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
