/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
      colors: {
        interface: {
          50: '#16213B',
          100: "#04091E",
          200: "#747681",
          300: "#F4F8F7",
          400: "#F5F5F5",
          500: "#272931",
          600: "#091530",
          700: "#111111",
          800: "#1A253F",
        },
        pblue: {
          100: "#EAF0FF",
          200: "#EEF3FF",
          300: "#F4F8FA",
          500: "#2662FA",
          600: "#0438BC",
        },
        sky: {
          500: "#D8F9FF"
        },
        porange: {
          500: "#FFD233",
          600: "#ffb711",
          700: "#FDCC04",
          800: "#d6ac04",
          900: "#E3B602",

        },
        seagreen: {
          100: "#E8FAF3",
          500: "#47D990"
        },
        pyellow: { 500: '#FEEE80' },
        new: {
          500: '#DAED1A',
          600: '#C7D911'
        },
        strawberry: {
          500: '#FF3F00',
          600: '#E33800'
        },
        fpink: {
          500: "#F50963"
        },
        dteal: {
          500: "#008080"
        },
        borderl: {
          500: "#F4F4F4"
        },
        pdark: {
          500: '#090E22'
        },
        pcolor: {
          500: '#7E8BA0'
        },
        owhite: {
          100: '#ECEAFF'
        }

      },

      padding: {
        '120': '120px'
      },
      borderRadius: {
        custom: '10px'
      },
      boxShadow: {
        custom: '5px 6px 60px rgba(17, 29, 59, 0.04);',
        customTwo: '0px 25px 60px rgba(0, 65, 113, 0.05);',
        customThree: '0px 10px 50px rgba(29, 29, 29, 0.05);',
        customFour: '0px 9px 126px rgba(20, 0, 255, 0.06);',
        customFive: '0px 30px 50px rgba(14, 23, 57, 0.04);'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'),],
}
