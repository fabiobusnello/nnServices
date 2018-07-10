const { execFile } = require('child_process');
const child = execFile('build.bat', (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout, stderr);
});