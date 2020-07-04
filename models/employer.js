const {Schema, model} = require('mongoose')

const employer = new Schema ({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatarurl: String,

})

module.exports = model('employer', employer)