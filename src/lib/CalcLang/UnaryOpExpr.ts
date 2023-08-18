import type { ExprVisitor } from '$lib/CalcLang/ExprVisitor';
import type { ExprNode } from '$lib/CalcLang/ExprNode';

export enum UnaryOp {
    Not,
    Negation,
    Positive
}

export const UnaryOpMap = new Map([
    ['!', UnaryOp.Not],
    ['not', UnaryOp.Not],
    ['-', UnaryOp.Negation],
    ['+', UnaryOp.Positive]
]);

export class UnaryOpExpr implements ExprNode {
	op: UnaryOp;
	target: ExprNode;
	startLine: number;
	startPos: number;
	endLine?: number;
	endPos?: number;

	constructor(
		op: UnaryOp,
		target: ExprNode,
		startLine: number,
		startPos: number,
		endLine?: number,
		endPos?: number
	) {
		this.op = op;
		this.target = target;
		this.startLine = startLine;
		this.startPos = startPos;
		this.endLine = endLine;
		this.endPos = endPos;
	}

	accept<T>(visitor: ExprVisitor<T>): T {
		return visitor.visitUnaryOp(this);
	}
}