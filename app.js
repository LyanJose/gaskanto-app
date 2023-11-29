document.addEventListener('DOMContentLoaded', (event) => {
    // Votre code JavaScript ici
    // Par exemple, enregistrez des données localement
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('Service Worker enregistré avec succès:', registration);
            })
            .catch((error) => {
                console.log('Erreur lors de l\'enregistrement du Service Worker:', error);
            });
    }
});