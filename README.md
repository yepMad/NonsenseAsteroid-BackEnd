# [Back-End] Nonsense Asteroid

**Contents**

[TOC]

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

