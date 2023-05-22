// All links-related publications

import { Meteor } from 'meteor/meteor';
import { LinksCollection } from './linksCollection.js';

Meteor.publish('links.all', function () {
    return LinksCollection.find();
});
