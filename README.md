
## Download the code 

### `git clone https://lborgato@bitbucket.org/beerealit/brr-27-capacitacion-reactjs.git`
### `cd brr-27-capacitacion-reactjs/`
### `git fetch && git checkout lborgato-react-app`

## Start FrontEnd App
**for installing packages**
### `cd brr-27-capacitacion-reactjs/react-app`
### `npm install` 

**for running app**
### `npm start`

Open http://localhost:3001/ to view it in the browser. 

## Start BackEnd App
**for installing packages**
### `cd brr-27-capacitacion-reactjs/backend-app`
### `npm install` 

**for running app**
### `npm run start:server`

Server will start on port 3000. 

You have to add a .env file with your database credentials
## .env File
### 
	# NODE
	NODE_ENV=development
	PORT=3000
	JWT_SECRET=secret_this_should_be_longer


	# DB
	DB_ADMIN_PASS=[MongoDBPass]
	DB_ADMIN_USER=[MongoDBUser]

	DB_URL=[MongoDBURL]


