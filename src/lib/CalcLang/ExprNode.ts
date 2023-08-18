import type { ASTNode } from '$lib/CalcLang/ASTNode';
import type { ExprVisitor } from '$lib/CalcLang/ExprVisitor';

export interface ExprNode extends ASTNode {
	accept<T>(visitor: ExprVisitor<T>): T;
}

