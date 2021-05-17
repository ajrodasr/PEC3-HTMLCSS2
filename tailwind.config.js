module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.scss',
    './src/**/*.css',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#873535',
        'primary-bg': '#e4baba',
        secondary: '#000',
        white: '#fff',
        'white-hover': '#ffffffc9',
        'white-poster': 'rgb(255 255 255 / 10%)',
      },
      backgroundImage: (theme) => ({
        'portada-poster': "url('../images/portada/poster.jpg')",
        members: "url('../images/portada/members.jpg')",
        bio: "url('../images/portada/bio.jpg')",
        contact: "url('../images/portada/contacto.jpg')",
      }),
      boxShadow: {
        'poster-top': '2px 2px 2px black',
        'poster-bottom-right': '-2px -2px 2px black',
        'poster-bottom-left': '2px 0px 2px black',
        'button-hover': '2px 4px 6px black',
      },
      lineHeight: {
        100: '100px',
      },
      flex: {
        3: '1 0 30%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
