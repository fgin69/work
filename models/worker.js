const { Mongoose } = require("mongoose");

const {Schema, model} = require('mongoose');

const worker = new Schema ({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
})

module.exports = model('worker', worker)