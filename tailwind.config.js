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
        mytheme: {
        
        "primary": "#0145A3",
        
        "secondary": "#007AFD",
        
        "accent": "#7A01FD",
        
        "neutral": "#fff",
        
        "base-100": "#fff",
        
        "info": "#5D74DA",
        
        "success": "#21cd8e",
        
        "warning": "#F9D600",
        
        "error": "#E06252",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
