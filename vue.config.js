module.exports = {
    publicPath: './',
    pages: {
        index: {
            entry: 'src/client/src/main.js',
            template: 'src/client/public/index.html'
        }
    },
    outputDir: "dist/client"
}
