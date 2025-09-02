# WPS addon 
- @auther: John Fu 
- @Date: 2025/9/2
## Prerequisite
- node version 24.7.0
- WPS
- Visual Studio Code
- wpsjs


### Install wpsjs
Install wpsjs globally if admin priviliage is granted.
If this is a fresh install then run the command:
```bash
npm install -g wpsjs
```
Otherwise, you could choose to update the wpsjs by running the command:
```bash
npm update -g wpsjs
```

## Initialization
Once the wpsjs is installed, you will be able to initialize an addon project, go to your desired dev directory, replace ```$project``` variable with your real project name.
```bash
cd .\dev\$project
```
and create the project by running, in case you have multiple, you could use another variable ```$version```
```bash
wps create addon-$version
```
And you should see something like below right away:

![init step 1](img/screenshot%202025-09-02%20102625.png)

There are three options listed here that specifies different type of addon targets:
```bash
Choose WPS addon type:
> word
  powerpoint
  excel
```

Choose the one that is required. In this document, the ```excel``` was chosen.

Once the ```excel``` was chosen. You should be able to see below:

![init step 2](img/screenshot%202025-09-02%20103454.png)

It is translated into below
```bash
? Choose WPS addon type: excel
? Choose UI framework:
> Vue(recommanded)
  React
  None
```

Choose the ```React``` and wait the wpsjs to install the dependencies for the development. Ignore the warinings during the installation for now. 

If the installation is completed successfully, you would see the guide for you to start the project like below.

![Complete init](img/screenshot%202025-09-02%20104258.png)

Now, check your directory using ```ls```, you would see a vite based javascript project was created under your chosen folder.

![Complete init](img/screenshot%202025-09-02%20103932.png)

If you can see the listed files above. That means your installation is completed successfully. Now you could try run the command:
```bash
wpsjs debug
```

to start the development.

### Development
```bash
D:\development\test-addon250902> wpsjs debug
> test-addon250902@1.0.0 dev
> vite --port 3889

The CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

  VITE v5.4.19  ready in 463 ms

  ➜  Local:   http://localhost:3889/
  ➜  Network: http://172.28.144.1:3889/
  ➜  Network: http://192.168.0.106:3889/
  ➜  press h + enter to show help

```

Once you ran the command ```wpsjs debug```. The addon project will start with default port 3889. A WPS table draft file will be started alongside. 

On the WPS table file that just be started. You will find the entrance button ```wps加载项示例``` for the addon project on menu bar to the far right end. Click on the ```wps加载项示例```, you would see serval buttons were created already for quick customization like below.

![entrance](img/screenshot%202025-09-02%20105546.png)

It is also show you the basic interaction and help you to understand how the code and UI are incoorperated.
