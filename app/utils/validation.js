const validatejs = require('validate.js');

const registrationConstraints = {
  fullName: {
    presence: {
      allowEmpty: false
    },
  },
  schoolName: {
    presence: {
      allowEmpty: false
    },
  },
  mobileNumber: {
    presence: {
      allowEmpty: false
    },
    format: {
      pattern: "[0-9]+",
      message: "can only contain digits"
    },
		length: {
			is: 10,
			message: "must be 10 digits long"
		}
  },
  username: {
    presence: {
      allowEmpty: false
    },
    format: {
      pattern: "[a-z0-9]+",
      flags: "i",
      message: "can only contain letters or numbers"
    }
  },
  password: {
    presence: {
      allowEmpty: false
    },
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  },
};

const loginConstraints = {
  username: {
    presence: {
      allowEmpty: false
    },
  },
  password: {
    presence: {
      allowEmpty: false
    },
  },
};

const passwordConstraints = {
  password: {
    presence: {
      allowEmpty: false
    },
    format: {
      pattern: '(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])[a-zA-Z0-9]+',
      message: "must contain a capital letter, a lowercase letter, and a number"
    },
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  },
};

const settingsConstraints = {
  fullName: {
    presence: {
      allowEmpty: false
    },
  },
  schoolName: {
    presence: {
      allowEmpty: false
    },
  },
  mobileNumber: {
    presence: {
      allowEmpty: false
    },
    format: {
      pattern: "[0-9]+",
      message: "can only contain digits"
    },
		length: {
			is: 10,
			message: "must be 10 digits long"
		}
  },
}

const validate = (formObj, type, callback) => {
  var constraint;
  switch(type){
    case 'LOGIN':
      constraint = loginConstraints;
      break;
    case 'REGISTER':
      constraint = registrationConstraints;
      break;
    case 'SETTINGS':
      constraint = settingsConstraints;
      break;
    case 'PASSWORD':
      constraint = passwordConstraints;
      break;
    default:
      break;
  }
  const res = validatejs(formObj, constraint);
  if (!res) return callback(null, null);

  if (res.hasOwnProperty('fullName')) return callback(res.fullName[0], 'name');
  if (res.hasOwnProperty('schoolName'))
    return callback(res.schoolName[0], 'school');
  if (res.hasOwnProperty('mobileNumber'))
    return callback(res.mobileNumber[0], 'phone');
  if (res.hasOwnProperty('username'))
    return callback(res.username[0], 'username');
  if (res.hasOwnProperty('password'))
    return callback(res.password[0], 'password');
  return callback(null, null);
}

export default validate;
