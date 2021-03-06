module.exports = {
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'display': ['Open Sans Condensed'],
        'body': ['Open Sans'],
      },
      colors: {
        black: '#000',
        white: '#fff',
        primary: '#19AEFF',
        default: '#B7B6B6',
        lightBlue: {
          50: '#E6F8FF',
          100: '#B8EBFF',
          200: '#8ADDFF',
          300: '#61CEFF',
          400: '#3BBFFF',
          500: '#19AEFF',
          600: '#1299DF',
          700: '#0D84BF',
          800: '#086F9F',
          900: '#055980',
        },
        blue: {
          50: '#E6F4FD',
          100: '#B8DFF8',
          200: '#8ACAF0',
          300: '#5CB3E5',
          400: '#2E9CD8',
          500: '#0084C8',
          600: '#0075B2',
          700: '#00659B',
          800: '#005584',
          900: '#00446B',
        },
        green: {
          900: '#0D665A',
          800: '#117D6F',
          700: '#179484',
          600: '#1DAA98',
          500: '#24C0AC',
          400: '#47D0BF',
          300: '#6CDECF',
          200: '#92EADF',
          100: '#BBF4ED',
          50: '#E6FCF9',
        },
        yellow: {
          900: '#806B29',
          800: '#9F8535',
          700: '#BF9F42',
          600: '#DCB84F',
          500: '#F9D15D',
          400: '#FFDC75',
          300: '#FFE590',
          200: '#FFEEAD',
          100: '#FFF5CB',
          50: '#FFFCEC',
        },
        red: {
          900: '#7F2E1C',
          800: '#9C3A25',
          700: '#B9472F',
          600: '#D65539',
          500: '#F16344',
          400: '#F97C60',
          300: '#FE967F',
          200: '#FFB2A0',
          100: '#FFCFC4',
          50: '#FFEDE9',
        },
        gray: {
          50: '#FCFCFC',
          100: '#F6F6F6',
          200: '#F1F1F1',
          300: '#EBEBEB',
          400: '#E6E6E6',
          500: '#E0E0E0',
          600: '#C4C4C4',
          700: '#A8A8A8',
          800: '#8C8C8C',
          900: '#707070',
        },
        dark: {
          900: '#061218',
          800: '#08161E',
          700: '#0A1B23',
          600: '#0C1F29',
          500: '#0E232E',
          400: '#384B55',
          300: '#63737B',
          200: '#8F9AA1',
          100: '#BAC2C6',
          50: '#E6E9EB',
        },
      },
      inset: (theme) => theme('spacing'),
    },
  },
  plugins: [],
}