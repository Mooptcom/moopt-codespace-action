import { check } from 'meteor/check';
import { TemperaturesCollection } from '/imports/api/temperatures/temperaturesCollection';

Meteor.methods({
	/*'temperatures.upsert'(deviceId, data) {
		check(deviceId, String);

		TemperaturesCollection.upsert({
          'deviceId': deviceId,
          'nsamples': {'$lt': 200}
        }, {
          '$push': {'samples': data},
          '$min': {'first': data['ts']},
          '$max': {'last': data['ts']},
          '$inc': {'nsamples': 1}
        })

		return(data);
	},*/

	'temperature.insert'(celsius, date, deviceId, timestamp) {
		check(deviceId, String);

		var data = {
        	'ts': timestamp,
        	'temp': celsius,
        	'date': date
        }

		TemperaturesCollection.insert(data);

		return(data);
	},
});