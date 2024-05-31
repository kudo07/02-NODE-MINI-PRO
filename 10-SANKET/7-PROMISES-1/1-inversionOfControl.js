function func(inputString, fn) {
  // fn is the callback function
  let output = inputString.split(','); //output is an array

  for (let i = 0; i < output.length; i++) {
    fn(output[i]);
  }
}

// this is the util function used it

func('name:vibhu,subject:cse', function process(ip) {
  let arr = ip.split(':');
  console.log('{', arr[0], '=>', arr[1], '}');
});
