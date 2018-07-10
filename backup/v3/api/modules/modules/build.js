const { execFile } = require('child_process');
const build = () => {
    return new Promise((resolve, reject) => {
        if (process.platform === "win32") {
            execFile(__dirname + '/build.bat', (err, a, b) => {
                if(err)return reject(err)
                return resolve(true)
            })
        }
        if (process.platform === 'linux') {
            execFile(__dirname + '/build.sh', (err, a, b) => {
                if(err)return reject(err)
                return resolve(true)
            })
        }
    })
}

module.exports = build