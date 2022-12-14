/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['sans-serif', 'ClearSans'],
            },
            colors: {
                DFXBg: '#F5F7FB',
                DFXBlue: '#001450;',
            },
        },
    },
    plugins: [],
}