/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      base: '19px',
    },
    extend: {
      fontSize: {
        'h1': '65px',
        'h2': '55px',
        'h3': '45px',
        'h4': '32px',
        'h5': '24px',
        'h6': '22px',
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

