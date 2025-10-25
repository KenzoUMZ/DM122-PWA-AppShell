const registerServiceWorker = () => {
    const success = () =>
        console.log('Service Worker registered successfully.');
    const failed = () =>
        console.log('Service Worker registration failed.');

    navigator.serviceWorker.register('./sw.js').then(success).catch(failed);
}
registerServiceWorker();