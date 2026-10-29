/**
 * ====================================================================
 *  SORRY MESSAGE WEBSITE - INTERACTION & EXPERIENCE LOGIC
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initContent();
    initEnvelope();
    initTheme();
    initAmbientAudio();
    initPetalCanvas();
});

/* --------------------------------------------------------------------
 * 1. Initialize Content from config.js
 * -------------------------------------------------------------------- */
function initContent() {
    if (typeof CONFIG === "undefined") {
        console.warn("CONFIG object not found.");
        return;
    }

    // Envelope Screen
    const envRecipient = document.getElementById("env-recipient-title");
    if (envRecipient) {
        envRecipient.textContent = `For ${CONFIG.recipientName}`;
    }

    const envSubtitle = document.getElementById("env-subtitle");
    if (envSubtitle && CONFIG.envelopeSubtitle) {
        envSubtitle.textContent = CONFIG.envelopeSubtitle;
    }

    const openBtnText = document.querySelector("#open-letter-cta span");
    if (openBtnText && CONFIG.envelopeButtonText) {
        openBtnText.textContent = CONFIG.envelopeButtonText;
    }

    // Letter Header
    const letterDate = document.getElementById("letter-date");
    if (letterDate && CONFIG.date) letterDate.textContent = CONFIG.date;

    const letterHeadline = document.getElementById("letter-headline");
    if (letterHeadline && CONFIG.letterHeadline) letterHeadline.textContent = CONFIG.letterHeadline;

    const letterOpening = document.getElementById("letter-opening");
    if (letterOpening && CONFIG.letterOpening) letterOpening.textContent = CONFIG.letterOpening;

    // Letter Body
    const letterParagraphs = document.getElementById("letter-paragraphs");
    if (letterParagraphs && Array.isArray(CONFIG.letterBody)) {
        letterParagraphs.innerHTML = "";
        CONFIG.letterBody.forEach(pText => {
            const p = document.createElement("p");
            p.textContent = pText;
            letterParagraphs.appendChild(p);
        });
    }

    // Letter Footer
    const letterClosing = document.getElementById("letter-closing");
    if (letterClosing && CONFIG.letterClosing) letterClosing.textContent = CONFIG.letterClosing;

    const letterSignature = document.getElementById("letter-signature");
    if (letterSignature && CONFIG.senderName) letterSignature.textContent = CONFIG.senderName;

    // Section 2: Promises
    const promisesGrid = document.getElementById("promises-grid");
    if (promisesGrid && Array.isArray(CONFIG.promises)) {
        promisesGrid.innerHTML = "";
        CONFIG.promises.forEach(item => {
            const card = document.createElement("div");
            card.className = "promise-card";
            card.innerHTML = `
                <div class="promise-icon">${item.icon}</div>
                <h3 class="promise-title">${item.title}</h3>
                <p class="promise-desc">${item.description}</p>
            `;
            promisesGrid.appendChild(card);
        });
    }

    // Section 3: Memories
    const memoriesGrid = document.getElementById("memories-grid");
    if (memoriesGrid && Array.isArray(CONFIG.memories)) {
        memoriesGrid.innerHTML = "";
        CONFIG.memories.forEach(item => {
            const card = document.createElement("div");
            card.className = "memory-card";
            card.innerHTML = `
                <div class="memory-tag"><span>✨</span> ${item.tag}</div>
                <p class="memory-text">"${item.text}"</p>
            `;
            memoriesGrid.appendChild(card);
        });
    }

    // Section 4: WhatsApp-Integrated Response Options
    const respHeadline = document.getElementById("response-headline");
    if (respHeadline && CONFIG.responseSection?.headline) {
        respHeadline.textContent = CONFIG.responseSection.headline;
    }

    const respSubtext = document.getElementById("response-subtext");
    if (respSubtext && CONFIG.responseSection?.subtext) {
        respSubtext.textContent = CONFIG.responseSection.subtext;
    }

    const responseButtons = document.getElementById("response-buttons");
    const feedbackAlert = document.getElementById("feedback-alert");
    const feedbackAlertText = document.getElementById("feedback-alert-text");

    const phone = CONFIG.whatsappNumber || "918299653531";

    if (responseButtons && Array.isArray(CONFIG.responseSection?.options)) {
        responseButtons.innerHTML = "";
        CONFIG.responseSection.options.forEach((opt) => {
            // Use <a> tag so mobile browsers open WhatsApp without popup blockers
            const link = document.createElement("a");
            link.className = "resp-btn";
            link.textContent = opt.label;
            
            const msg = encodeURIComponent(opt.whatsappText || opt.label);
            link.href = `https://wa.me/${phone}?text=${msg}`;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            link.addEventListener("click", () => {
                responseButtons.querySelectorAll(".resp-btn").forEach(b => b.classList.remove("active"));
                link.classList.add("active");

                if (feedbackAlert && feedbackAlertText) {
                    feedbackAlertText.textContent = opt.responseMessage || "Redirecting to WhatsApp...";
                    feedbackAlert.classList.remove("hidden");
                }
            });

            responseButtons.appendChild(link);
        });
    }

    // Direct Contact Button (WhatsApp)
    const directContactWrap = document.getElementById("direct-contact-wrap");
    const directContactBtn = document.getElementById("direct-contact-btn");
    if (directContactBtn) {
        const defaultMsg = encodeURIComponent(CONFIG.contactButton?.defaultMessage || "Hi Rajiv");
        directContactBtn.href = `https://wa.me/${phone}?text=${defaultMsg}`;
        if (CONFIG.contactButton?.text) {
            const span = directContactBtn.querySelector("span");
            if (span) span.textContent = CONFIG.contactButton.text;
        }
    }
}

/* --------------------------------------------------------------------
 * 2. Envelope Opening Animation
 * -------------------------------------------------------------------- */
function initEnvelope() {
    const envelope = document.getElementById("envelope-box");
    const waxSeal = document.getElementById("open-envelope-btn");
    const openCta = document.getElementById("open-letter-cta");
    const envelopeScreen = document.getElementById("envelope-screen");
    const letterScreen = document.getElementById("letter-screen");

    function openEnvelope() {
        if (!envelope || envelope.classList.contains("opened")) return;

        envelope.classList.add("opened");

        if (window.ambientAudio && !window.ambientAudio.isPlaying) {
            window.ambientAudio.start();
        }

        setTimeout(() => {
            envelopeScreen.classList.add("fade-out");
            setTimeout(() => {
                envelopeScreen.style.display = "none";
                letterScreen.classList.remove("hidden");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 700);
        }, 900);
    }

    if (waxSeal) waxSeal.addEventListener("click", openEnvelope);
    if (openCta) openCta.addEventListener("click", openEnvelope);
    if (envelope) envelope.addEventListener("click", openEnvelope);
}

/* --------------------------------------------------------------------
 * 3. Theme Toggle (Dusk / Romantic Light Mode)
 * -------------------------------------------------------------------- */
function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const savedTheme = localStorage.getItem("sorry_site_theme");

    if (savedTheme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        if (themeIcon) themeIcon.textContent = "🌙";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme");
            if (current === "light") {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("sorry_site_theme", "dark");
                if (themeIcon) themeIcon.textContent = "✨";
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("sorry_site_theme", "light");
                if (themeIcon) themeIcon.textContent = "🌙";
            }
        });
    }
}

/* --------------------------------------------------------------------
 * 4. Ambient Audio (Synthesized Gentle Harp/Chords)
 * -------------------------------------------------------------------- */
function initAmbientAudio() {
    const audioToggle = document.getElementById("audio-toggle");
    const audioIcon = document.getElementById("audio-icon");

    let isPlaying = false;
    let audioContext = null;
    let chordInterval = null;
    let customAudioEl = null;

    if (CONFIG && CONFIG.customAudioUrl) {
        customAudioEl = new Audio(CONFIG.customAudioUrl);
        customAudioEl.loop = true;
    }

    const chordProgressions = [
        [220.00, 277.18, 329.63, 440.00, 554.37], // A / C# / E / A / C#
        [196.00, 246.94, 293.66, 392.00, 493.88], // G / B / D / G / B
        [146.83, 220.00, 293.66, 369.99, 440.00], // D / A / D / F# / A
        [164.81, 246.94, 329.63, 392.00, 493.88]  // E / B / E / G / B
    ];
    let currentChordIndex = 0;

    function playSynthesizedChime(freq, delaySeconds = 0) {
        if (!audioContext) return;
        const now = audioContext.currentTime + delaySeconds;

        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(800, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.04, now + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + 3.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(now);
        osc.stop(now + 3.6);
    }

    function playNextChord() {
        if (!isPlaying || !audioContext) return;
        const chord = chordProgressions[currentChordIndex];
        currentChordIndex = (currentChordIndex + 1) % chordProgressions.length;

        chord.forEach((freq, idx) => {
            playSynthesizedChime(freq, idx * 0.28);
        });
    }

    function startAudio() {
        if (customAudioEl) {
            customAudioEl.play().then(() => {
                isPlaying = true;
                updateButtonState(true);
            }).catch(e => console.log("Audio play blocked", e));
            return;
        }

        if (!audioContext) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) audioContext = new AudioCtx();
        }

        if (audioContext && audioContext.state === "suspended") {
            audioContext.resume();
        }

        if (audioContext) {
            isPlaying = true;
            playNextChord();
            chordInterval = setInterval(playNextChord, 4200);
            updateButtonState(true);
        }
    }

    function stopAudio() {
        isPlaying = false;
        if (customAudioEl) {
            customAudioEl.pause();
        }
        if (chordInterval) {
            clearInterval(chordInterval);
            chordInterval = null;
        }
        updateButtonState(false);
    }

    function updateButtonState(playing) {
        if (!audioToggle) return;
        if (playing) {
            audioToggle.classList.add("playing");
            if (audioIcon) audioIcon.textContent = "🔊";
        } else {
            audioToggle.classList.remove("playing");
            if (audioIcon) audioIcon.textContent = "🎵";
        }
    }

    if (audioToggle) {
        audioToggle.addEventListener("click", () => {
            if (isPlaying) {
                stopAudio();
            } else {
                startAudio();
            }
        });
    }

    window.ambientAudio = {
        start: startAudio,
        stop: stopAudio,
        get isPlaying() { return isPlaying; }
    };
}

/* --------------------------------------------------------------------
 * 5. Floating Petals & Light Dust Canvas
 * -------------------------------------------------------------------- */
function initPetalCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    class Petal {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : -20;
            this.size = Math.random() * 8 + 6;
            this.speedY = Math.random() * 0.9 + 0.4;
            this.speedX = Math.random() * 0.6 - 0.3;
            this.angle = Math.random() * Math.PI * 2;
            this.spin = (Math.random() - 0.5) * 0.02;
            this.oscillationSpeed = Math.random() * 0.02 + 0.01;
            this.oscillationDist = Math.random() * 30 + 10;
            this.initialX = this.x;
            this.timer = Math.random() * 100;
            this.opacity = Math.random() * 0.45 + 0.25;
            this.hue = Math.random() > 0.6 ? 345 : 355;
        }

        update() {
            this.timer += this.oscillationSpeed;
            this.y += this.speedY;
            this.x = this.initialX + Math.sin(this.timer) * this.oscillationDist;
            this.angle += this.spin;

            if (this.y > height + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 80%, 82%, ${this.opacity})`;
            ctx.fill();
            ctx.restore();
        }
    }

    class Dust {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + 10;
            this.size = Math.random() * 2 + 1;
            this.speedY = -(Math.random() * 0.3 + 0.1);
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.y += this.speedY;
            if (this.y < -10) this.reset();
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 230, 220, ${this.opacity})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(242, 139, 159, 0.6)";
            ctx.fill();
        }
    }

    const petals = Array.from({ length: 28 }, () => new Petal());
    const dustParticles = Array.from({ length: 35 }, () => new Dust());

    function animate() {
        ctx.clearRect(0, 0, width, height);

        dustParticles.forEach(d => {
            d.update();
            d.draw();
        });

        petals.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
