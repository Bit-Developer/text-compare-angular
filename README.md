# Text Compare Tool
This app is developed with Angular 5 and [Monaco Editor](https://github.com/Microsoft/monaco-editor).

# Function
This app is used to compare text. All the differences are displayed in a Monaco Diff Editor with highlighting. It supports multiple languages, e.g. c, java, xml, typescript, etc.
![image](/src/assets/textcompare.png)

# Demo
The [Live Demo](https://text-compare.netlify.com/) is hosted by Netlify.

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