const fs = require('fs');

function readLogFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
            console.error("Error reading log file:", err);
            return;
        }
        if(!data){
            console.log("Log file is empty or data is not available.");
            return;
        }

        const lines = data.trim().split('\n').filter(line => line.trim() !== '');
        console.log(`Processing $ {lines.length} entries`);
        lines.forEach(line => { 
            const parts = line.trim().split(' ');
            if(parts.length < 3){
                console.error(`Invalid log entry: ${line}`);
                return;
            }
            const username = parts[0];
            const loginTime = parts[1] + ' ' + parts[2];
            console.log("Username:",username, "Login Time:", loginTime);
        });
    });
}

const logFilePath = 'logfile.log';
readLogFile(logFilePath);
