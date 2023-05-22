import { Meteor } from 'meteor/meteor';
import { MoviesCollection } from './moviesCollection.js';

Meteor.publish('movies.all', function () {
    return MoviesCollection.find();
});