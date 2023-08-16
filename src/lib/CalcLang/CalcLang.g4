grammar CalcLang;

file: (expr (Newline expr)* Newline*)? EOF;

expr: parentheses # Value
    | funcCall # Value
    | ( '!'
          | 'not'
          | '-'
          | '+'
          ) expr # UnaryOp
    | expr '^' expr # BinaryOp
    | expr ( '*' | '/' ) expr # BinaryOp
    | expr ( '+' | '-' ) expr # BinaryOp
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
    | number (funcCall | parentheses | identifier) # ImplicitMul
    | identifier '(' identifierList? ')' '=' expr # FuncAssignment
    | identifier '=' expr # Assigment
    | identifier # Value
    | number # Value
    | boolean # Value
    ;

parentheses: '(' expr ')';
funcCall: identifier '(' exprList? ')';
exprList: expr (',' expr)*;

identifierList: identifier (',' identifier)*;

identifier: Identifier;
number: Number;
boolean: Boolean;

BlockComment: '/*' .*? '*/' -> skip;
LineComment: '//' ~[\r\n]* Newline -> skip;

fragment Character: [a-z]|[A-Z];

fragment Digit: [0-9];

Boolean: 'true' | 'false';

Number: Digit+('.'Digit+)?;

Identifier: Character (Character | Digit)*;

Newline: [\n\r]+;

Whitespace: [ \t]+ -> skip;
