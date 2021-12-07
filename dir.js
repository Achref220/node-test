const fs = require('fs');


if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('FINISHED')
    })
}
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('REMOVED')
    })
}
