//TASK-1 WAF TO DOWNLOAD DATA FROM THE URL
// TASK-2 WAF TO SAVE THE DOWNLOADED DATA IN A FILE AND RETURN THE FILENAME
// TASK-3 WAF TO UPLOAD THE FILE WRITTEN IN PREVIOUS STEP TO NEWURL

function fetchCustom(url, fn) {
  // download content of the url
  // this downloading can take sometime
  // we will download the content from url, and then whatever is the result , we will pass to the callback
  console.log('starting downlaoding'); // 1
  setTimeout(function process() {
    console.log('download copleted'); //2
    let response = 'dummy data';
    fn(response);
    console.log('ending the function'); //5
  }, 3000);
}

function writeFile(data, fn) {
  console.log('started writing data'); //4
  setTimeout(function process() {
    console.log('Writing completed'); //6
    let filename = 'output.text';
    fn(filename);
    console.log('writing ended'); //9
  }, 4000);
}

function uploadFile(filename, newUrl, fn) {
  console.log('upload started'); //8
  setTimeout(function process() {
    console.log('File', filename, 'uploaded successfullyon', newUrl); //10
    let uploadResponse = 'Success';
    fn(uploadResponse);
    console.log('upload eneded'); //12
  }, 2000);
}
fetchCustom('www.google.com', function downloadCallback(response) {
  console.log('downloaded response is', response); //3
  writeFile(response, function writeCallback(filenameResponse) {
    console.log('new file written is ', filenameResponse); //7
    uploadFile(
      filenameResponse,
      'www.yahoo.com',
      function uploadCallback(uploadedResponse) {
        console.log('successfully uploaded', uploadedResponse); //11
      }
    );
  });
});
