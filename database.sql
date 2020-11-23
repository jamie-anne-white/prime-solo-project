
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

SELECT * FROM "results"
JOIN "user" ON "user"."id" = "results"."user_id";

UPDATE "results"
SET "date" = $1, "workout" = $2, "workout_rating" = $3, "post_workout_rating" = $4, "alcohol" = $5, "food" = $6, "sleep" = $7, "mindfullness" = $8, "overall_status" = $9 
WHERE "user_id" = $10;
