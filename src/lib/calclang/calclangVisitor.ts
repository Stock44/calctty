// Generated from /home/hiram/Projects/calctty/src/calclang.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { FileContext } from "./calclangParser";
import { AssigmentContext } from "./calclangParser";
import { UnaryOpContext } from "./calclangParser";
import { ValueContext } from "./calclangParser";
import { FunctionCallContext } from "./calclangParser";
import { ParenthesesContext } from "./calclangParser";
import { BinaryOpContext } from "./calclangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `calclangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class calclangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `calclangParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;
	/**
	 * Visit a parse tree produced by the `Assigment`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssigment?: (ctx: AssigmentContext) => Result;
	/**
	 * Visit a parse tree produced by the `UnaryOp`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOp?: (ctx: UnaryOpContext) => Result;
	/**
	 * Visit a parse tree produced by the `Value`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `FunctionCall`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `Parentheses`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;
	/**
	 * Visit a parse tree produced by the `BinaryOp`
	 * labeled alternative in `calclangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOp?: (ctx: BinaryOpContext) => Result;
}

