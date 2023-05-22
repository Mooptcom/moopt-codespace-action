import { Mongo } from 'meteor/mongo';

export const MoviesCollection = new Mongo.Collection('movies');

// Allow all client-side updates on the Movies collection
MoviesCollection.allow({
  	insert() { return true; },
  	update() { return true; },
  	remove() { return true; },
});