// Melhoria na perte do Type do input
  // Adicionar o igual (==)


function lexer(input) {
  const tokens = [];

  const regex = /\d+|[a-z]+|\+|\-|\*|\//g;

  let match;
  while ((match = regex.exec(input)) !== null) {
    const token = {
      value: match[0],
      type: null
    };

    if (/\d+/.test(token.value)) {
      token.type = 'NUMBER';
    } else if (/[a-z]+/.test(token.value)) {
      token.type = 'IDENTIFIER';
    } else {
      token.type = 'OPERATOR';
    }

    tokens.push(token);
  }

  return tokens;
}

console.log(lexer("x = a+b*2"))
