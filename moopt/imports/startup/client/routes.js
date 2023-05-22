import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/app/app.js';
import '../../ui/pages/not-found/not-found.js';
//import '../../ui/pages/crud/crud.js';
import '../../ui/components/temperature/temperature.js';

// Set up all routes in the app
FlowRouter.route('/app', {
	name: 'app',
	action() {
		this.render('App');
	},
});

FlowRouter.route('/link', {
	name: 'link',
	action() {
		this.render('App_body', 'App_home');
	},
});

FlowRouter.route('/', {
	name: 'iot',
	action() {
		this.render('temperature');
	},
});

/*FlowRouter.route('/crud', {
	name: 'crud',
	action() {
		this.render('CRUD');
	},
});*/

// Create 404 route (catch-all)
FlowRouter.route('*', {
	action() {
		// Show 404 error page using Blaze
		this.render('App_notFound');

		// Can be used with BlazeLayout,
		// and ReactLayout for React-based apps
	}
});
