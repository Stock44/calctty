import type { ExprVisitor } from '$lib/CalcLang/ExprVisitor';
import type { ExprNode } from '$lib/CalcLang/ExprNode';

export class BooleanExpr implements ExprNode {
    value: boolean;
    startLine: number;
    startPos: number;
    endLine?: number;
    endPos?: number;

    constructor(
        value: boolean,
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
        return visitor.visitBoolean(this);
    }
}