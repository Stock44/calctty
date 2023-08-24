import type { CalcLangVisitor } from '$lib/CalcLang/generated/CalcLangVisitor';
import type { ErrorNode, ParseTree, RuleNode } from 'antlr4ts/tree';
import type { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {
	AssigmentContext,
	BinaryOpContext,
	CalcLangParser,
	ExprContext,
	FileContext,
	FuncAssignmentContext,
	FuncCallContext,
	ImplicitMulContext,
	ParenthesesContext,
	UnaryOpContext,
	ValueContext
} from '$lib/CalcLang/generated/CalcLangParser';
import type { ASTNode, FileNode, ParseError } from '$lib/CalcLang/ASTNode';

import type { ExprNode } from '$lib/CalcLang/ExprNode';
import { FunCallExpr } from '$lib/CalcLang/FunCallExpr';
import { UnaryOpExpr, UnaryOpMap } from '$lib/CalcLang/UnaryOpExpr';
import { BinaryOp, BinaryOpExpr, BinaryOpMap } from '$lib/CalcLang/BinaryOpExpr';
import { FuncAssignmentExpr } from '$lib/CalcLang/FuncAssignmentExpr';
import { AssignmentExpr } from '$lib/CalcLang/AssignmentExpr';
import { NumberExpr } from '$lib/CalcLang/NumberExpr';
import { IdentifierExpr } from '$lib/CalcLang/IdentifierExpr';
import { BooleanExpr } from '$lib/CalcLang/BooleanExpr';

export default class ASTBuilder implements CalcLangVisitor<ASTNode> {
	visitChildren(node: RuleNode): ParseError {
		if (node instanceof ExprContext && node.exception) {
			return {
				startLine: node.start.line,
				startPos: node.start.charPositionInLine,
				endLine: node.stop?.line,
				endPos: node.stop?.charPositionInLine,
				what: `failed parsing expression: ${node.exception.message}`
			};
		}

		throw Error('unknown parsing error');
	}

	visit(tree: ParseTree): ASTNode {
		console.log('visit');
		return tree.getChild(0).accept(this);
	}

	visitErrorNode(node: ErrorNode): ParseError {
		console.log('err node');
		return {
			what: 'unknown error',
			startLine: node.symbol.line,
			startPos: node.symbol.charPositionInLine
		};
	}

	visitTerminal(node: TerminalNode): ExprNode {
		switch (node.symbol.type) {
			case CalcLangParser.Number:
				return new NumberExpr(
					parseFloat(node.text),
					node.symbol.line,
					node.symbol.charPositionInLine
				);
			case CalcLangParser.Boolean:
				return new BooleanExpr(
					node.text === 'true',
					node.symbol.line,
					node.symbol.charPositionInLine
				);
			case CalcLangParser.Identifier:
				return new IdentifierExpr(node.text, node.symbol.line, node.symbol.charPositionInLine);
			default:
				throw Error(`unknown token "${node.text}"`);
		}
	}

	visitFile(ctx: FileContext): FileNode {
		if (!ctx.children) {
			return {
				lines: [],
				startLine: ctx.start.line,
				startPos: ctx.start.charPositionInLine,
				endLine: ctx.stop?.line,
				endPos: ctx.stop?.charPositionInLine
			};
		}

		const lines = ctx.children
			.filter((child) => child instanceof ExprContext)
			.map((child) => child.accept(this)) as ExprNode[];

		return {
			lines,
			startLine: ctx.start.line,
			startPos: ctx.start.charPositionInLine,
			endLine: ctx.stop?.line,
			endPos: ctx.stop?.charPositionInLine
		};
	}

	visitValue = (ctx: ValueContext): ASTNode => {
		// if its a value, it only contains a terminal token, just process that instead
		return ctx.getChild(0).accept(this);
	};

	visitParentheses = (ctx: ParenthesesContext): ExprNode => {
		// skip straight to inside the parentheses
		return ctx.expr().accept(this) as ExprNode;
	};

	visitFuncCall = (ctx: FuncCallContext): FunCallExpr => {
		const args =
			ctx
				.exprList()
				?.children?.filter((child) => child.text != ',')
				?.map((child) => child.accept(this) as ExprNode) ?? [];

		return new FunCallExpr(
			ctx.getChild(0).text,
			args,
			ctx.start.line,
			ctx.start.charPositionInLine,
			ctx.stop?.line,
			ctx.stop?.charPositionInLine
		);
	};

	visitUnaryOp = (ctx: UnaryOpContext): UnaryOpExpr => {
		const opChar = ctx.getChild(0).text;
		const op = UnaryOpMap.get(opChar);

		if (op === undefined) {
			throw Error(`unknown unary operator ${opChar}`);
		}

		return new UnaryOpExpr(
			op,
			ctx.expr().accept(this) as ExprNode,
			ctx.start.line,
			ctx.start.charPositionInLine,
			ctx.stop?.line,
			ctx.stop?.charPositionInLine
		);
	};

	visitBinaryOp = (ctx: BinaryOpContext): BinaryOpExpr => {
		const opChar = ctx.getChild(1).text;
		const op = BinaryOpMap.get(opChar);

		if (op === undefined) {
			throw Error(`unknown operator ${opChar}`);
		}

		const [lhs, rhs] = ctx.expr();

		return new BinaryOpExpr(
			op,
			lhs.accept(this) as ExprNode,
			rhs.accept(this) as ExprNode,
			ctx.start.line,
			ctx.start.charPositionInLine,
			ctx.stop?.line,
			ctx.stop?.charPositionInLine
		);
	};

	visitImplicitMul = (ctx: ImplicitMulContext): BinaryOpExpr => {
		const rhs = ctx.funcCall() ?? ctx.Identifier() ?? ctx.parentheses();

		if (rhs === undefined) {
			throw Error('unable to parse implicit multiplication');
		}

		return new BinaryOpExpr(
			BinaryOp.Mult,
			ctx.Number().accept(this) as ExprNode,
			rhs.accept(this) as ExprNode,
			ctx.start.line,
			ctx.start.charPositionInLine,
			ctx.stop?.line,
			ctx.stop?.charPositionInLine
		);
	};

	visitFuncAssignment = (ctx: FuncAssignmentContext): FuncAssignmentExpr => {
		const args =
			ctx
				.identifierList()
				?.children?.map((child) => child.text)
				?.filter((child) => child != ',') ?? [];

		return new FuncAssignmentExpr(
			ctx.Identifier().text,
			args,
			ctx.expr().accept(this) as ExprNode,
			ctx.start.line,
			ctx.start.charPositionInLine,
			ctx.stop?.line,
			ctx.stop?.charPositionInLine
		);
	};

	visitAssigment = (ctx: AssigmentContext): AssignmentExpr => {
		return new AssignmentExpr(
			ctx.Identifier().text,
			ctx.expr().accept(this) as ExprNode,
			ctx.start.line,
			ctx.start.charPositionInLine,
			ctx.stop?.line,
			ctx.stop?.charPositionInLine
		);
	};
}
