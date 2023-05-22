import { Meteor } from 'meteor/meteor';
import { TemperaturesCollection } from './temperaturesCollection.js';

Meteor.publish('temperatures.all', function () {
    return TemperaturesCollection.find();
});