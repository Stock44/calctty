// Generated from /home/hiram/Projects/calctty/src/calclang.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import calclangListener from "./calclangListener.js";
import calclangVisitor from "./calclangVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class calclangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly BlockComment = 23;
	public static readonly LineComment = 24;
	public static readonly Boolean = 25;
	public static readonly Number = 26;
	public static readonly Identifier = 27;
	public static readonly Whitespace = 28;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_expr = 1;
	public static readonly literalNames: (string | null)[] = [ null, "'\\n'", 
                                                            "'('", "')'", 
                                                            "','", "'!'", 
                                                            "'not'", "'-'", 
                                                            "'+'", "'^'", 
                                                            "'*'", "'/'", 
                                                            "'=='", "'!='", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'&&'", "'and'", 
                                                            "'||'", "'or'", 
                                                            "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "BlockComment", 
                                                             "LineComment", 
                                                             "Boolean", 
                                                             "Number", "Identifier", 
                                                             "Whitespace" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "expr",
	];
	public get grammarFileName(): string { return "calclang.g4"; }
	public get literalNames(): (string | null)[] { return calclangParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return calclangParser.symbolicNames; }
	public get ruleNames(): string[] { return calclangParser.ruleNames; }
	public get serializedATN(): number[] { return calclangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, calclangParser._ATN, calclangParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, calclangParser.RULE_file);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 10;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 8;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 2:
					case 5:
					case 6:
					case 7:
					case 8:
					case 25:
					case 26:
					case 27:
						{
						this.state = 4;
						this.expr(0);
						this.state = 5;
						this.match(calclangParser.T__0);
						}
						break;
					case 1:
						{
						this.state = 7;
						this.match(calclangParser.T__0);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 12;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 14;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 234881508) !== 0)) {
				{
				this.state = 13;
				this.expr(0);
				}
			}

			this.state = 16;
			this.match(calclangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, calclangParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				localctx = new ParenthesesContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 19;
				this.match(calclangParser.T__1);
				this.state = 20;
				this.expr(0);
				this.state = 21;
				this.match(calclangParser.T__2);
				}
				break;
			case 2:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 23;
				this.match(calclangParser.Identifier);
				this.state = 24;
				this.match(calclangParser.T__1);
				this.state = 30;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 25;
						this.expr(0);
						this.state = 26;
						this.match(calclangParser.T__3);
						}
						}
					}
					this.state = 32;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				}
				this.state = 33;
				this.expr(0);
				this.state = 34;
				this.match(calclangParser.T__2);
				}
				break;
			case 3:
				{
				localctx = new UnaryOpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 36;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 480) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 37;
				this.expr(9);
				}
				break;
			case 4:
				{
				localctx = new AssigmentContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 38;
				this.match(calclangParser.Identifier);
				this.state = 39;
				this.match(calclangParser.T__21);
				this.state = 40;
				this.expr(2);
				}
				break;
			case 5:
				{
				localctx = new ValueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 41;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 234881024) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 63;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 61;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						localctx = new BinaryOpContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
						this.state = 44;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 45;
						this.match(calclangParser.T__8);
						this.state = 46;
						this.expr(9);
						}
						break;
					case 2:
						{
						localctx = new BinaryOpContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
						this.state = 47;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 48;
						_la = this._input.LA(1);
						if(!(_la===10 || _la===11)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 49;
						this.expr(8);
						}
						break;
					case 3:
						{
						localctx = new BinaryOpContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
						this.state = 50;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 51;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===8)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 52;
						this.expr(7);
						}
						break;
					case 4:
						{
						localctx = new BinaryOpContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
						this.state = 53;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 54;
						this.expr(6);
						}
						break;
					case 5:
						{
						localctx = new BinaryOpContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
						this.state = 55;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 56;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 258048) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 57;
						this.expr(5);
						}
						break;
					case 6:
						{
						localctx = new BinaryOpContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
						this.state = 58;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 59;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 60;
						this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,28,67,2,0,7,0,2,
	1,7,1,1,0,1,0,1,0,1,0,5,0,9,8,0,10,0,12,0,12,9,0,1,0,3,0,15,8,0,1,0,1,0,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,29,8,1,10,1,12,1,32,9,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,43,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,62,8,1,10,1,12,1,65,9,1,1,1,
	0,1,2,2,0,2,0,6,1,0,5,8,1,0,25,27,1,0,10,11,1,0,7,8,1,0,12,17,1,0,18,21,
	78,0,10,1,0,0,0,2,42,1,0,0,0,4,5,3,2,1,0,5,6,5,1,0,0,6,9,1,0,0,0,7,9,5,
	1,0,0,8,4,1,0,0,0,8,7,1,0,0,0,9,12,1,0,0,0,10,8,1,0,0,0,10,11,1,0,0,0,11,
	14,1,0,0,0,12,10,1,0,0,0,13,15,3,2,1,0,14,13,1,0,0,0,14,15,1,0,0,0,15,16,
	1,0,0,0,16,17,5,0,0,1,17,1,1,0,0,0,18,19,6,1,-1,0,19,20,5,2,0,0,20,21,3,
	2,1,0,21,22,5,3,0,0,22,43,1,0,0,0,23,24,5,27,0,0,24,30,5,2,0,0,25,26,3,
	2,1,0,26,27,5,4,0,0,27,29,1,0,0,0,28,25,1,0,0,0,29,32,1,0,0,0,30,28,1,0,
	0,0,30,31,1,0,0,0,31,33,1,0,0,0,32,30,1,0,0,0,33,34,3,2,1,0,34,35,5,3,0,
	0,35,43,1,0,0,0,36,37,7,0,0,0,37,43,3,2,1,9,38,39,5,27,0,0,39,40,5,22,0,
	0,40,43,3,2,1,2,41,43,7,1,0,0,42,18,1,0,0,0,42,23,1,0,0,0,42,36,1,0,0,0,
	42,38,1,0,0,0,42,41,1,0,0,0,43,63,1,0,0,0,44,45,10,8,0,0,45,46,5,9,0,0,
	46,62,3,2,1,9,47,48,10,7,0,0,48,49,7,2,0,0,49,62,3,2,1,8,50,51,10,6,0,0,
	51,52,7,3,0,0,52,62,3,2,1,7,53,54,10,5,0,0,54,62,3,2,1,6,55,56,10,4,0,0,
	56,57,7,4,0,0,57,62,3,2,1,5,58,59,10,3,0,0,59,60,7,5,0,0,60,62,3,2,1,4,
	61,44,1,0,0,0,61,47,1,0,0,0,61,50,1,0,0,0,61,53,1,0,0,0,61,55,1,0,0,0,61,
	58,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,3,1,0,0,0,65,63,
	1,0,0,0,7,8,10,14,30,42,61,63];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!calclangParser.__ATN) {
			calclangParser.__ATN = new ATNDeserializer().deserialize(calclangParser._serializedATN);
		}

		return calclangParser.__ATN;
	}


	static DecisionsToDFA = calclangParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileContext extends ParserRuleContext {
	constructor(parser?: calclangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(calclangParser.EOF, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return calclangParser.RULE_file;
	}
	public enterRule(listener: calclangListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: calclangListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calclangVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: calclangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return calclangParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class AssigmentContext extends ExprContext {
	constructor(parser: calclangParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(calclangParser.Identifier, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: calclangListener): void {
	    if(listener.enterAssigment) {
	 		listener.enterAssigment(this);
		}
	}
	public exitRule(listener: calclangListener): void {
	    if(listener.exitAssigment) {
	 		listener.exitAssigment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calclangVisitor<Result>): Result {
		if (visitor.visitAssigment) {
			return visitor.visitAssigment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryOpContext extends ExprContext {
	constructor(parser: calclangParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: calclangListener): void {
	    if(listener.enterUnaryOp) {
	 		listener.enterUnaryOp(this);
		}
	}
	public exitRule(listener: calclangListener): void {
	    if(listener.exitUnaryOp) {
	 		listener.exitUnaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calclangVisitor<Result>): Result {
		if (visitor.visitUnaryOp) {
			return visitor.visitUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueContext extends ExprContext {
	constructor(parser: calclangParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(calclangParser.Identifier, 0);
	}
	public Number(): TerminalNode {
		return this.getToken(calclangParser.Number, 0);
	}
	public Boolean(): TerminalNode {
		return this.getToken(calclangParser.Boolean, 0);
	}
	public enterRule(listener: calclangListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: calclangListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calclangVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends ExprContext {
	constructor(parser: calclangParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(calclangParser.Identifier, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: calclangListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: calclangListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calclangVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesContext extends ExprContext {
	constructor(parser: calclangParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: calclangListener): void {
	    if(listener.enterParentheses) {
	 		listener.enterParentheses(this);
		}
	}
	public exitRule(listener: calclangListener): void {
	    if(listener.exitParentheses) {
	 		listener.exitParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calclangVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryOpContext extends ExprContext {
	constructor(parser: calclangParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: calclangListener): void {
	    if(listener.enterBinaryOp) {
	 		listener.enterBinaryOp(this);
		}
	}
	public exitRule(listener: calclangListener): void {
	    if(listener.exitBinaryOp) {
	 		listener.exitBinaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calclangVisitor<Result>): Result {
		if (visitor.visitBinaryOp) {
			return visitor.visitBinaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
