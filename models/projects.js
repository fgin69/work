const {Schema, model} = require('mongoose')
const projects = new Schema ({
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			default: Date.now
		},
		employerId: {
			type: Schema.Types.ObjectId,
			ref: 'employer'
		},
		workerId: {
			type: Schema.Types.ObjectId,
			ref: 'worker'
		},
})

module.exports = model('projects', projects)