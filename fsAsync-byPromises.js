// const { log } = require('console');
const { readFile,writeFile } = require('fs').promises;
// const util=require('util')

// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };
// const

// Using the getText function
// getText('./content/first.txt')
//     .then((result) => {
//         log(result);  // You can also use console.log(result);
//     })
//     .catch((err) => {
//         log(err);
//     });

const start = async () => {
    try {
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        await writeFile('./content/result-async.txt',`This is awesome ${first} and ${second}`,{flag:'a'})
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}
start()