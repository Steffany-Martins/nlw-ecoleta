


<p align="center"> 
<img src="https://github.com/Steffany-Martins/nlw-ecoleta/blob/master/github/logo.svg" alt="logo next level week">
</p>
<hr>

<div align="center">
<div display="flex">
  <img src="https://github.com/Steffany-Martins/nlw-ecoleta/blob/master/github/68747470733a2f2f646570656e6461626f742d6261646765732e6769746875626170702e636f6d2f6261646765732f636f6d7061746962696c6974795f73636f72653f646570656e64656e63792d6e616d653d776562736f636b65742d657874656e73696f6.svg">
 <img src="https://img.shields.io/github/languages/top/Steffany-Martins/nlw-ecoleta">
<img src="https://img.shields.io/scrutinizer/quality/g/Steffany-Martins/nlw-ecoleta?label=code%20quality&style=flat-square">  
<img src="https://img.shields.io/github/languages/count/Steffany-Martins/nlw-ecoleta">
<img src="https://img.shields.io/github/repo-size/Steffany-Martins/nlw-ecoleta">
<img src="https://img.shields.io/npm/l/node_module?color=green">
<img src="https://badgen.net/badge/icon/typescript?icon=typescript&label">



</div>
<br>
<br>
<a align="center" rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>
<br>
<br>
<br>
<a href="https://insomnia.rest/run/?label=Ecoleta_NLW01&uri=https%3A%2F%2Fgist.githubusercontent.com%2FSteffany-Martins%2F1fbdffe64fabe9edded3437139c21180%2Fraw%2F1d896ad8d4f7c9461d06ef211ee370097b8f7bd7%2FEcoleta_NLW_Insomnia.yaml" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
<br>
<br>

<a href="#NLW">Next Level Week</a>   |  <a href="#Project">  Project</a>   |   <a href="#Tech"> Technologies</a>     |  <a href="#HowtoUse">  How to use </a>   | <a href="#HowtoContribute">   How to contribute </a>  | <a href="#License">   License </a>

</div>

<h1 id="NLW">ℹ️ What's Next Level Week?</h1>
<p align="justify">NLW is a practical week with lots of code, challenges, networking and a single objective: to take you to the next level. Through our method you will learn new tools, learn about new technologies and discover hacks that will boost your career. An online and completely free event that will help you take the next step in your evolution as a dev.<p>

<h3>Days</h3>
<ul liststyle="none">
<li>Dia 1: Acelerando sua evolução 01/06 - ✔️</li>
<li>Dia 2: Olhando para as oportunidades 02/06 - ✔️</li>
<li>Dia 3: A escolha da Stack 03/06 - ✔️</li>
<li>Dia 4: Até 2 anos em 2 meses 04/06 - ✔️ </li>
<li>Dia 5: Milha extra 05/06 - ✔️ </li>
</ul>
<div>

<h2 id="Project">💻 Project</h2>
<p align="justify">Ecoleta is a project developed based on international environment week. That aims to connect people to companies that collect specific waste such as light bulbs, batteries, cooking oil, etc.</p>

<img src="https://github.com/Steffany-Martins/nlw-ecoleta/blob/master/github/capa.svg" alt="capa layout ecoleta">
</div>

<br>

<h2 id="Tech">🚀 Technologies</h2>
<p>This project was developed with the following technologies:</p>
<br>
<ul>
<li>Node.js</li>
<li>TypeScript</li>
<li>React</li>
<li>React Native</li>
<li>Expo</li>

</ul>
<br>
<h2 id="HowtoUse">ℹ️ How To Use</h2>
<hr>
<p>To clone and run this application, you'll need Git, Node.js + Yarn installed on your computer.</p>

<p>From your command line:</p>


<h3>Install API - Backend</h3>
<br>

```
# Clone this repository
$ git clone git@github.com:Steffany-Martins/nlw-ecoleta.git

# Go into the repository
$ cd nlw-ecoleta/Backend

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev

# running on port 3333
```

> You can configure your project to your own Database preferences and check your IP preferences (available in LAN - EXPO) to connect the Backend with Applications

<h4>Connect with your database.</h4>

<p>In this case, the database is sqlite. But can be pgAdmin and others SGBD</p>

> You can start connection in your database with connection.ts

<h3>Install Front-end</h3>

<br>

```
# Clone this repository
$ git clone git@github.com:Steffany-Martins/nlw-ecoleta.git

# Go into the repository
$ cd nlw-ecoleta/FrontEnd

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```
<br>

<h3>Install Mobile</h3>
<br>

```
# Clone this repository
$ git clone https://github.com/Steffany-Martins/nlw-ecoleta.git

# Go into the repository
$ cd nlw-ecoleta/Mobile/mobile-app

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page

# If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```
> You need to configure the IP in services api because in Mobile don't exist localhost:3333. Exist only ip network and port '3333' 

<h2 id="HowtoContribute">🤔 How to contribute</h2>

<h3>🔀 Make a fork 🔀</h3>
Create a branch with your feature: git checkout -b my-feature;
Commit changes: git commit -m 'feat: My new feature';
Make a push to your branch: git push origin my-feature.
After merging your receipt request to done, you can delete a branch from yours.

<h2 id="License">📝 License </h2
<p>This project is under the MIT license. See the LICENSE for details.</p>

<h3>✔️ Made by Steffany Martins </h3> <a href="https://www.linkedin.com/in/steffanymartinssoares/">👋 Let's connect!</a>
<br>
<h4>Inspiration:</h4> <a href="https://github.com/DanielObara/NLW-1.0">©️ Daniel Obara Readme©️</a>
