// Tests for the links publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'chai';
import { LinksCollection } from './linksCollection.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('links publications', function() {
	beforeEach(function() {
		LinksCollection.remove({});
		LinksCollection.insert({
			title: 'meteor homepage',
			url: 'https://www.meteor.com',
		});
	});

	describe('links.all', function() {
		it('sends all links', function (done) {
			const collector = new PublicationCollector();
			collector.collect('links.all', (collections) => {
				assert.equal(collections.links.length, 1);
				done();
			});
		});
	});
});
