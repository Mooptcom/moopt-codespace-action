import { check } from 'meteor/check';
import { TemperaturesCollection } from '/imports/api/temperatures/temperaturesCollection';
import { Meteor } from 'meteor/meteor';
import './temperature.html';

Template.temperature.onCreated(function () {
	Meteor.subscribe('temperatures.all');
});

Template.temperature.helpers({
	temperatures() {
		var tempCol = TemperaturesCollection.find({}, {sort: {ts: -1}, limit: 200}).fetch();
		if(tempCol[0]) {
			return tempCol[0].samples;
		}
	},
});

Template.temperature.events({
	
});