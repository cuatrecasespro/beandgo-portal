const { app, BrowserWindow, ipcMain, Menu, dialog } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

// Configuració de l'auto-updater
autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

let mainWindow;

function createMenu() {
    const template = [
        {
            label: 'Edició',
            submenu: [
                { role: 'undo', label: 'Desfer' },
                { role: 'redo', label: 'Refer' },
                { type: 'separator' },
                { role: 'cut', label: 'Retallar' },
                { role: 'copy', label: 'Copiar' },
                { role: 'paste', label: 'Enganxar' },
                { role: 'selectAll', label: 'Seleccionar-ho tot' }
            ]
        },
        {
            label: 'Visualització',
            submenu: [
                { role: 'reload', label: 'Recarregar' },
                { role: 'forceReload', label: 'Forçar recàrrega' },
                { type: 'separator' },
                { role: 'resetZoom', label: 'Restablir zoom' },
                { role: 'zoomIn', label: 'Augmentar zoom' },
                { role: 'zoomOut', label: 'Reduir zoom' },
                { type: 'separator' },
                { role: 'togglefullscreen', label: 'Pantalla completa' }
            ]
        },
        {
            label: 'Finestra',
            submenu: [
                { role: 'minimize', label: 'Minimitzar' },
                { role: 'close', label: 'Tancar' }
            ]
        },
        {
            role: 'help',
            label: 'Ajuda',
            submenu: [
                {
                    label: 'Sobre Be&Go Portal',
                    click: () => {
                        dialog.showMessageBox({
                            type: 'info',
                            title: 'Sobre Be&Go Portal',
                            message: 'Be&Go Portal Intern',
                            detail: `Versió: ${app.getVersion()}\n\nPortal intern per a la gestió de Fibery.`,
                            buttons: ['D\'acord'],
                            icon: path.join(__dirname, 'assets', 'icon.png')
                        });
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

function createWindow() {
    createMenu();
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            webviewTag: true
        },
        icon: path.join(__dirname, 'assets', 'icon.png'),
        backgroundColor: '#0f172a',
        show: false
    });

    // Load the index.html
    mainWindow.loadFile('index.html');

    // Show window when ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Open DevTools in development (optional)
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// App lifecycle
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// Lògica d'actualitzacions
autoUpdater.on('update-available', () => {
    console.log('Actualització disponible');
});

autoUpdater.on('update-downloaded', (info) => {
    dialog.showMessageBox({
        type: 'info',
        title: 'Actualització enllestida',
        message: `La versió ${info.version} s'ha descarregat i s'instal·larà en tancar l'aplicació.`,
        buttons: ['D\'acord']
    });
});

autoUpdater.on('error', (err) => {
    console.error('Error en l\'actualització:', err);
});

function checkUpdates() {
    autoUpdater.checkForUpdatesAndNotify().catch(err => {
        console.error('Error buscant actualitzacions:', err);
    });
}

app.whenReady().then(() => {
    createWindow();

    // Buscar actualitzacions en iniciar
    checkUpdates();

    // Buscar actualitzacions cada 4 hores
    setInterval(checkUpdates, 4 * 60 * 60 * 1000);
});

// Handle navigation requests from renderer
ipcMain.on('navigate-to', (event, url) => {
    // You can add additional logic here if needed
    console.log('Navigating to:', url);
});
