// const jwt = require('jsonwebtoken')
// const fs = require('fs')

// const privateKey = fs.readFileSync('private.key')
// // const publicKey = fs.readFileSync('public.key')


// module.exports = {
//     createToken: request => {
//         const options = {
//             issuer: "PR24",
//             subject: "someuser",
//             audience: "https://dummy.com",
//             algorithm: "RS256"
//         }
//         const token = jwt.sign(request.data, privateKey, options);
//         return token;
//     }

// }