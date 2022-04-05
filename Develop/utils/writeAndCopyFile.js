const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        writeFile('./dist/README.md', fileContent, err => {
            if (err) {
            reject(err);
            return
            }
            
            resolve({
            ok: true,
            message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;