const {createReadStream}=require('fs');
const { setDefaultHighWaterMark } = require('stream');

const stream =createReadStream('./content/big.txt',{highWaterMark:90000})

stream.on('data',(result) => {
    console.log(result);
})