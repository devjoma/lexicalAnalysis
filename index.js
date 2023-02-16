function lexer(input) {
  const tokens = [];

    const keywords = {
    BEGIN: 'INITIALIZER',
    PROGRAM: 'INITIALIZER',
    INTEGER: 'INITIALIZER',
    BOOLEAN: 'INITIALIZER',
    END: 'INITIALIZER',
    WHILE: 'INITIALIZER',
    DO: 'INITIALIZER',
    READ: 'INITIALIZER',
    VAR: 'INITIALIZER',
    FALSE: 'INITIALIZER',
    TRUE: 'INITIALIZER',
    WRITE: 'INITIALIZER',
  };

  // separar
  const regex = /\d+(\.\d+)?|>=|=|BEGIN|PROGRAM|INTEGER|BOOLEAN|END|WHILE|DO|READ|VAR|FALSE|TRUE|WRITE|.[a-z]+|\+|\-|\*|\//g;
  const WORD = /\bBEGIN|PROGRAM|INTEGER|BOOLEAN|END|WHILE|DO|READ|VAR|FALSE|TRUE|WRITE\b/g
  const NUMBER = /\d+(\.\d+)?/g
  const IDENTIFIER = /[a-z]+/

  let match;
  while ((match = regex.exec(input)) !== null) {
    const token = {
      value: match[0],
      type: null
    };

    if (NUMBER.test(token.value)) {
      token.type = 'NUMBER';
    } else if (WORD.test(token.value)) {
       token.type = 'INITIALIZER';
    } else if (IDENTIFIER.test(token.value)) {
      token.type = 'IDENTIFIER';
    } else {
      token.type = 'OPERATOR';
    }

    tokens.push(token);
  }

  return tokens;
}

console.log(lexer("BEGIN x = a >= b * 2.1"))
