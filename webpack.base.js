module.exports = {
     // tell weppack to run on babel every file it rus through
 module: {
    rules: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0',
                    ['env', { targets: { browsers: ['last 2 versions']}}]
                ]
            }

        }
    ]
 }
}