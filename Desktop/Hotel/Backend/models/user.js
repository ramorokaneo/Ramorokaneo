const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	title: { type: String, required: true },
	surName: { type: String, required: true },
	name: { type: String, required: true },
	gender: { type: String, required: true },
	address: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	confirmPassword: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
	  title: Joi.string().required().valid("Mr", "Mrs", "Miss").label("Title"),
	  surName: Joi.string().required().label("First Name"),
	  name: Joi.string().required().label("Last Name"),
	  gender: Joi.string().required().valid("Male", "Female", "Other").label("Gender"),
	  address: Joi.string().required().label("Address"),
	  phoneNumber: Joi.string().required().pattern(/^\d+$/).label("Phone Number"),
	  email: Joi.string().email().required().label("Email"),
	  password: passwordComplexity().required().label("Password"),
	  confirmPassword: Joi.string().required().valid(Joi.ref('password')).label("Confirm Password"),
	});
	
	return schema.validate(data);
};

module.exports = { User, validate };