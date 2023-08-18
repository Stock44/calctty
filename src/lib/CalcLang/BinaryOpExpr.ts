import type { ExprVisitor } from '$lib/CalcLang/ExprVisitor';
import type { ExprNode } from '$lib/CalcLang/ExprNode';

export enum BinaryOp {
    Sum,
    Mult,
    Div,
    Sub,
    Exp,
    Equal,
    NotEq,
    LessThan,
    LessThanEq,
    GreaterThan,
    GreaterThanEq,
    And,
    Or
}

export const BinaryOpMap = new Map([
    ['+', BinaryOp.Sum],
    ['*', BinaryOp.Mult],
    ['/', BinaryOp.Div],
    ['-', BinaryOp.Sub],
    ['^', BinaryOp.Exp],
    ['==', BinaryOp.Equal],
    ['!=', BinaryOp.NotEq],
    ['<', BinaryOp.LessThan],
    ['<=', BinaryOp.LessThanEq],
    ['>', BinaryOp.GreaterThan],
    ['>=', BinaryOp.GreaterThanEq],
    ['&&', BinaryOp.And],
    ['and', BinaryOp.And],
    ['||', BinaryOp.Or],
    ['or', BinaryOp.Or]
]);

export class BinaryOpExpr implements ExprNode {
    op: BinaryOp;
    lhs: ExprNode;
    rhs: ExprNode;
    startLine: number;
    startPos: number;
    endLine?: number;
    endPos?: number;

    constructor(
        op: BinaryOp,
        lhs: ExprNode,
        rhs: ExprNode,
        startLine: number,
        startPos: number,
        endLine?: number,
        endPos?: number
    ) {
        this.op = op;
        this.lhs = lhs;
        this.rhs = rhs;
        this.startLine = startLine;
        this.startPos = startPos;
        this.endLine = endLine;
        this.endPos = endPos;
    }

    accept<T>(visitor: ExprVisitor<T>): T {
        return visitor.visitBinaryOp(this);
    }
}