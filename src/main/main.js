const { app, BrowserWindow } = require("electron");

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 800,

        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    window.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});