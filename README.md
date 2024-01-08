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
Access http://localhost:12010/ in web browser and click 'Text Compare' menu, enjoy!

# Setup in Docker
```bash
git clone https://github.com/jojozhuang/text-compare-angular.git
cd text-compare-angular
npm install
docker build -t text-compare-angular .
docker run --name text-compare-angular -p 8080:80 text-compare-angular
```
Access http://localhost:8080/ in web browser and click 'Text Compare' menu, enjoy!

# Setup in K8s

```sh
# 1. Build image
docker build -t text-compare-angular .
# 2. Deploy to k8s:
kubectl apply -f k8s/text-compare.yaml
# 3. Create service in minikube:
minikube service text-compare-service
# 4. Web browser will be opened automatically to access the site.
```

# Use helm with k8s

Create helm chart with the following command.

```sh
helm create deployment
```

Then, edit the deployment file, service and config map file accordingly.

After editing all configuration files, install with helm.

```sh
helm install compare-helm deployment
```

Helm will create k8s components based on the configuration files. Use `kubectl get all | grep helm` to find them.

```sh
kubectl get all | grep helm
pod/compare-helm-76b67b5db6-r6jwq              1/1     Running   0          12m
service/compare-helm           ClusterIP      10.97.189.245   <none>        80/TCP            12m
deployment.apps/compare-helm              1/1     1            1           12m
replicaset.apps/compare-helm-76b67b5db6              1         1         1       12m
```

If you make any change to the configuration files, use the following command to upgrade.

```sh
helm upgrade compare-helm deployment
```

List all deployed namespaces.

```sh
helm ls --all-namespaces
NAME        	NAMESPACE    	REVISION	UPDATED                             	STATUS  	CHART           	APP VERSION
compare-helm	default      	2       	2024-01-07 21:05:52.849445 -0800 PST	deployed	deployment-0.1.0	1.16.0
text-compare	bit-developer	1       	2024-01-07 20:50:29.372749 -0800 PST	deployed	deployment-0.1.0	1.16.0
text-compare	default      	1       	2024-01-07 20:42:49.758154 -0800 PST	failed  	deployment-0.1.0	1.16.0
```

Start the service to view the web app in brower.

```sh
minikube service compare-helm
```

# Use helm with template

## Use values.yaml

Edit the file in `template` folder, use `Values` variables and put the actual values in `values.yaml`.

```yaml
appName: compare-helm
namespace: default

configmap:
  name: compare-configmap
  data:
    ENV_NAME: 'DEV'

image:
  name: jojozhuang/text-compare-angular
  tag: latest
```

Upgrade the deployment.

```sh
helm upgrade compare-helm deployment --values deployment/values.yaml
W0107 21:30:02.019806   39661 warnings.go:70] unknown field "spec.ports[0].type"
Release "compare-helm" has been upgraded. Happy Helming!
NAME: compare-helm
LAST DEPLOYED: Sun Jan  7 21:30:01 2024
NAMESPACE: default
STATUS: deployed
REVISION: 3
TEST SUITE: None
```

After each upgrade, the revision number should be incremented.

```sh
helm ls
NAME        	NAMESPACE	REVISION	UPDATED                             	STATUS  	CHART           	APP VERSION
compare-helm	default  	5       	2024-01-07 21:38:03.669554 -0800 PST	deployed	deployment-0.1.0	1.16.0
```

## Add notes

Create file `NOTES.txt` under `deployment/templates` directory with the following content.

```sh
servicename=$(k get service -l "app={{ .Values.appName }}" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace {{ .Values.namespace}} port-forward service/{{ .Values.appName }} 8888:80
```

Each time when you run the upgrade command, you will see the notes in the output.

```sh
helm upgrade compare-helm deployment --values deployment/values.yaml
W0107 21:49:34.774115   40283 warnings.go:70] unknown field "spec.ports[0].type"
Release "compare-helm" has been upgraded. Happy Helming!
NAME: compare-helm
LAST DEPLOYED: Sun Jan  7 21:49:34 2024
NAMESPACE: default
STATUS: deployed
REVISION: 6
TEST SUITE: None
NOTES:
servicename=$(k get service -l "app=compare-helm" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace default port-forward service/compare-helm 8888:80
```

Copy and paste the two lines and execute them in teminal.

```sh
servicename=$(k get service -l "app=compare-helm" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace default port-forward service/compare-helm 8888:80
```

Then, you are able to access your site through `http://localhost:8888/`.

- [How to Create Helm Charts - The Ultimate Guide](https://www.youtube.com/watch?v=jUYNS90nq8U&ab_channel=DevOpsJourney)

# Deployment
Read tutorial [Deploying Text Compare Angular App to Docker](https://jojozhuang.github.io/tutorial/deploying-text-compare-angular-app-to-docker) to learn how this angular app is deployed to Docker.

Read tutorial [Deploying Text Compare Angular App to Netlify](https://jojozhuang.github.io/tutorial/deploying-text-compare-angular-app-to-netlify) to learn how this angular app is deployed to Netlify.

# Portfolio
Read portfolio [Text Compare(Angular)](https://jojozhuang.github.io/project/text-compare-angular) to learn the main functions of this text compare tool.

# Tutorial
Read tutorial [Building Online Text Compare Tool with Angular](https://jojozhuang.github.io/tutorial/building-online-text-compare-tool-with-angular) to learn how this text compare tool is built.
