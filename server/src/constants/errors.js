const errorMessages = Object.freeze({
  invalidEmail: 'This email is not in a valid format',
  nonUniqueEmail: 'This email is already associated with an account',
  noMatchingEmail: 'This email is not associated with an account',
  incorrectPassword: 'This password is incorrect',
  onlySingleDrillingWell: 'Only one well per rig can be drilling at a time',
  invalidWellStatus:
    'Well statuses can only be one of the following: active, drilling, inactive',
});

module.exports = errorMessages;
