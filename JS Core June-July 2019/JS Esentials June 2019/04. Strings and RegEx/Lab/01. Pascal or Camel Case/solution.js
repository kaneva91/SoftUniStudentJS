function solve() {
  let text = document.querySelector('#text'),
    namingConvention = document.querySelector('#naming-convention'),
    resultContainer = document.querySelector('#result'),

    input = text.value.split(' ').filter(x => x !== ''),
    output = '';

  if (namingConvention.value === 'Pascal Case' || namingConvention.value === 'Camel Case') {
    output = input.map(word =>
      word = word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join('');
  }
  else {
    output = 'Error!';
  }

  if (namingConvention.value === 'Camel Case') {
    console.log(output);
    output = output.charAt(0).toLowerCase() + output.substr(1);
  }

  resultContainer.textContent = output;
}