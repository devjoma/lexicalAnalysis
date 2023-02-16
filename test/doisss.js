function tokenize(input) {
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

  let currentToken = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (/\s/.test(char)) {
      if (currentToken) tokens.push(currentToken), currentToken = '';
    } else if (keywords[char]) {
      if (currentToken) tokens.push(currentToken), currentToken = '';
      tokens.push(char);
    } else if (/\W/.test(char)) {
      if (currentToken) tokens.push(currentToken), currentToken = '';
      tokens.push(char);
    } else {
      currentToken += char;
    }
  }

  if (currentToken) tokens.push(currentToken);

  return tokens;
}
