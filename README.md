# 🤍 Sincere Apology Letter Website

A self-hosted, interactive apology website crafted with genuine remorse, tenderness, and respect. It features an interactive envelope opening, soft floating sakura petals and starlight particles, dreamlike ambient music (synthesized, offline-ready), responsive design, and customizable reflection sections.

---

## 📁 Project Structure

```text
sorry-website/
├── index.html        # Main page structure & UI
├── style.css         # Romantic dusk/light theme, glassmorphism, animations
├── app.js           # Envelope opening, synthesized chords audio, petal physics
├── config.js         # ⭐ EDIT THIS to customize her name, your letter & memories!
├── serve.py          # Instant Python server for local testing & hosting
├── Dockerfile        # Container image using Alpine Nginx
└── docker-compose.yml# 1-command container deployment
```

---

## ✍️ How to Personalize (1 Minute)

Open `config.js` in any text editor. Everything is clearly labeled:

1. **`recipientName`**: Change to her name or nickname (e.g. `"Maya"`, `"Aisha"`, etc.).
2. **`senderName`**: Put your name (e.g. `"Rajiv"`).
3. **`letterHeadline` & `letterBody`**: Write from your heart. Mention what you realized and take full accountability for your actions.
4. **`promises`**: Add your sincere commitments to do better.
5. **`memories`**: Add special moments or qualities you love and cherish about her.
6. **`contactButton`**: If you want to link directly to WhatsApp or SMS, set `link: "https://wa.me/YOUR_PHONE_NUMBER"` or leave `#`.

---

## 🚀 How to Run & Self-Host

### Option 1: Instant Local Preview (Python 3)
Run in your terminal:
```bash
python3 serve.py
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Option 2: Docker / Docker Compose (Self-Hosting on VPS)
If you have a Linux VPS (DigitalOcean, Hetzner, AWS, etc.):
```bash
docker compose up -d --build
```
Your website will be live on port `8080` (or proxy through Nginx/Caddy for SSL `https://`).

### Option 3: Free 1-Click Hosting (Cloudflare Pages / Vercel / GitHub Pages)
Because this project is built with clean static HTML/CSS/JS with zero external build steps, you can deploy it instantly:
- **Cloudflare Pages**: Link your repository or upload the folder for a free `*.pages.dev` HTTPS link.
- **Vercel / Netlify**: Drag-and-drop the `sorry-website` folder directly into the Netlify dashboard for an instant public URL.
- **GitHub Pages**: Push this directory to a GitHub repo, go to `Settings > Pages`, and select `main` branch.

---

## ✨ Features Included
- 💌 **Gentle Wax-Sealed Envelope**: Opens with smooth 3D CSS transition when clicked.
- 🌸 **Ambient Floating Petals & Light Dust**: Soft drifting particles on canvas.
- 🎶 **Zero-Dependency Synthesized Music Box**: Built-in soothing ambient chords using the Web Audio API (works offline, no mp3 file needed; supports custom mp3 if preferred).
- 🕊️ **Zero-Pressure Response Actions**: Interactive gentle reply choices that acknowledge her space and feelings first.
- 🌓 **Theme Toggle**: Romantic Dusk mode (default) and Soft Blush light mode.
- 📱 **100% Mobile Responsive**: Perfectly tailored for viewing on mobile devices.

