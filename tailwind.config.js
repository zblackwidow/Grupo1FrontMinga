/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins', 'sans-serif']
    },
      backgroundImage: {
        'panel': "url('./src/assets/panel.png')", // Ajusta la ruta según tu estructura
        'heroManga': "url('https://s3-alpha-sig.figma.com/img/f0d0/3e80/2ae29b0afaf84c3dc0f77973947cfb6b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z7xLs4H~YaaEC9L6FZwoaw9rAw7a9S~JMbjTSziFGEeW0dPRpKlzI7gGIap5GjTsa0gry1I4zvosWLuu32qK9aMmh91xhsTMs80~WlQ71q8TRQSK4iotLb6bpa9MhuuTKQprCpgYRDfxsVGfJZWLBSmlp6JXRz8xXoieh-ZaOFtkGOtBcA5VHnGZvGilt3o8wRd~5fDpJkMC5HdHowAsqZt1VcwR9phWkQ9k3peSkfpqv6iw31H-kxhOlEhSFHDuHiNbQShDR6pxF2Y6b3xOcH1mkdKdUB8eiKCbUbZn9Rwj4CzCSp-JtLh-bLm9URyTJnpJm5fHTWM3Vo4AupQfgg__')",
      },
  },
  plugins: [],
}
}