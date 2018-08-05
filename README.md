# Text Compare Tool
This app is developed with Angular 5 and [Monaco Editor](https://github.com/Microsoft/monaco-editor).

# Function
This app is used to compare text. All the differences are displayed in a [Monaco Diff Editor](https://microsoft.github.io/monaco-editor/index.html) with highlighting. It supports multiple languages, e.g. c, java, xml, typescript, etc.

<kbd>![image](/src/assets/typescript.png)</kbd>

# Demo
Two available demos:
* `Live Demo on Netlify:` <a href="https://text-compare.netlify.com/" target="\_blank">https://text-compare.netlify.com/</a>
* `Live Demo on Azure:` <a href="https://text-compare.azurewebsites.net/" target="\_blank">https://text-compare.azurewebsites.net/</a>

*Note: The demo websites may be slow when you access them for the first time. Be patient!*

# Setup Locally
```bash
git clone https://github.com/jojozhuang/text-compare-angular.git
cd text-compare-angular
npm install
npm start
```
Access http://localhost:4200/ in web browser and click 'Text Compare' menu, enjoy!

# Setup in Docker
```bash
git clone https://github.com/jojozhuang/text-compare-angular.git
cd text-compare-angular
npm install
docker build -t text-compare-angular .
docker run --name text-compare-angular -p 8080:80 text-compare-angular
```
Access http://localhost:8080/ in web browser and click 'Text Compare' menu, enjoy!

# Deployment to Docker
Read tutorial [Deploying Text Compare Angular App to Docker](https://jojozhuang.github.io/tutorial/angular/deploying-text-compare-angular-app-to-docker/) to learn how this angular app is deployed to Docker.

# Deployment to Netlify
Read tutorial [Deploying Text Compare Angular App to Netlify](https://jojozhuang.github.io/tutorial/angular/deploying-text-compare-angular-app-to-netlify/) to learn how this angular app is deployed to Netlify.

# Portfolio
Read portfolio [Text Compare(Angular)](https://jojozhuang.github.io/portfolio/text-compare-angular/) to learn the main functions of this text compare tool.

# Tutorial
Read tutorial [Building Online Text Compare Tool with Angular](https://jojozhuang.github.io/tutorial/angular/building-online-text-compare-tool-with-angular/) to learn how this text compare tool is built.
