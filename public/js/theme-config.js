// public/js/theme-config.js
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#2a6d74",
                "primary-dark": "#1f5257",
                "accent": "#4DB6AC",
                "accent-light": "#E0F2F1",
                "background-light": "#f6f7f8",
                "background-dark": "#141d1e",
                "card-light": "#ffffff",
                "card-dark": "#1e292b",
                "text-primary": "#111818",
                "text-secondary": "#5d8489",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0,0,0,0.05)',
                'glow': '0 0 15px rgba(42, 109, 116, 0.15)',
            }
        },
    },
}