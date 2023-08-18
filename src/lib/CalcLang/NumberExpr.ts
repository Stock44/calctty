import type { ExprVisitor } from '$lib/CalcLang/ExprVisitor';
import type { ExprNode } from '$lib/CalcLang/ExprNode';

export class NumberExpr implements ExprNode {
    value: number;
    startLine: number;
    startPos: number;
    endLine?: number;
    endPos?: number;

    constructor(
        value: number,
        startLine: number,
        startPos: number,
        endLine?: number,
        endPos?: number
    ) {
        this.value = value;
        this.startLine = startLine;
        this.startPos = startPos;
        this.endLine = endLine;
        this.endPos = endPos;
    }

    accept<T>(visitor: ExprVisitor<T>): T {
        return visitor.visitNumber(this);
    }
}