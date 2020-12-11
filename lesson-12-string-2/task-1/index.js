function calc(text) {
  let result = 0;
  let [a, option, b] = text.split(' ');

  switch (option) {
    case ('+'):
      result = Number(a) + Number(b);
      break;

    case ('-'):
      result = Number(a) - Number(b);
      break;

    case ('*'):
      result = Number(a) * Number(b);
      break;

    case ('/'):
      result = Number(a) / Number(b);
      break;
  }
  return `${text} = ${result}`;
}

