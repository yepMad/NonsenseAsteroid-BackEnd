# [Back-End] Nonsense Asteroid

**Contents**
- [How run?](https://github.com/yepMad/NonsenseAsteroidBackEnd#how-run)
   - [Database Server](https://github.com/yepMad/NonsenseAsteroidBackEnd#database-server)
 
   - [Node, Yarn and NPM Version](https://github.com/yepMad/NonsenseAsteroidBackEnd#node-yarn-and-npm-version)
   - [Running the server](https://github.com/yepMad/NonsenseAsteroidBackEnd#running-the-server)

- [Routes](https://github.com/yepMad/NonsenseAsteroidBackEnd#routes)
   - [Scoreboard](https://github.com/yepMad/NonsenseAsteroidBackEnd#scoreboard)

## How run?
#### Database Server
Do you need a MongoDB server; or Docker.

> docker run --name mongoasteroid -p 27017:27017 -d -t mongo

#### Node, Yarn and NPM Version

Node v13.7.0;

Yarn v1.22.0;

NPM v6.13.6 *(used due to ESLint)*;

#### Running the server
> yarn dev

## Routes
#### Scoreboard

**GET** /scoreboard => Do not receive any body. Returns a listing of the top 10 scores stored in MongoDB.

**POST** /scoreboard => Receives 3 arguments in the body:

	{
		"userToken": "16-digit alphanumeric code generated only once randomly within Unity",
		"name": "Player nickname",
		"score": Number
	}

