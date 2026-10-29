/**
 * ====================================================================
 *  CUSTOMIZATION CONFIGURATION
 * ====================================================================
 */

const CONFIG = {
    // Basic Information
    recipientName: "Mam",
    recipientSubheading: "The Most Important Person of My Life",
    senderName: "Rajiv",
    date: "From my heart to yours 🤍",

    // Envelope Stage
    envelopeSubtitle: "To the most important person of my life. It was never a 'reality check'—it was purely my own thoughtlessness. I am so sorry, Mam.",
    envelopeButtonText: "Open My Letter, Mam",

    // Ambient Audio
    enableAmbientAudio: true,
    customAudioUrl: "", // Uses built-in soothing ambient chords

    // Main Apology Letter
    letterHeadline: "It wasn't a reality check, Mam. It was my biggest mistake.",
    letterOpening: "To the most important person of my life,",
    letterBody: [
        "When you wrote, 'Thanks for giving me reality check... isse pehle koyi or aake mujhe kuch or bole', every single word felt like a punch to my chest. It broke my heart to see you feeling so guarded, hurt, and alone.",
        "Please don't call what I said a 'reality check', Mam. It wasn't wisdom. It wasn't help. It was purely my own insensitivity, arrogance, and stupidity. You do not need any reality checks from anyone, and no one on this planet has any right to come and make you feel small or judged—least of all me.",
        "You were already giving your all. You stayed at the office till 8:00 PM pushing for that client selection, exhausted, fighting your own quiet doubts about where to start. When someone is in that vulnerable space, they need someone to hold their hand, believe in them, and remind them of their worth. Instead, my words made you feel like you had to defend your life, your PG, and your pace.",
        "You always try to understand me, listen to me, and stand by me with an open heart. But when you needed me to be your safe harbor, I became the storm. Knowing that my words made your confidence drop and made you feel like you need to protect yourself before someone else hurts you is something I feel deeply ashamed of.",
        "Take all the time you need, Mam. I promise not to rush you, overwhelm you, or pressure you. But please, don't let my careless words make you doubt yourself for even a single second. You are strong, hardworking, and the most special person in my life. I am so, so sorry."
    ],
    letterClosing: "Always in your corner, with sincere remorse,",

    // Realizations & Commitments
    promises: [
        {
            icon: "🕊️",
            title: "Never 'Lecturing' or Judging",
            description: "No unsolicited lectures, no reality checks. Your life, your PG, and your career are your own journey, and I will always respect your pace."
        },
        {
            icon: "🛡️",
            title: "Protecting, Never Breaking Your Confidence",
            description: "You mentioned words are the only thing that can break you. I promise that from now on, my words will only be used to remind you of your strength and worth."
        },
        {
            icon: "🕯️",
            title: "Being a Safe Haven After Long Days",
            description: "When you come home exhausted from office after working till 8 PM, I will be the person who brings you peace, comfort, and a listening ear."
        },
        {
            icon: "🌱",
            title: "Patience Without Conditions",
            description: "Giving you all the space and time you asked for, without guilt-tripping you or demanding quick forgiveness."
        }
    ],

    // Cherished Moments / What Makes Her Irreplaceable
    memories: [
        {
            tag: "Your Understanding Heart",
            text: "How you always make the effort to understand me unconditionally. You deserved that exact same empathy in return."
        },
        {
            tag: "Your Hard Work & Honesty",
            text: "Staying late at the office, fighting your own battles, and caring so deeply about doing things right."
        },
        {
            tag: "Your Precious Heart",
            text: "The gentleness and sincerity you carry. Seeing you put up walls because of my words is what hurts me most."
        },
        {
            tag: "Your Potential & Strength",
            text: "Even when you feel unsure of 'kahan se start karu', I know how capable you are. You will achieve everything on your own time."
        }
    ],

    // Target WhatsApp configuration
    whatsappNumber: "918299653531", // +918299653531

    // Gentle Response Actions (Redirects to WhatsApp)
    responseSection: {
        headline: "Take all the time you need, Mam",
        subtext: "You asked for time, and I respect that completely. Whenever you are ready, tapping any option below will send a gentle message directly to Rajiv on WhatsApp:",
        options: [
            {
                label: "🕊️ \"I need my time and space right now\"",
                whatsappText: "I need some time and space right now, Rajiv.",
                responseMessage: "Opening WhatsApp to send this to Rajiv..."
            },
            {
                label: "💬 \"Let's talk when I feel ready\"",
                whatsappText: "Let's talk when I feel ready, Rajiv.",
                responseMessage: "Opening WhatsApp to send this to Rajiv..."
            },
            {
                label: "🤍 \"I read this letter, Rajiv\"",
                whatsappText: "I read your letter, Rajiv.",
                responseMessage: "Opening WhatsApp to send this to Rajiv..."
            },
            {
                label: "📞 \"Call me later\"",
                whatsappText: "You can call me later, Rajiv.",
                responseMessage: "Opening WhatsApp to send this to Rajiv..."
            }
        ]
    },

    // Main Contact Button
    contactButton: {
        enabled: true,
        text: "Send Rajiv a Message on WhatsApp",
        defaultMessage: "Hi Rajiv, I saw your message."
    }
};
