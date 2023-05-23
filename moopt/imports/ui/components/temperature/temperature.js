import { check } from 'meteor/check';
import { TemperaturesCollection } from '/imports/api/temperatures/temperaturesCollection';
import { Meteor } from 'meteor/meteor';
import './temperature.html';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';

import * as webix from "../../../../public/wx/webix/codebase/webix.js";
import "../../../../public/wx/meteor-webix-data.js";
import "../../../../public/wx/webix/codebase/webix.css";

Template.temperature.onCreated(function () {
	Meteor.subscribe('temperatures.all');
});

Template.temperature.onRendered(function() {

	/*var dataset = [
		{ id:1, temp:20, ts:"02"},
		{ id:2, temp:55, ts:"03"},
		{ id:3, temp:40, ts:"04"},
		{ id:4, temp:78, ts:"05"},
		{ id:5, temp:61, ts:"06"},
		{ id:6, temp:35, ts:"07"},
		{ id:7, temp:80, ts:"08"},
		{ id:8, temp:50, ts:"09"},
		{ id:9, sales:65, ts:"10"},
		{ id:10, temp:59, ts:"11"}
	];*/

	var webixContainer = webix.ui({
		container: 'webix-playground',
		id: "chart_temp",
		view:"chart",
		width: 400,
		height: 400,
		type:"spline",
		value:"#temp#",
		cellWidth: 60,
		dynamic: true,
		label: function(obj){
			return parseFloat(obj.temp).toFixed(2);
		},
		item:{
			borderColor: "#1293f8",
			color: "#ffffff"
		},
		line:{
			color:"#1293f8",
			width:3
		},
		xAxis:{
			template: function(obj) {
				return webix.i18n.parseTimeFormatStr(obj.date)
			}
		},
		yAxis:{
			start:25,
			end:35,
			step:0.1,
			template:function(obj){
				return (obj.temp%20?"":obj.temp)
			}
		},
		series:[
			{
				value:"#temp#",
				item:{
					borderColor: "#1293f8",
					color: "#ffffff"
				},
				line:{
					color:"#1293f8",
					width:2
				},
				tooltip:{
					template: function(obj) {
						return obj.temp + "°C - " + webix.i18n.timeFormatStr(obj.date)
					}
				}
			}
		],
		//data: dataset,
		url:  webix.proxy('meteor', TemperaturesCollection),  // <-- this is it!
		//save: webix.proxy('meteor', TemperaturesCollection)   // Mongo.Collection
	});
});

Template.temperature.helpers({
	temperatures() {
		return TemperaturesCollection.find({}, {sort: {ts: -1}, limit: 200}).fetch();
	},
});

Template.temperature.events({
	
});