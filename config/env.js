module.exports = function () {
    if(process.env.NODE_ENV == 'development'){
        process.env.URL = '';
        process.env.PORT = 3006;
        return;
    }
    if(process.env.NODE_ENV == 'testing'){
        process.env.URL = '';
        process.env.PORT = 4006;
        return;
    }
    if(process.env.NODE_ENV == 'production'){
        process.env.URL = '';
        process.env.PORT = 5006;
        return;
    }
    process.env.NODE_ENV = 'localy';
    process.env.URL = 'http://localhost:3003';
    process.env.PORT = 3006;
};  