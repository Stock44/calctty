import type { ExprVisitor } from '$lib/CalcLang/ExprVisitor';
import type { ExprNode } from '$lib/CalcLang/ExprNode';

export class AssignmentExpr implements ExprNode {
    identifier: string;
    value: ExprNode;
    startLine: number;
    startPos: number;
    endLine?: number;
    endPos?: number;

    constructor(
        identifier: string,
        value: ExprNode,
        startLine: number,
        startPos: number,
        endLine?: number,
        endPos?: number
    ) {
        this.identifier = identifier;
        this.value = value;
        this.startLine = startLine;
        this.startPos = startPos;
        this.endLine = endLine;
        this.endPos = endPos;
    }

    accept<T>(visitor: ExprVisitor<T>): T {
        return visitor.visitAssignment(this);
    }
}