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
    | Number (funcCall | parentheses | Identifier) # ImplicitMul
    | Identifier '(' identifierList? ')' '=' expr # FuncAssignment
    | Identifier '=' expr # Assigment
    | (Identifier | Number | Boolean) # Value;

parentheses: '(' expr ')';
funcCall: Identifier '(' exprList? ')';
exprList: expr (',' expr)*;

identifierList: Identifier (',' Identifier)*;


BlockComment: '/*' .*? '*/' -> skip;
LineComment: '//' ~[\r\n]* Newline -> skip;

fragment Character: [a-z]|[A-Z];

fragment Digit: [0-9];

Boolean: 'true' | 'false';

Number: Digit+('.'Digit+)?;

Identifier: Character (Character | Digit)*;

Newline: [\n\r]+;

Whitespace: [ \t]+ -> skip;
