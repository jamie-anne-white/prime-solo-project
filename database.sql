
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "results" (
	"results_id" SERIAL PRIMARY KEY,
	"date" DATE,
	"workout" BOOLEAN,
	"workout_rating" INTEGER,
	"post_workout_rating" INTEGER,
	"alcohol" BOOLEAN,
	"food" BOOLEAN,
	"sleep" BOOLEAN,
	"mindfullness" BOOLEAN,
	"overall_status" INTEGER
	);