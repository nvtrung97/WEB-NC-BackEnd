const bcrypt = require('bcryptjs');
(async()=>{
    console.log(bcrypt.hashSync('1',13))
})()