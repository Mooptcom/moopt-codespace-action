import { LinksCollection } from '/imports/api/links/linksCollection.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
	Meteor.subscribe('links.all');
});

Template.info.helpers({
	links() {
		return LinksCollection.find({});
	},
});

Template.info.events({
	'submit .info-link-add'(event) {
		event.preventDefault();

		const target = event.target;
		const title = target.title;
		const url = target.url;

		Meteor.call('links.insert', title.value, url.value, (error) => {
			if (error) {
				alert(error.error);
			} else {
				title.value = '';
				url.value = '';
			}
		});
	},
});