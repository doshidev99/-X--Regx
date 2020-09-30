const phoneNumber = "123-123-1234";

const removeHyphensWithNormalCode = (str) => {
  while (str.indexOf("-") !== -1) {
    str = str.replace("-", "");
  }
  /**
	* @param {string} str finding.
		@pattern replace(search, replacement);
	*/
  return str;
};

// eslint-disable-next-line no-console
console.log(removeHyphensWithNormalCode(phoneNumber), "<----");

const removeHyphensWithReg = (str) => str.replace(/-/g, "");

// eslint-disable-next-line no-console
console.log(removeHyphensWithReg(phoneNumber), "<----");

// homework

const listPhone = ["09-123.123", "091-303-0001", "0123 123 322"];

const sanitize = (phoneNumbers) =>
  phoneNumbers.map((str) => {
    return str.replace(/[, -]/g, "");
  });

// eslint-disable-next-line no-console
console.log(sanitize(listPhone), "<----");

const listCurrency = ["¥1", "¥5", "円500", "円10000", "円123"];

function convertCurrency(listCurrency) {
  return listCurrency.map((str) => {
    return str.replace(/[¥円]/, '');
  });
}

// eslint-disable-next-line no-console
console.log(convertCurrency(listCurrency), "<----");


//String.prototype.match

  // eslint-disable-next-line no-console
console.log('070-123-1234'.match(/-\d+/), '<----');