/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      small : '17px',
      base: '19px',
      large : '28px',
      blockquote : '18px',
    },
    extend: {
      spacing: {
        '50' : '3.125rem', // 50px
        '65': '4.0625rem', // 65px
        '180': '11.25rem',  // 180px
        '220': '12.5rem',   // 220px
        '300': '18.75rem',   // 300px
        'rest' : 'calc(100vh - 6rem)'
      },
      fontSize: {
        'h1': '65px',
        'h2': '55px',
        'h3': '45px',
        'h4': '32px',
        'h5': '24px',
        'h6': '22px',
      },
      container: {
        center: true,
        padding: '2rem',
        important : 'true',
        screens: {
          xs: '500px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
    colors : {
      primary: '#1B3764',
      secondary: '#FFCA42',
      neutral: '#F6F8FC',
      'blue': '#0ea5e9',
      'red' : '#db2777',
      'green' : '#10b981',
      'gray' : '#9ca3af',
      'white' : '#ffffff',
      'shadow' : '#b4c7e7',
    },
    fontFamily : {
      serif : ['Cardo', 'serif'],
      sans : ['Inter' , 'sans'],
      'sans-black' : ['Inter' , 'sans','900'],
      'sans-extraBold' : ['Inter' , 'sans','800'],
      'sans-bold' : ['Inter' , 'sans','700'],
      'sans-semiBold' : ['Inter' , 'sans','600'],
      'sans-medium' : ['Inter' , 'sans','500'],
      'sans-regular' : ['Inter' , 'sans','400'],
      'sans-light' : ['Inter' , 'sans','300'],
      'sans-extraLight' : ['Inter' , 'sans','200'],
      'sans-thin' : ['Inter' , 'sans','100'],

    }
  },
  plugins: [],
}

