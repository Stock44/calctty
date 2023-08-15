// Generated from /home/hiram/Projects/calctty/src/calclang.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by calclangParser.

export default class calclangVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by calclangParser#line.
	visitLine(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calclangParser#expr.
	visitExpr(ctx) {
	  return this.visitChildren(ctx);
	}



}