module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            'sm': '600px',
            'md': '900px',
            'lg': '1200px',
            'xl': '1800px'
        },
        extend: {
            colors: {
                'primary': '#121a39',
                'secondary': '#ff57a8',
            },
            fontFamily: {
                body: ['Lora', 'serif'],
                display: ['Lora', 'serif'],
                accent: ['sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
}
