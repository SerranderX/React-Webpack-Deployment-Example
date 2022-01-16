# En este apartado se detallan los comandos utilizados en el actual projecto y sus funciones al ejecutarse

## Dependencies ##
# Babel instalation for Webpack optimizate
npm i babel-loader @babel/core @babel/preset-env @babel/preset-react -D

# Installation of Webpack tools
npm install webpack webpack-cli webpack-dev-server -D

# Installation of Webpack HTML loader and PLugin
npm i html-loader html-webpack-plugin -D

# Installation of css and sass plugin and webpack dependencies
npm i mini-css-extract-plugin css-loader style-loader sass sass-loader -D



## Comands Runs ##
# Some of this comands are in the package.json file, in the 'script' section. 

# Run webpack especify mode and config
npx webpack --mode production --config webpack.config.js

# Comando para generar un reporte mediante webpack analyzer
npx webpack --profile --json | Out-file 'stats.json' -Encoding OEM

## Documentation ## 
# Description of webpack bundler analyzer report
> https://platzi.com/blog/analizar-dependencias-webpack-bundle-analyzer/