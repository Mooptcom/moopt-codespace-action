// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { LinksCollection } from './linksCollection.js';
import './methods.js';

if (Meteor.isServer) {
	describe('links methods', function() {
		beforeEach(function() {
			LinksCollection.remove({});
		});

		it('can add a new link', function() {
			const addLink = Meteor.server.method_handlers['links.insert'];

			addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

			assert.equal(LinksCollection.find().count(), 1);
		});
	});
}
