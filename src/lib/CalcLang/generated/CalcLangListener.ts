// Generated from src/lib/CalcLang/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT


// Generated from src/lib/CalcLang/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT
import type { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import type { ValueContext } from "./CalcLangParser";
import type { UnaryOpContext } from "./CalcLangParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `CalcLangParser`.
 */
export interface CalcLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Value`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by the `Value`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryOp`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryOp`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryOp?: (ctx: UnaryOpContext) => void;

	/**
	 * Enter a parse tree produced by the `BinaryOp`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBinaryOp?: (ctx: BinaryOpContext) => void;
	/**
	 * Exit a parse tree produced by the `BinaryOp`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBinaryOp?: (ctx: BinaryOpContext) => void;

	/**
	 * Enter a parse tree produced by the `ImplicitMul`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterImplicitMul?: (ctx: ImplicitMulContext) => void;
	/**
	 * Exit a parse tree produced by the `ImplicitMul`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitImplicitMul?: (ctx: ImplicitMulContext) => void;

	/**
	 * Enter a parse tree produced by the `FuncAssignment`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFuncAssignment?: (ctx: FuncAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `FuncAssignment`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFuncAssignment?: (ctx: FuncAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `Assigment`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAssigment?: (ctx: AssigmentContext) => void;
	/**
	 * Exit a parse tree produced by the `Assigment`
	 * labeled alternative in `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAssigment?: (ctx: AssigmentContext) => void;

	/**
	 * Enter a parse tree produced by `CalcLangParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `CalcLangParser.parentheses`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.parentheses`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by `CalcLangParser.funcCall`.
	 * @param ctx the parse tree
	 */
	enterFuncCall?: (ctx: FuncCallContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.funcCall`.
	 * @param ctx the parse tree
	 */
	exitFuncCall?: (ctx: FuncCallContext) => void;

	/**
	 * Enter a parse tree produced by `CalcLangParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `CalcLangParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;
}

