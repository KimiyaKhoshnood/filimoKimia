/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      IranSans: ["IRANSans"],
    },
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1056px",
      'xl': "1280px",
      '2xl': "1440px",
    },
    backgroundImage: {
      'hero1': "url('/media/bgPicHeaderMainTwoPeople.webp')",
      'hero2': "url('/media/bgPicHeaderMain2.webp')",
      'hero3': "url('/media/bgPicHeaderMain3.webp')",
      'hero4': "url('/media/bgPicHeaderMain4.webp')",
      'hero5': "url('/media/bgPicHeaderMain5.webp')",
      'hero6': "url('/media/bgPicHeaderMain6.webp')",

      'popFilmAbout1': "url('/media/popFilmAbout1.webp')",
      'popFilmAbout2': "url('/media/popFilmAbout2.webp')",
      'popFilmAbout3': "url('/media/popFilmAbout3.webp')",
      'popFilmAbout4': "url('/media/popFilmAbout4.webp')",
      'popFilmAbout5': "url('/media/popFilmAbout5.webp')",
      'popFilmAbout6': "url('/media/popFilmAbout6.webp')",

      'popImageAbout1': "url('/media/popImageAbout1.webp')",
      'popImageAbout2': "url('/media/popImageAbout2.webp')",
      'popImageAbout3': "url('/media/popImageAbout3.webp')",
      'popImageAbout4': "url('/media/popImageAbout4.webp')",
      'popImageAbout5': "url('/media/popImageAbout5.webp')",
      'popImageAbout6': "url('/media/popImageAbout6.webp')",

      'mobilebgColor': "url('/media/mobilebgColor.webp')"
    }
  },
  plugins: [],
};
