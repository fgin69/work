const mongoose = require('mongoose');
const config = require('config');

module.exports =  async function() {
	try{
		await mongoose.connect(config.mongo, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		}).then(() => {
			console.log("MongoDB connected SUCCESSFULLY");
		})
	} catch(e) {console.log(e)}

}