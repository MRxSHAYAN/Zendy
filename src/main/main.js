const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 800,

        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    window.loadFile(
        path.join(__dirname, "../renderer/index.html")
    );
}

app.whenReady().then(createWindow);