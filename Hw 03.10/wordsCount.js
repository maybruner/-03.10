const fs = require ('fs');
function countwordsinfile() {
 const filepath = './example.TXT'; 
 fs.readFile(filepath, 'utf8' , (err, data) => {
    if (err) {
        console.error('Error reading file', err);
        return;
    }
    const wordsArray = data.trim().split(/\s+/);
    const wordsCount = wordsArray.length;
    console.log('Words amount on this file=', wordsCount)
 });
}
countwordsinfile();
