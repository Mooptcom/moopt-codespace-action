// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/api/tasks/tasksCollection';
import { LinksCollection } from '../../api/links/linksCollection.js';
import { MoviesCollection } from '/imports/api/movies/moviesCollection';

const insertTask = (taskText, user) => TasksCollection.insert({
	text: taskText,
	userId: user._id,
	createdAt: new Date(),
});

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

async function insertLink({ title, url }) {
	await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
	// code to run on server at startup
	if (!Accounts.findUserByUsername(SEED_USERNAME)) {
		Accounts.createUser({
			username: SEED_USERNAME,
			password: SEED_PASSWORD,
		});
	}

	const user = Accounts.findUserByUsername(SEED_USERNAME);

	if (TasksCollection.find().count() === 0) {
		[
			'First Task',
			'Second Task',
			'Third Task',
			'Fourth Task',
			'Fifth Task',
			'Sixth Task',
			'Seventh Task'
		].forEach(taskText => insertTask(taskText, user));
	}

	// If the Links collection is empty, add some data.
	if (await LinksCollection.find().countAsync() === 0) {
		await insertLink({
			title: 'Do the Tutorial',
			url: 'https://www.meteor.com/tutorials/react/creating-an-app',
		});

		await insertLink({
			title: 'Follow the Guide',
			url: 'https://guide.meteor.com',
		});

		await insertLink({
			title: 'Read the Docs',
			url: 'https://docs.meteor.com',
		});

		await insertLink({
			title: 'Discussions',
			url: 'https://forums.meteor.com',
		});
	}

	if (MoviesCollection.find().count() === 0) {
		MoviesCollection.insert({title: 'The Shawshank Redemption', year: 1994, rating: 9.2});
		MoviesCollection.insert({title: 'The Godfather', year: 1972, rating: 9.2});
		MoviesCollection.insert({title: 'Forrest Gump', year: 1994, rating: 8.7});
		MoviesCollection.insert({title: 'The Matrix', year: 1999, rating: 8.7});
	}
});
