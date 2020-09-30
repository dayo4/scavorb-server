"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../utils/index");
var HGValidator = /** @class */ (function () {
    function HGValidator() {
        this.defaultRules = ['required', 'string', 'number', 'email', 'min', 'max', 'equalTo', 'pattern'];
        this.errors = {};
    }
    HGValidator.prototype.validate = function (schema, options) {
        var _a;
        if (!Array.isArray(schema)) {
            index_1.logError('The validation schema is expected to be an array of objects.');
        }
        else {
            if (options) {
                schema = schema.filter(function (x) {
                    var skip = options.skip;
                    if (skip) {
                        if (!Array.isArray(skip)) {
                            index_1.logError('Skip option expects an array of strings');
                        }
                        else if (!(index_1.hasIt(skip, x.fieldName))) {
                            return x;
                        }
                        return;
                    }
                    return x;
                });
            }
            this.errors = {};
            var validation_count = 0;
            for (var _i = 0, schema_1 = schema; _i < schema_1.length; _i++) {
                var x = schema_1[_i];
                if (!index_1.isDef(x.rules) || !index_1.isDef(x.fieldName) || !index_1.isObj(x)) {
                    index_1.logError("Validation Schema is invalid or missing required entries.");
                }
                var fieldName = x.fieldName;
                var data = x.data;
                var rules = x.rules;
                var messages = x.messages;
                for (var _b = 0, _c = Object.keys(rules); _b < _c.length; _b++) {
                    var y = _c[_b];
                    if (!(index_1.hasIt(this.defaultRules, y))) {
                        index_1.logError("Unknown rule type  \"" + y + "\"  detected in schema with field name \"" + fieldName + "\".");
                    }
                    else if (!index_1.isDef(rules[y])) {
                        index_1.logError("Invalid value assigned to rule \"" + y + "\" in schema with field name \"" + fieldName + "\" .");
                    }
                    else {
                        var response = this[y](data, {
                            fieldName: fieldName,
                            ruleValue: rules[y]
                        });
                        validation_count++;
                        if (response !== true) {
                            //@ts-ignore
                            Object.assign(this.errors, (_a = {},
                                _a[fieldName] = messages && messages[y] ? messages[y] : response,
                                _a));
                            break;
                        }
                    }
                }
            }
            if (index_1.isEmptyObj(this.errors) && validation_count > 0) {
                return true;
            }
            return false;
        }
    };
    HGValidator.prototype.sanitize = function (data, option) {
        if (!index_1.isString(data)) {
            index_1.logError("Data to sanitize is expected to be a string. Got \"" + typeof data + "\" instead.");
        }
        else {
            if (option && option.strict == false) {
                return data.replace(/(<([script^>]+)>)/ig, "").trim();
            }
            return data.replace(/(<([^>]+)>)/ig, "").replace(/[\s]+/g, ' ').trim();
        }
    };
    HGValidator.prototype.getErrors = function (options) {
        if (options && options.format == 'single') {
            return this.errors[Object.keys(this.errors)[0]];
        }
        return this.errors;
    };
    HGValidator.prototype.required = function (data, options) {
        if (index_1.isDef(data) && data !== '') {
            return true;
        }
        return options.fieldName + " is required and cannot be empty.";
    };
    HGValidator.prototype.string = function (data, options) {
        if (index_1.isString(data)) {
            return true;
        }
        return options.fieldName + " is expected to be a string.";
    };
    HGValidator.prototype.number = function (data, options) {
        if (index_1.isNum(data)) {
            return true;
        }
        return options.fieldName + " is expected to be a number or integer.";
    };
    HGValidator.prototype.email = function (data, options) {
        if (data.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            return true;
        }
        return options.fieldName + " must be a valid email address.";
    };
    HGValidator.prototype.min = function (data, options) {
        if (!index_1.isNum(options.ruleValue)) {
            index_1.logError("The value of \"MIN\" rule in FIELD '" + options.fieldName + "' is expected to be a number.");
        }
        if (index_1.isString(data) && data.length < options.ruleValue) {
            return options.fieldName + " should be a minimum of " + options.ruleValue + " characters.";
        }
        else if (index_1.isNum(data) && data < options.ruleValue) {
            return options.fieldName + " value should not be less than " + options.ruleValue + ".";
        }
        return true;
    };
    HGValidator.prototype.max = function (data, options) {
        if (!index_1.isNum(options.ruleValue)) {
            index_1.logError("The value of \"MAX\" rule in FIELD '" + options.fieldName + "' is expected to be a number.");
        }
        if (index_1.isString(data) && data.length > options.ruleValue) {
            return options.fieldName + " should be a maximum of " + options.ruleValue + " characters.";
        }
        else if (index_1.isNum(data) && data > options.ruleValue) {
            return options.fieldName + " value should not be greater than " + options.ruleValue + ".";
        }
        return true;
    };
    HGValidator.prototype.equalTo = function (data, options) {
        if (data === options.ruleValue) {
            return true;
        }
        return options.fieldName + " should be equall to " + options.ruleValue + ".";
    };
    HGValidator.prototype.pattern = function (data, options) {
        var regExp = options.ruleValue;
        if (regExp.test(data)) {
            return true;
        }
        return options.fieldName + " must match this pattern " + options.ruleValue + ".";
    };
    return HGValidator;
}());
exports.default = HGValidator;
// const Validator =  new HGValidator()
// const Validator = function (schema?: schemaDataInterface[], options?: schemaOptions) {
//     let valid
//     this.getErrors = function () {
//     }
//     if (schema)
//     {
//         valid = new HGValidator().validate(schema, options)
//     }
//     if (!valid)
//     {
//         this.getErrors
//     }
//     return valid
// }
