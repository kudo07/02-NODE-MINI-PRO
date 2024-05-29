function getMailLinkForEmail(email) {
  return `mailto:${email}`;
}
let emial = 'slayer@fquest.app';
console.log(`the mailto link for ${emial} is : ${getMailLinkForEmail(emial)}`);
