# Text Compare Tool
This app is used to compare text, built with Angular and [Monaco Editor](https://github.com/Microsoft/monaco-editor).
<kbd>![image](/src/assets/typescript.png)</kbd>

# Function
This app can determine the different content for the given 'Original Text' and 'Changed Text'. It is based on [Monaco Diff Editor](https://microsoft.github.io/monaco-editor/index.html) and currently supporting the following features:
* Syntax highlighting for 45+ languages, including c, c++, java, javascript, html, typescript, etc.
* Three editor themes: Visual Studio, Visual Studio Dark and High Contrast Dark.
* Diff Mode: Side by Side Diff, Inline Diff.

# Technology
* Frontend Framework: Angular
* Styling: bootstrap
* Text Editor: ngx-monaco-editor

# Demo
Two available demos:
* `Live Demo on Heroku:` <a href="https://text-compare-angular.herokuapp.com/" target="\_blank">https://text-compare-angular.herokuapp.com/</a>
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

# Deployment
Read tutorial [Deploying Text Compare Angular App to Docker](https://jojozhuang.github.io/tutorial/deploying-text-compare-angular-app-to-docker) to learn how this angular app is deployed to Docker.

Read tutorial [Deploying Text Compare Angular App to Netlify](https://jojozhuang.github.io/tutorial/deploying-text-compare-angular-app-to-netlify) to learn how this angular app is deployed to Netlify.

# Portfolio
Read portfolio [Text Compare(Angular)](https://jojozhuang.github.io/project/text-compare-angular) to learn the main functions of this text compare tool.

# Tutorial
Read tutorial [Building Online Text Compare Tool with Angular](https://jojozhuang.github.io/tutorial/building-online-text-compare-tool-with-angular) to learn how this text compare tool is built.
