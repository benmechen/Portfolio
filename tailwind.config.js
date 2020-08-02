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
            }
        }
    },
    variants: {},
    // https://github.com/tailwindcss/custom-forms
    plugins: [require("@tailwindcss/custom-forms")]
}
