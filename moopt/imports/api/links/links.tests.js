// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { LinksCollection } from './linksCollection.js';

if (Meteor.isServer) {
	describe('links collection', function() {
		it('insert correctly', function() {
			const linkId = LinksCollection.insert({
				title: 'meteor homepage',
				url: 'https://www.meteor.com',
			});
			const added = LinksCollection.find({_id: linkId});
			const collectionName = added._getCollectionName();
			const count = added.count();

			assert.equal(collectionName, 'links');
			assert.equal(count, 1);
		});
	});
}
