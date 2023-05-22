import { Mongo } from 'meteor/mongo';

export const TemperaturesCollection = new Mongo.Collection('temperatures');

// Allow all client-side updates on the collection
/*TemperaturesCollection.allow({
  	insert() { return true; },
  	update() { return true; },
  	remove() { return true; },
});*/