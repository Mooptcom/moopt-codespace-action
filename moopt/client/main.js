// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';

if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/sw.js')
	.then(function() {
		console.log('SW registered')
	})
}