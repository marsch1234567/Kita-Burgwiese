// Hier kannst du einfach neue Projekte hinzufügen oder ändern
const projekteDaten = [
    {
        titel: "Tonwanne",
        beschreibung: "Haptisches Erleben und kreatives Gestalten fördern.",
        bild: "images/tonwanne.png"
    },
    {
        titel: "KiTa Cup 2026",
        beschreibung: "Das Training läuft – wir sind voller Vorfreude dabei!",
        bild: "images/fussball.png"
    },
    {
        titel: "Fußballtrikots im Anflug!",
        beschreibung: "Dank der großzügigen Unterstützung vom Ambulanten Pflegedienst BAERenstark sind die neuen Trikots von JAKO bald da!",
        bild: "images/Trikots.png"
    }
];

// Diese Funktion baut die Projekte automatisch in die Webseite ein
function ladeProjekte() {
    const grid = document.getElementById('projekte-grid');
    if (!grid) return;

    grid.innerHTML = projekteDaten.map(p => `
        <div class="card">
            <img src="${p.bild}" onclick="openLightbox(this.src)" alt="${p.titel}">
            <h3>${p.titel}</h3>
            <p>${p.beschreibung}</p>
        </div>
    `).join('');
}

// Ausführen, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', ladeProjekte);
