function fetchCustom(url) {
  // download content of the url
  // this downloading can take sometime
  // we will download the content from url, and then whatever is the result , we will pass to the callback
  console.log('starting downlaoding');
  setTimeout(function process() {
    console.log('download copleted');
    let response = 'dummy data';
    return response;
  }, 3000);
}
const response = fetchCustom('www.google.com');
console.log(response);
console.log('end of file');
