Endouble

Steps for setting up project:

1. Open terminal/cmd in projects folder

2. Check for NPM
Check if you have NPM installed by running command in your terminal/cmd 
    npm -v

if you have npm version number should appear, if it doesn't you need to install npm from https://www.npmjs.com/get-npm and follow instructions

3. Install dependencies
While located in projects folder run command
    npm install

this will install all dependencies in project's folder under name 'node_modules'

4. Build project
While located in projects folder run command
    npm run build

this will generate web-ready files in folder under name ‘assets’ (this will be included in sent files) that are required to start project
