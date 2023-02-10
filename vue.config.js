module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/velotrack-online-graphics/'
        : '/',
    pages: {
        index: {
            entry: 'src/client/src/main.js',
            template: 'src/client/public/index.html'
        }
    },

    outputDir: "dist/client"
}
