// Generated from src/lib/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ValueContext } from "./CalcLangParser";
import { UnaryOpContext } from "./CalcLangParser";
import { BinaryOpContext } from "./CalcLangParser";
import { ImplicitMulContext } from "./CalcLangParser";
import { FuncAssignmentContext } from "./CalcLangParser";
import { AssigmentContext } from "./CalcLangParser";
import { FileContext } from "./CalcLangParser";
import { ExprContext } from "./CalcLangParser";
import { ParenthesesContext } from "./CalcLangParser";
import { FuncCallContext } from "./CalcLangParser";
import { ExprListContext } from "./CalcLangParser";
import { IdentifierListContext } from "./CalcLangParser";
import { IdentifierContext } from "./CalcLangParser";
import { NumberContext } from "./CalcLangParser";
import { BooleanContext } from "./CalcLangParser";


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

	/**
	 * Visit a parse tree produced by `CalcLangParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcLangParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcLangParser.boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
}

