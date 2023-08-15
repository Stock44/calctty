// Generated from /home/hiram/Projects/calctty/src/calclang.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./calclangParser";
import { AssigmentContext } from "./calclangParser";
import { UnaryOpContext } from "./calclangParser";
import { ValueContext } from "./calclangParser";
import { FunctionCallContext } from "./calclangParser";
import { ParenthesesContext } from "./calclangParser";
import { BinaryOpContext } from "./calclangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `calclangParser`.
 */
export default class calclangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `calclangParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `calclangParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;
	/**
	 * Enter a parse tree produced by the `Assigment`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAssigment?: (ctx: AssigmentContext) => void;
	/**
	 * Exit a parse tree produced by the `Assigment`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAssigment?: (ctx: AssigmentContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryOp`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryOp`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Enter a parse tree produced by the `Value`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by the `Value`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by the `FunctionCall`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionCall`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `Parentheses`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by the `Parentheses`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Enter a parse tree produced by the `BinaryOp`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBinaryOp?: (ctx: BinaryOpContext) => void;
	/**
	 * Exit a parse tree produced by the `BinaryOp`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBinaryOp?: (ctx: BinaryOpContext) => void;
}

