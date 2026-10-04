# Fitness Check-in

[Website öffnen](https://luxmarius.github.io/fitness-checkin-vorlage/)

Nachbau der bereitgestellten Check-in-Ansicht als responsive Website.

- Hintergrundmuster und Profilfoto aus der Vorlage
- Rotierende gestrichelte Linie um das Profilfoto
- Aktuelle Uhrzeit in der Zeitzone Europe/Berlin
- Check-in-Datum und -Uhrzeit werden beim Öffnen gesetzt
- Laufender Zähler; ein Klick auf das Symbol oben rechts setzt ausschließlich die Dauer zurück

## Bearbeiten

Die komplette Website liegt im Ordner `dist`:

- `index.html`: Inhalt und Struktur
- `style.css`: Gestaltung und Animation
- `app.js`: Uhrzeit und Zähler
- `assets/reference.jpg`: bereitgestellte Bildvorlage

Es ist kein Build-Schritt erforderlich. Für eine lokale Vorschau:

```sh
python3 -m http.server 4173 --directory dist
```

Danach `http://localhost:4173` öffnen.

## Veröffentlichen

Änderungen auf `main` werden automatisch mit dem Workflow `.github/workflows/pages.yml` auf GitHub Pages veröffentlicht. In den Repository-Einstellungen unter **Pages → Build and deployment** ist **GitHub Actions** als Quelle eingerichtet.

Die Datei `.openai/hosting.json` enthält die Zuordnung zur ursprünglichen Sites-Version. GitHub Pages veröffentlicht ausschließlich den Inhalt von `dist`.
