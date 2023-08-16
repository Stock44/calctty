// Generated from src/lib/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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

	/**
	 * Enter a parse tree produced by `CalcLangParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `CalcLangParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `CalcLangParser.boolean`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by `CalcLangParser.boolean`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;
}

