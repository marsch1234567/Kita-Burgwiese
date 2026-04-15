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
    {
        titel: "Fußballtrikots im Anflug!",
        beschreibung: "Große Ereignisse werfen ihre Schatten voraus – oder in diesem Fall: ihre Trikots! Wir freuen uns riesig, ankündigen zu dürfen, dass die Kids der Kindertagesstätte Burgwiese  bald in neuem Glanz auf dem Spielfeld stehen werden.Dank der großzügigen Unterstützung vom Ambulanten Pflegedienst BAERenstark  sind die neuen Fußballtrikots bereits auf dem Weg zu uns. Die Vorfreude im Team ist riesig, und wir können es kaum erwarten, die kleinen Nachwuchskicker in ihrem neuen Outfit von JAKO  flitzen zu sehen.Ein herzliches Dankeschön an das Team von BAERenstark, das dieses Projekt möglich gemacht hat! Wir halten euch auf dem Laufenden, sobald die Trikots gelandet sind und das erste Training darin startet.Bleibt sportlich!",
        bild: "Bilder/Trikots.png"
    },
    // Wenn 
    
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
