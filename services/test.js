var otpGenerator = require('otp-generator')

let a = otpGenerator.generate(6, { alphabets: true });

console.log(a);