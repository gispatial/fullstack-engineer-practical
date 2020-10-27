# Fullstack Engineering Practical
<center><img src="https://github.com/gispatial/fullstack-engineer-practical/blob/master/setel.png"></center>
<img src="https://github.com/gispatial/fullstack-engineer-practical/blob/master/dashboard.png" width="100%">
Setel-Engineering-Test-Assessment-2020 for Grade 4 Full Stack Engineer - R. Aidy
## Build using Nest.js, TypeScript, React and MongoDB

Application repo for a orders application built with Nest.js, TypeScript, React and MongoDB.

## Getting Started
This app is divided into two separate sections. Namely the Backend > nest-react-mongod( Built with Nest.js) and the Frontend
orders( Built with React ).

Install TypeScript globally on your machine if you don't have it installed already:

```bash
npm install -g typescript
```

### Clone the repository
To easily set up the application, clone this repository which contains directory for both sections of the project ( i.e `blog-backend` and `blog-frontend`)

```bash
git clone https://github.com/gispatial/fullstack-engineer-practical/.git
```

## Change directory into the newly cloned project
```bash
cd nest-react-project
```

## Backend
### Change directory into the backend
```bash
cd blog-backend
```

### Install backend dependencies

```bash
npm install
```

### Create .env file
Once the installation process is complete, create a `.env` file:

```bash
touch .env
```

Open the newly created file and add the following code:

```
YOUR_DOMAIN=YOUR_DOMAIN
YOUR_AUDIENCE=YOUR_AUDIENCE
```

Ensure that you replace the `YOUR_DOMAIN` and `YOUR_AUDIENCE` placeholder with the appropriate credentials as obtained from your API settings.


### MongoDB
Ensure that you have mongoDB installed on your machine before running the application. I have this fully setup on my mac already.

Start mongoDB:

```bash
sudo mongod
```

### Run the application
Open another terminal and still within the `backend` project directory run the application with:

```bash
npm run start:dev
```

This will start the backend application on port `5000`. This was modified to avoid confliction with the frontend application which by default will run on port `3000`


## Frontend
```bash
Open another terminal from the `nest-react-mongod` and navigate to the `orders` folder to setup the frontend
```

### Frontend dependencies
```bash
cd orders
npm install
```

### Run the frontend app

```bash
npm start or yarn | 
Please run $ make build 
then $ make run-demo
to deploy the frontend part of Orders Management
```

### Create .env file and include Auth0 App credentials

Create a `.env` file as shown here:

```
 .env
```

Open the file and paste the following code in it:

```
REACT_APP_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
REACT_APP_DOMAIN=YOUR_AUTH0_DOMAIN
REACT_APP_AUDIENCE=YOUR_AUTH0_AUDIENCE
REACT_APP_REDIRECT_URI=http://localhost:3000/callback
REACT_APP_BASEURL=http://localhost:3000/
```

Replace `YOUR_CLIENT_ID`, `YOUR_DOMAIN` and `YOUR_AUDIENCE` placeholder with your API credentials.

### Test the application
Finally open your browser and view the application on http://localhost:3000

## Prerequisites
 [Node.js](https://nodejs.org/en/), [Yarn package manager](https://yarnpkg.com/lang/en/docs/install/#mac-stable), [MongoDB](https://docs.mongodb.com/v3.2/installation/) and [TypeScript](https://www.typescriptlang.org/)


## Built With
[Nest.js]()
[Marmelab React-Admin - React.js]()
[Auth0]() 
[TypeScript]()
[MongoDB]()
