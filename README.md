<h1>Read Me</h1>
  <h2>1.0 Installation</h2>
    <h4>1.1 Meteor.js</h4>
        <p>curl https://install.meteor.com/ | sh</p>
          <ul>$ cd <b>project name</b></ul>
          <ul>$ meteor</ul>
     <p><b>Note: Since we are using an entire meteor project, when you run the project locally, it will install any specified packages automatically.</b></p>
     
  <h2>2.0 For Reference</h2>
    <h4>2.1 How To Add Meteor Packages & Create Projects</h4>
           <ul>$ meteor add <b>package name</b></ul>
           <ul>$ meteor create <b>project name</b></ul>

  <h2>3.0 Integrating Polymer</h2>
    <h4>3.1 Install Polymer Elements</h4>
      <p>(see 2.1)</p>
        <ul>$ meteor add ecwyne:polymer-elements </ul>
    <h4>3.2 Configure Bower</h4>
        <p>Install Bower </p>
          <ul> $ npm install -g bower </ul>
        <p> Create .bowerrc file in main repository </p>
            ```
         {  ```
	          ```   "directory": "public/bower_components"  ```
	          ```
         }
            ```
        <p> Create finished bower.json file </p>
          <ul>  $ cd <b>project name</b></ul>
          <ul>  $ bower init </ul> 
  <p><b>Note: Make sure to any components you work with are in the 'public' meteor folder</b><p>
  <h4>3.3 Import Polymer in HTML</h4>
   ```
    <head>
      <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
      <link rel="import" href="bower_components/core-example/core-example.html">
    </head>
    <body>
      <core-example></core-example>
    </body>
  ```

