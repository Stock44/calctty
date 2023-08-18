import type { ExprNode } from '$lib/CalcLang/ExprNode';

export interface ASTNode {
	startLine: number;
	startPos: number;
	endLine?: number;
	endPos?: number;
}

export interface File extends ASTNode {
	lines: ExprNode[];
}

export interface ParseError extends ASTNode {
	what: string;
}


