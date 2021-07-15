let jwt = require("./utils/jwt.util");
process.env.SECRECT_KEY = 1;
function temp() {
    return jwt.generateToken({ user_id: 1, role: 0 }, '3d');
}
console.log(temp());