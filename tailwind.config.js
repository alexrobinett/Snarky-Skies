module.exports = {
  content: [
    './*.html',
    './src/**/*.js'
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myThemeLight: {
        
        "primary": "#0145A3",
        
        "secondary": "#007AFD",
        
        "accent": "#7A01FD",
        
        "neutral": "#f6fdfb",
        
        "base-100": "#fff",
        
        "info": "#5D74DA",
        
        "success": "#21cd8e",
        
        "warning": "#f3d601",
        
        "error": "#E06252",
        },
      },
      {
        dark: {
        
        "primary": "#0145A3",
        
        "secondary": "#007AFD",
        
        "accent": "#7A01FD",
        
        "neutral": "#f6fdfb",
        
        "base-100": "#111827",
        
        "info": "#5D74DA",
        
        "success": "#21cd8e",
        
        "warning": "#f3d601",
        
        "error": "#E06252",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
