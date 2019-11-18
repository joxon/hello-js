/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const set = new Set();
  for(let email of emails) {
    let parts = email.split('@');
    let local = parts[0].split('+')[0].replace(/\./g, '');
    let domain = parts[1];
    let realEmail = local + '@' + domain;
    set.add(realEmail);
  }
  return set.size;
};