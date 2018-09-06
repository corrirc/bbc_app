Set up:

	1.	First thing: npm init (give you stuff like the package.json file)
	2.	Git init
	3.	Touch .gitignore put:
		node_modules
		npm-debug.log
		bundle.js
		Etc.

	4.	Create directory structure



	5.	Npm install:
	•	express
	•	mongo
	•	body-parser
	•	nodemon
	•	webpack webpack-cli

	6.	Edit package.json by inputting below test:

	 "server:dev": "nodemon server/server.js",
   	 "build": "webpack -w"

	7.	Create webpack.config.js file.
	8.	Insert into it:

const config = {
  entry: `${__dirname}/client/src/app.js`,
  output: {
    path: `${__dirname}/client/public/js`,
    filename: 'bundle.js'
  },
  mode: 'development'
};

module.exports = config;


	9.	Run server  (npm run server:dev)
	10.	While that’s running, in new tab run webpack (npm run build)
	11.	While that’s running, in new tab run mongod (mongod)
	12.	Have a 4th tab open for creating files, navigating, changing other stuff etc.


If you’re cloning/unzipping an already made document

	1.	Npm install
	2.	Get 4 tabs running (steps 9-12 above)
