
process.env.USERPSQL = 'webnc01';
process.env.HOSTSQL = '103.88.122.57';
process.env.DATABASESQL = 'webncdb';
process.env.PASSWORDSQL = 'Adfsnfslne#2234dcdcbjj#';
process.env.PORTSQL = 3306;
var productModel = require('../models/product.model');
var driveService = require('../services/drive.service');
let videoModel = require('../models/video.model');
(async () => {
    let products = await productModel.findAll();
    //code crawl chưa tốt :)))
    for (let i = 0; i < 3; i++) {
        console.log(products[i].url_driver);
        let videos = await driveService.getData(products[i].url_driver);
        let entityVideo = {};
        for (let j = 0; j < videos.length; j++) {
            if (j % 2 == 0) entityVideo.url = `https://drive.google.com/file/d/${videos[j]}`;
            if (j % 2 != 0) {
                videos[j] = videos[j].split('.mp4').join('');
                videos[j] = videos[j].split('.flv').join('');
                entityVideo.name = videos[j];
                entityVideo.product_id = products[i]._id;
                console.log(entityVideo);
                await videoModel.save(entityVideo);
            }

        }
    }

    for (let i = 3; i < 9; i++) {
        console.log(products[i].url_driver);
        let videos = await driveService.getData(products[i].url_driver);
        console.log(i);
        let entityVideo = {};
        for (let j = 0; j < videos.length; j++) {
            if (videos[j].length == 33) {
                if (!videos[j + 1].includes('.pdf') && !videos[j + 1].includes('.jpg') && !videos[j + 1].includes('.doc')) {
                    entityVideo.url = `https://drive.google.com/file/d/${videos[j]}`;
                    videos[j + 1] = videos[j + 1].split('.mp4').join(' ');
                    videos[j + 1] = videos[j + 1].split('.flv').join(' ');
                    videos[j + 1] = videos[j + 1].split('-').join(' ');
                    entityVideo.name = videos[j + 1];
                    entityVideo.product_id = products[i]._id;
                    await videoModel.save(entityVideo);
                }

            }

        }
    }

    for (let i = 9; i < 11; i++) {
        console.log(products[i].url_driver);
        let videos = await driveService.getData(products[i].url_driver);
        console.log(videos);
        for (let j = 0; j < videos.length; j++) {
            let entityVideo = {};
            entityVideo.product_id = products[i]._id;
            entityVideo.name = `Bài ${j}`
            entityVideo.url = `https://drive.google.com/file/d/${videos[j]}`;
            await videoModel.save(entityVideo);
        }
    }

    for (let i = 22; i < products.length; i++) {
        console.log(i);
        console.log(products[i].url_driver);
        let videos = await driveService.getData(products[i].url_driver);
        for (let j = 0; j < videos.length; j++) {
            let entityVideo = {};
            entityVideo.product_id = products[i]._id;
            entityVideo.name = `Bài ${j}`
            entityVideo.url = `https://drive.google.com/file/d/${videos[j]}`;
            await videoModel.save(entityVideo);
        }
    }
    //doing 11 => 21;
    let k = 1;
    for (let i = 11; i < 21; i++) {
        console.log(i);
        console.log(products[i].url_driver);
        let videos = await driveService.getData(products[i].url_driver);
        console.log(videos);
        let entityVideo = {};
        for (let j = 0; j < videos.length; j++) {
            if (videos[j].length == 33) {
                if (!videos[j + 1].includes('.pdf') && !videos[j + 1].includes('.jpg') && !videos[j + 1].includes('.doc')) {
                    entityVideo.url = `https://drive.google.com/file/d/${videos[j]}`;
                    videos[j + 1] = videos[j + 1].split('.mp4').join(' ');
                    videos[j + 1] = videos[j + 1].split('.flv').join(' ');
                    videos[j + 1] = videos[j + 1].split('-').join(' ');
                    entityVideo.name = videos[j + 1];
                    k++;
                    entityVideo.product_id = products[i]._id;
                    await videoModel.save(entityVideo);
                }
            }

        }
        k = 1;
    }

})()