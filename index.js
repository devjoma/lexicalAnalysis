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
  const regex = /\d+(\.\d+)?|\/\/.*|\/\*[\s\S]*?\*\/|>=|=|BEGIN|PROGRAM|INTEGER|BOOLEAN|END|WHILE|DO|READ|VAR|FALSE|TRUE|WRITE|.[a-z]+|\+|\-|\*|\//g;
  const WORD = /\bBEGIN|PROGRAM|INTEGER|BOOLEAN|END|WHILE|DO|READ|VAR|FALSE|TRUE|WRITE\b/g
  const NUMBER = /\d+(\.\d+)?/g
  const COMMENT = /\/\/.*|\/\*[\s\S]*?\*\//g
  const IDENTIFIER = /[a-z]+/

  let match;
  while ((match = regex.exec(input)) !== null) {
    let token = {
      value: match[0],
      type: null
    };

    if (NUMBER.test(token.value)) {
      token.type = 'NUMBER';
      token = numberUtils(token, tokens)
    } else if (COMMENT.test(token.value)) {
      token.type = 'COMMENT'
    }
    else if (WORD.test(token.value)) {
       token.type = 'INITIALIZER';
    } else if (IDENTIFIER.test(token.value)) {
      token.type = 'IDENTIFIER';
    }
    else {
      token.type = 'OPERATOR';
    }

    tokens.push(token);
  }

  return tokens;
}

function numberUtils(token, tokens) {
  if(tokens[tokens.length-1].type == 'OPERATOR' && tokens[tokens.length-2].type != 'NUMBER' &&       tokens[tokens.length-2].type != 'IDENTIFIER') {
        token.value = tokens[tokens.length-1].value + token.value
        tokens.pop()
      }
  return token
}

console.log(lexer("BEGIN x = a >= b * 1 //walter"))

