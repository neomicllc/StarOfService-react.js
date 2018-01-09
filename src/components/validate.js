import moment from 'moment';

const validate = values => {
  const errors = {};
  const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
  const minLength6 = minLength(6);
  const dateNow = new Date();
  const newDate = dateNow.getFullYear();

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  const dateOfBirth = values.DD + '/' + values.MM + '/' + values.YYYY;
  // console.log('dateOfBirth', isValidDate(dateOfBirth));

  function isValidDate(str) {
    var d = moment(str,'D/M/YYYY');
    if(d == null || !d.isValid()) return false;

    return str.indexOf(d.format('D/M/YYYY')) >= 0
      || str.indexOf(d.format('DD/MM/YYYY')) >= 0
      || str.indexOf(d.format('D/M/YY')) >= 0
      || str.indexOf(d.format('DD/MM/YY')) >= 0;
  }

  if (!values.email) {
    errors.email = 'EMAIL IS REQUIRED'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'INVALID EMAIL ADDRESS'
  }
  if (!values.password) {
    errors.password = 'PASSWORD IS REQUIRED'
  } else if (minLength6(values.password)) {
    errors.password = 'PASSWORD IS TOO SHORT'
  }
  if (!values.confirmPassword || values.confirmPassword !== values.password) {
    errors.confirmPassword = 'PASSWORD DO NOT MATCH'
  }
  if (!values.DD || !values.MM || !values.YYYY) {
    errors.dateOfBirth = 'DATE OF BIRTH IS REQUIRED'
    //errors.MM = 'DATE OF BIRTH IS REQUIRED'
    //errors.YYYY = 'DATE OF BIRTH IS REQUIRED'
  } else if (values.DD > 31 || !isNumeric(values.DD)) {
    errors.dateOfBirth = 'ENTER CORRECT DAY OF BIRTH'
  } else if (values.MM > 12 || !isNumeric(values.MM)) {
    errors.dateOfBirth = 'ENTER CORRECT MONTH OF BIRTH'
  } else if (!isNumeric(values.YYYY)) {
    errors.dateOfBirth = 'SHOULD BE NUMBER'
  } else if ((newDate - values.YYYY) <= 18) {
    errors.dateOfBirth = 'YOU ARE TOO YOUNG'
  } else if ((newDate - values.YYYY) >= 100) {
    errors.dateOfBirth = 'YOU ARE TOO OLD'
  }
  else if (!isValidDate(dateOfBirth)) {
    errors.dateOfBirth = 'INVALID DATE'
  }
  if (!values.gender) {
    errors.gender = 'GENDER IS REQUIRED'
  }
  if (!values.select) {
    errors.select = 'SELECT SOME ANSWER'
  }
  return errors
};

export default validate