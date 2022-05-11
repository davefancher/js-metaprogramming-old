const _ = require("lodash");
const moment = require("moment");

const isNonEmptyString =
    value => _.isString(value) && !/^\s+$/.test(value);

const isDateString =
    value => _.isString(value) && moment(value, "MM-DD-YYYY").isValid();

const validateModel =
    validationModel =>
        model => {
            const failures =
                Reflect
                    .ownKeys(validationModel)
                    .filter(key => {
                        const validate = validationModel[key];
                        const value = model[key];

                        return !validate(value);
                    });

            if (failures.length > 0) {
                throw new Error(`Validation failures: ${failures.join(", ")}`);
            }

            return model;
        };

const transformModel =
    transformationModel =>
        model =>
            Reflect
                .ownKeys(transformationModel)
                .reduce(
                    (acc, key) => {
                        const xform = transformationModel[key];
                        const sourceValue = model[key];

                        void Reflect.defineProperty(
                            acc,
                            key,
                            {
                                enumerable: true,
                                value: xform(sourceValue, model)
                            });

                        return acc;
                    },
                    {});

const validateUserModel =
    validateModel({
        fname: isNonEmptyString,
        lname: isNonEmptyString,
        birthdate: isDateString 
    });

const transformUserModel =
    transformModel({
        firstName: (value, model) => model.fname.trim(),
        lastName: (value, model) => model.lname.trim().toUpperCase(),
        birthdate: (value, model) => moment(value, "MM-DD-YYYY").format("YYYY-MM-DD"),
        age: (value, model) => {
            const bd = moment(model.birthdate, "MM-DD-YYYY");
            return moment().diff(bd, "years");
        }
    });

const userModel = {
    fname: "Dave",
    lname: "Fancher",
    birthdate: "12/19/1979"
};

const validatedModel = validateUserModel(userModel); //?
const transformedModel = transformUserModel(validatedModel); //?
