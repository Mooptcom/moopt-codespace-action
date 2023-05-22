// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { LinksCollection } from './linksCollection.js';

Meteor.methods({
	'links.insert'(title, url) {
		check(url, String);
		check(title, String);

		return LinksCollection.insert({
			url,
			title,
			createdAt: new Date(),
		});
	},
});
