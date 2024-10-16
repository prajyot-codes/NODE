const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        // Writing to the file with a callback to handle completion or errors
        writeFile('./content/result-async.txt', `\nHere is the result: ${first}, ${second}\n`, { flag: 'a' }, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File written successfully.');
        });
    });
});
`