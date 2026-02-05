/**
 * Be&Go Portal - Renderer Process
 */

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const quickCards = document.querySelectorAll('.quick-card');
    const welcomeScreen = document.getElementById('welcome-screen');
    const webviewContainer = document.getElementById('webview-container');
    const fiberyView = document.getElementById('fibery-view');
    const loadingOverlay = document.getElementById('loading-overlay');
    const navBrand = document.querySelector('.nav-brand');

    let currentUrl = null;
    let isLoading = false;

    // Set normal zoom level
    fiberyView.addEventListener('dom-ready', () => {
        fiberyView.setZoomLevel(0);
    });

    function loadUrl(url) {
        if (url === currentUrl) return;
        currentUrl = url;
        isLoading = true;

        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.url === url && !btn.classList.contains('accent') && !btn.classList.contains('accent-warning')) {
                btn.classList.add('active');
            }
        });

        loadingOverlay.classList.add('active');
        welcomeScreen.classList.add('hidden');
        webviewContainer.classList.add('active');
        fiberyView.src = url;
    }

    function goHome() {
        currentUrl = null;
        fiberyView.src = 'about:blank';
        welcomeScreen.classList.remove('hidden');
        webviewContainer.classList.remove('active');
        navButtons.forEach(btn => btn.classList.remove('active'));
        loadingOverlay.classList.remove('active');
    }

    // Initialize: Show tutorial
    goHome();

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.dataset.url;
            if (url) loadUrl(url);
        });
    });

    quickCards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.dataset.url;
            if (url) loadUrl(url);
        });
    });

    navBrand.addEventListener('click', goHome);

    fiberyView.addEventListener('did-stop-loading', () => {
        if (isLoading) {
            loadingOverlay.classList.remove('active');
            isLoading = false;
        }
    });

    fiberyView.addEventListener('did-fail-load', (event) => {
        if (event.errorCode !== -3) {
            console.error('Failed to load:', event);
            loadingOverlay.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && currentUrl) {
            goHome();
        }
        if ((e.ctrlKey && e.key === 'r') || e.key === 'F5') {
            e.preventDefault();
            if (currentUrl) fiberyView.reload();
        }
    });

    console.log('Be&Go Portal initialized');
});
