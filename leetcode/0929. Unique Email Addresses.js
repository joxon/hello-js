/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const set = new Set()
  emails.forEach(address => {
    const names = address.split('@')
    const realLocalName = names[0].split('+')[0].replace(/\./g, '')
    const domainName = names[1]
    set.add(realLocalName + '@' + domainName)
  })
  return set.size
}

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com'
  ])
)
