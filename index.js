"use strict";

function is(value)
{
	//Validate value argument
	if (arguments.length == 0)
		throw new Error("is expects at least one value and optionally a variable number of type arguments");

	//Validate type arguments
	for (var i = 1; i < arguments.length; i++) {
		var _type = arguments[i];
		if (typeof _type !== "function")
			throw new Error("types, if supplied, are expected to be of type 'function'");
	}

	//Type not supplied
	if (arguments.length < 2)
		return value !== undefined && value !== null && !Number.isNaN(value);

	//Test types
	var value_type = typeof value;
	for (var i = 1; i < arguments.length; i++) {
		var _type = arguments[i];

		if (value_type === "string" && _type === String)
			return true;

		else if (value_type === "boolean" && _type === Boolean)
			return true;

		else if (value_type === "number" && _type === Number && !Number.isNaN(value))
			return true;

		else if (value_type === "function" && _type === Function)
			return true;

		else if (value instanceof _type)
			return true;
	}

	//All failed
	return false;
}

module.exports = is;
