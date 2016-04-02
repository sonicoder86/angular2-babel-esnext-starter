import { validate } from 'validate.js';

export function validatorFactory(validationName, options = {}) {
  let validateOptions = {};
  validateOptions[validationName] = options;

  let constraints = { inputField: validateOptions };

  return function urlValidator(control) {
    let attributes = { inputField: control.value };

    let result = validate(attributes, constraints);

    if (result) {
      let validationResult = {};
      validationResult[validationName] = true;
      return validationResult;
    }
  };
}
