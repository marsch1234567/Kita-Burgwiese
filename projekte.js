// Hier kannst du einfach neue Projekte hinzufügen oder ändern
const projekteDaten = [
    {
        titel: "Tonwanne",
        beschreibung: "Haptisches Erleben und kreatives Gestalten fördern.",
        bild: "tonwanne.png"
    },
    {
        titel: "KiTa Cup 2026",
        beschreibung: "Das Training läuft – wir sind voller Vorfreude dabei!",
        bild: "fussball.png"
    },
    {
        titel: "Zukunft gestalten",
        beschreibung: "Gemeinsam den Kita-Alltag moderner und bunter machen.",
        bild: "2.jpeg"
    },
    // Wenn du ein neues Projekt willst, kopiere einfach die Zeilen oben 
    // und füge sie hier untereinander ein.
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