// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: ["./src/**/*.js"],
    theme: {
        fontFamily: {
            body: [
                "Arvo",
                "Georgia",
                "Cambria",
                "Times New Roman",
                "Times",
                "serif"
            ]
        },
        extend: {
            height: {
                'screen-header': 'calc(100vh - 4rem)'
            },
            colors: {
                gray: {
                  '100': '#f5f5f5',
                  '200': '#eeeeee',
                  '300': '#e0e0e0',
                  '400': '#bdbdbd',
                  '500': '#9e9e9e',
                  '600': '#757575',
                  '700': '#616161',
                  '800': '#424242',
                  '900': '#212121',
                },
                black: "#0e1111"
            }        
        }
    },
    variants: {},
    // https://github.com/tailwindcss/custom-forms
    plugins: [require("@tailwindcss/custom-forms")]
}
