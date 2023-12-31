// Generated from src/lib/CalcLang/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT


// Generated from src/lib/CalcLang/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT
import type { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import type { ValueContext } from './CalcLangParser';
import type { UnaryOpContext } from './CalcLangParser';
import type { BinaryOpContext } from "./CalcLangParser";
import type { ImplicitMulContext } from "./CalcLangParser";
import type { FuncAssignmentContext } from "./CalcLangParser";
import type { AssigmentContext } from "./CalcLangParser";
import type { FileContext } from "./CalcLangParser";
import type { ExprContext } from "./CalcLangParser";
import type { ParenthesesContext } from "./CalcLangParser";
import type { FuncCallContext } from "./CalcLangParser";
import type { ExprListContext } from "./CalcLangParser";
import type { IdentifierListContext } from "./CalcLangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalcLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalcLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Value`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryOp`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOp?: (ctx: UnaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `BinaryOp`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOp?: (ctx: BinaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `ImplicitMul`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitMul?: (ctx: ImplicitMulContext) => Result;

	/**
	 * Visit a parse tree produced by the `FuncAssignment`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncAssignment?: (ctx: FuncAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `Assigment`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssigment?: (ctx: AssigmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcLangParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcLangParser.parentheses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcLangParser.funcCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncCall?: (ctx: FuncCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcLangParser.exprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprList?: (ctx: ExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcLangParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;
}

