const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'text.txt'), 'utf-8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'text.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'PromiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'PromiseWrite.txt'), '\n\n append text here');
        await fsPromises.rename(path.join(__dirname, 'PromiseWrite.txt'), path.join(__dirname, 'PromiseComplete.txt'), data);
        const Newdata = await fsPromises.readFile(path.join(__dirname, 'PromiseComplete.txt'), 'utf-8');
        console.log(Newdata)
    } catch (err) {
        console.error(err)
    }
};

fileOps();

// fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8' ,(err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.writeFile(path.join(__dirname, 'reply.txt'), 'this the reply testing', (err) => {
//     if (err) throw err;
//     console.log('Operation complete');

//     fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\n testing text' ,(err) => {
//         if (err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'RenameReply.txt') ,(err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//         });
//     });

// });






// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1);
// })