grammar calclang;

file: (expr '\n' | '\n')* expr? EOF;

expr: '(' expr ')' # Parentheses
    | Identifier '(' (expr ',')* expr ')' # FunctionCall
    | ( '!'
          | 'not'
          | '-'
          | '+'
          ) expr # UnaryOp
    | expr '^' expr # BinaryOp
    | expr ( '*' | '/' ) expr # BinaryOp
    | expr ( '+' | '-' ) expr # BinaryOp
    | expr expr # BinaryOp
    | expr ( '=='
           | '!='
           | '<'
           | '<='
           | '>'
           | '>='
           ) expr # BinaryOp
    | expr ( '&&'
           | 'and'
           | '||'
           | 'or'
           ) expr # BinaryOp
    | Identifier '=' expr # Assigment
    | (Identifier | Number | Boolean) # Value;

BlockComment: '/*' .*? '*/' -> channel(HIDDEN);
LineComment: '//' ~[\r\n]* '\n'-> channel(HIDDEN);

fragment Character: [a-z]|[A-Z];

fragment Digit: [0-9];

Boolean: 'true' | 'false';

Number: Digit+('.'Digit+)?;

Identifier: Character (Character | Digit)*;

Whitespace: [ \t]+ -> skip;
