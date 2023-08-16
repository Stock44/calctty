// Generated from src/lib/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import type { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import type { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import type { TokenStream } from 'antlr4ts/TokenStream';
import type { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import type { CalcLangListener } from './CalcLangListener';
import type { CalcLangVisitor } from './CalcLangVisitor';

export class CalcLangParser extends Parser {
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
	public static readonly BlockComment = 22;
	public static readonly LineComment = 23;
	public static readonly Boolean = 24;
	public static readonly Number = 25;
	public static readonly Identifier = 26;
	public static readonly Newline = 27;
	public static readonly Whitespace = 28;
	public static readonly RULE_file = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_parentheses = 2;
	public static readonly RULE_funcCall = 3;
	public static readonly RULE_exprList = 4;
	public static readonly RULE_identifierList = 5;
	public static readonly RULE_identifier = 6;
	public static readonly RULE_number = 7;
	public static readonly RULE_boolean = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		'file',
		'expr',
		'parentheses',
		'funcCall',
		'exprList',
		'identifierList',
		'identifier',
		'number',
		'boolean'
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		"'!'",
		"'not'",
		"'-'",
		"'+'",
		"'^'",
		"'*'",
		"'/'",
		"'=='",
		"'!='",
		"'<'",
		"'<='",
		"'>'",
		"'>='",
		"'&&'",
		"'and'",
		"'||'",
		"'or'",
		"'('",
		"')'",
		"'='",
		"','"
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		'BlockComment',
		'LineComment',
		'Boolean',
		'Number',
		'Identifier',
		'Newline',
		'Whitespace'
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
		CalcLangParser._LITERAL_NAMES,
		CalcLangParser._SYMBOLIC_NAMES,
		[]
	);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcLangParser.VOCABULARY;
	}

	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string {
		return 'CalcLang.g4';
	}

	// @Override
	public get ruleNames(): string[] {
		return CalcLangParser.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return CalcLangParser._serializedATN;
	}

	protected createFailedPredicateException(
		predicate?: string,
		message?: string
	): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalcLangParser._ATN, this);
	}

	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalcLangParser.RULE_file);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(_la & ~0x1f) === 0 &&
					((1 << _la) &
						((1 << CalcLangParser.T__0) |
							(1 << CalcLangParser.T__1) |
							(1 << CalcLangParser.T__2) |
							(1 << CalcLangParser.T__3) |
							(1 << CalcLangParser.T__17) |
							(1 << CalcLangParser.Boolean) |
							(1 << CalcLangParser.Number) |
							(1 << CalcLangParser.Identifier))) !==
						0
				) {
					{
						this.state = 18;
						this.expr(0);
						this.state = 23;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 19;
										this.match(CalcLangParser.Newline);
										this.state = 20;
										this.expr(0);
									}
								}
							}
							this.state = 25;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
						}
						this.state = 29;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CalcLangParser.Newline) {
							{
								{
									this.state = 26;
									this.match(CalcLangParser.Newline);
								}
							}
							this.state = 31;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 34;
				this.match(CalcLangParser.EOF);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
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
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, CalcLangParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 63;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
					case 1:
						{
							_localctx = new ValueContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;

							this.state = 37;
							this.parentheses();
						}
						break;

					case 2:
						{
							_localctx = new ValueContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 38;
							this.funcCall();
						}
						break;

					case 3:
						{
							_localctx = new UnaryOpContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 39;
							_la = this._input.LA(1);
							if (
								!(
									(_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 << CalcLangParser.T__0) |
											(1 << CalcLangParser.T__1) |
											(1 << CalcLangParser.T__2) |
											(1 << CalcLangParser.T__3))) !==
										0
								)
							) {
								this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 40;
							this.expr(12);
						}
						break;

					case 4:
						{
							_localctx = new ImplicitMulContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 41;
							this.number();
							this.state = 45;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
								case 1:
									{
										this.state = 42;
										this.funcCall();
									}
									break;

								case 2:
									{
										this.state = 43;
										this.parentheses();
									}
									break;

								case 3:
									{
										this.state = 44;
										this.identifier();
									}
									break;
							}
						}
						break;

					case 5:
						{
							_localctx = new FuncAssignmentContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 47;
							this.identifier();
							this.state = 48;
							this.match(CalcLangParser.T__17);
							this.state = 50;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === CalcLangParser.Identifier) {
								{
									this.state = 49;
									this.identifierList();
								}
							}

							this.state = 52;
							this.match(CalcLangParser.T__18);
							this.state = 53;
							this.match(CalcLangParser.T__19);
							this.state = 54;
							this.expr(5);
						}
						break;

					case 6:
						{
							_localctx = new AssigmentContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 56;
							this.identifier();
							this.state = 57;
							this.match(CalcLangParser.T__19);
							this.state = 58;
							this.expr(4);
						}
						break;

					case 7:
						{
							_localctx = new ValueContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 60;
							this.identifier();
						}
						break;

					case 8:
						{
							_localctx = new ValueContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 61;
							this.number();
						}
						break;

					case 9:
						{
							_localctx = new ValueContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 62;
							this.boolean();
						}
						break;
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 82;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							this.state = 80;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
								case 1:
									{
										_localctx = new BinaryOpContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CalcLangParser.RULE_expr);
										this.state = 65;
										if (!this.precpred(this._ctx, 11)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 11)');
										}
										this.state = 66;
										this.match(CalcLangParser.T__4);
										this.state = 67;
										this.expr(12);
									}
									break;

								case 2:
									{
										_localctx = new BinaryOpContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CalcLangParser.RULE_expr);
										this.state = 68;
										if (!this.precpred(this._ctx, 10)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 10)');
										}
										this.state = 69;
										_la = this._input.LA(1);
										if (!(_la === CalcLangParser.T__5 || _la === CalcLangParser.T__6)) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 70;
										this.expr(11);
									}
									break;

								case 3:
									{
										_localctx = new BinaryOpContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CalcLangParser.RULE_expr);
										this.state = 71;
										if (!this.precpred(this._ctx, 9)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 9)');
										}
										this.state = 72;
										_la = this._input.LA(1);
										if (!(_la === CalcLangParser.T__2 || _la === CalcLangParser.T__3)) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 73;
										this.expr(10);
									}
									break;

								case 4:
									{
										_localctx = new BinaryOpContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CalcLangParser.RULE_expr);
										this.state = 74;
										if (!this.precpred(this._ctx, 8)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 8)');
										}
										this.state = 75;
										_la = this._input.LA(1);
										if (
											!(
												(_la & ~0x1f) === 0 &&
												((1 << _la) &
													((1 << CalcLangParser.T__7) |
														(1 << CalcLangParser.T__8) |
														(1 << CalcLangParser.T__9) |
														(1 << CalcLangParser.T__10) |
														(1 << CalcLangParser.T__11) |
														(1 << CalcLangParser.T__12))) !==
													0
											)
										) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 76;
										this.expr(9);
									}
									break;

								case 5:
									{
										_localctx = new BinaryOpContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CalcLangParser.RULE_expr);
										this.state = 77;
										if (!this.precpred(this._ctx, 7)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 7)');
										}
										this.state = 78;
										_la = this._input.LA(1);
										if (
											!(
												(_la & ~0x1f) === 0 &&
												((1 << _la) &
													((1 << CalcLangParser.T__13) |
														(1 << CalcLangParser.T__14) |
														(1 << CalcLangParser.T__15) |
														(1 << CalcLangParser.T__16))) !==
													0
											)
										) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 79;
										this.expr(8);
									}
									break;
							}
						}
					}
					this.state = 84;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public parentheses(): ParenthesesContext {
		let _localctx: ParenthesesContext = new ParenthesesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CalcLangParser.RULE_parentheses);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 85;
				this.match(CalcLangParser.T__17);
				this.state = 86;
				this.expr(0);
				this.state = 87;
				this.match(CalcLangParser.T__18);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public funcCall(): FuncCallContext {
		let _localctx: FuncCallContext = new FuncCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CalcLangParser.RULE_funcCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 89;
				this.identifier();
				this.state = 90;
				this.match(CalcLangParser.T__17);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(_la & ~0x1f) === 0 &&
					((1 << _la) &
						((1 << CalcLangParser.T__0) |
							(1 << CalcLangParser.T__1) |
							(1 << CalcLangParser.T__2) |
							(1 << CalcLangParser.T__3) |
							(1 << CalcLangParser.T__17) |
							(1 << CalcLangParser.Boolean) |
							(1 << CalcLangParser.Number) |
							(1 << CalcLangParser.Identifier))) !==
						0
				) {
					{
						this.state = 91;
						this.exprList();
					}
				}

				this.state = 94;
				this.match(CalcLangParser.T__18);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CalcLangParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 96;
				this.expr(0);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalcLangParser.T__20) {
					{
						{
							this.state = 97;
							this.match(CalcLangParser.T__20);
							this.state = 98;
							this.expr(0);
						}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CalcLangParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 104;
				this.identifier();
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalcLangParser.T__20) {
					{
						{
							this.state = 105;
							this.match(CalcLangParser.T__20);
							this.state = 106;
							this.identifier();
						}
					}
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CalcLangParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 112;
				this.match(CalcLangParser.Identifier);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CalcLangParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 114;
				this.match(CalcLangParser.Number);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public boolean(): BooleanContext {
		let _localctx: BooleanContext = new BooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CalcLangParser.RULE_boolean);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 116;
				this.match(CalcLangParser.Boolean);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 1:
				return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}

	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.precpred(this._ctx, 11);

			case 1:
				return this.precpred(this._ctx, 10);

			case 2:
				return this.precpred(this._ctx, 9);

			case 3:
				return this.precpred(this._ctx, 8);

			case 4:
				return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		'\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1Ey\x04\x02' +
		'\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
		'\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x07\x02\x18' +
		'\n\x02\f\x02\x0E\x02\x1B\v\x02\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02' +
		'!\v\x02\x05\x02#\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x030\n\x03\x03\x03\x03\x03' +
		'\x03\x03\x05\x035\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03B\n\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03S\n\x03\f\x03\x0E\x03V\v\x03\x03' +
		'\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05_\n\x05\x03' +
		'\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06f\n\x06\f\x06\x0E\x06i\v\x06' +
		'\x03\x07\x03\x07\x03\x07\x07\x07n\n\x07\f\x07\x0E\x07q\v\x07\x03\b\x03' +
		'\b\x03\t\x03\t\x03\n\x03\n\x03\n\x02\x02\x03\x04\v\x02\x02\x04\x02\x06' +
		'\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x07\x03\x02\x03\x06' +
		'\x03\x02\b\t\x03\x02\x05\x06\x03\x02\n\x0F\x03\x02\x10\x13\x02\x85\x02' +
		'"\x03\x02\x02\x02\x04A\x03\x02\x02\x02\x06W\x03\x02\x02\x02\b[\x03\x02' +
		'\x02\x02\nb\x03\x02\x02\x02\fj\x03\x02\x02\x02\x0Er\x03\x02\x02\x02\x10' +
		't\x03\x02\x02\x02\x12v\x03\x02\x02\x02\x14\x19\x05\x04\x03\x02\x15\x16' +
		'\x07\x1D\x02\x02\x16\x18\x05\x04\x03\x02\x17\x15\x03\x02\x02\x02\x18\x1B' +
		'\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1F' +
		'\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x1E\x07\x1D\x02\x02\x1D\x1C' +
		'\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03' +
		'\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02"\x14\x03\x02\x02' +
		'\x02"#\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x07\x02\x02\x03%\x03\x03\x02' +
		"\x02\x02&'\b\x03\x01\x02'B\x05\x06\x04\x02(B\x05\b\x05\x02)*\t\x02\x02" +
		'\x02*B\x05\x04\x03\x0E+/\x05\x10\t\x02,0\x05\b\x05\x02-0\x05\x06\x04\x02' +
		'.0\x05\x0E\b\x02/,\x03\x02\x02\x02/-\x03\x02\x02\x02/.\x03\x02\x02\x02' +
		'0B\x03\x02\x02\x0212\x05\x0E\b\x0224\x07\x14\x02\x0235\x05\f\x07\x024' +
		'3\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x0267\x07\x15\x02\x02' +
		'78\x07\x16\x02\x0289\x05\x04\x03\x079B\x03\x02\x02\x02:;\x05\x0E\b\x02' +
		';<\x07\x16\x02\x02<=\x05\x04\x03\x06=B\x03\x02\x02\x02>B\x05\x0E\b\x02' +
		'?B\x05\x10\t\x02@B\x05\x12\n\x02A&\x03\x02\x02\x02A(\x03\x02\x02\x02A' +
		')\x03\x02\x02\x02A+\x03\x02\x02\x02A1\x03\x02\x02\x02A:\x03\x02\x02\x02' +
		'A>\x03\x02\x02\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02BT\x03\x02\x02\x02' +
		'CD\f\r\x02\x02DE\x07\x07\x02\x02ES\x05\x04\x03\x0EFG\f\f\x02\x02GH\t\x03' +
		'\x02\x02HS\x05\x04\x03\rIJ\f\v\x02\x02JK\t\x04\x02\x02KS\x05\x04\x03\f' +
		'LM\f\n\x02\x02MN\t\x05\x02\x02NS\x05\x04\x03\vOP\f\t\x02\x02PQ\t\x06\x02' +
		'\x02QS\x05\x04\x03\nRC\x03\x02\x02\x02RF\x03\x02\x02\x02RI\x03\x02\x02' +
		'\x02RL\x03\x02\x02\x02RO\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02' +
		'\x02TU\x03\x02\x02\x02U\x05\x03\x02\x02\x02VT\x03\x02\x02\x02WX\x07\x14' +
		'\x02\x02XY\x05\x04\x03\x02YZ\x07\x15\x02\x02Z\x07\x03\x02\x02\x02[\\\x05' +
		'\x0E\b\x02\\^\x07\x14\x02\x02]_\x05\n\x06\x02^]\x03\x02\x02\x02^_\x03' +
		'\x02\x02\x02_`\x03\x02\x02\x02`a\x07\x15\x02\x02a\t\x03\x02\x02\x02bg' +
		'\x05\x04\x03\x02cd\x07\x17\x02\x02df\x05\x04\x03\x02ec\x03\x02\x02\x02' +
		'fi\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02h\v\x03\x02\x02' +
		'\x02ig\x03\x02\x02\x02jo\x05\x0E\b\x02kl\x07\x17\x02\x02ln\x05\x0E\b\x02' +
		'mk\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02' +
		'p\r\x03\x02\x02\x02qo\x03\x02\x02\x02rs\x07\x1C\x02\x02s\x0F\x03\x02\x02' +
		'\x02tu\x07\x1B\x02\x02u\x11\x03\x02\x02\x02vw\x07\x1A\x02\x02w\x13\x03' +
		'\x02\x02\x02\r\x19\x1F"/4ART^go';
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLangParser.__ATN) {
			CalcLangParser.__ATN = new ATNDeserializer().deserialize(
				Utils.toCharArray(CalcLangParser._serializedATN)
			);
		}

		return CalcLangParser.__ATN;
	}
}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode {
		return this.getToken(CalcLangParser.EOF, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public Newline(): TerminalNode[];
	public Newline(i: number): TerminalNode;
	public Newline(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalcLangParser.Newline);
		} else {
			return this.getToken(CalcLangParser.Newline, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_file;
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_expr;
	}

	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}

export class ValueContext extends ExprContext {
	public parentheses(): ParenthesesContext | undefined {
		return this.tryGetRuleContext(0, ParenthesesContext);
	}

	public funcCall(): FuncCallContext | undefined {
		return this.tryGetRuleContext(0, FuncCallContext);
	}

	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}

	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}

	public boolean(): BooleanContext | undefined {
		return this.tryGetRuleContext(0, BooleanContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryOpContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterUnaryOp) {
			listener.enterUnaryOp(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitUnaryOp) {
			listener.exitUnaryOp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitUnaryOp) {
			return visitor.visitUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BinaryOpContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterBinaryOp) {
			listener.enterBinaryOp(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitBinaryOp) {
			listener.exitBinaryOp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitBinaryOp) {
			return visitor.visitBinaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ImplicitMulContext extends ExprContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}

	public funcCall(): FuncCallContext | undefined {
		return this.tryGetRuleContext(0, FuncCallContext);
	}

	public parentheses(): ParenthesesContext | undefined {
		return this.tryGetRuleContext(0, ParenthesesContext);
	}

	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterImplicitMul) {
			listener.enterImplicitMul(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitImplicitMul) {
			listener.exitImplicitMul(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitImplicitMul) {
			return visitor.visitImplicitMul(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FuncAssignmentContext extends ExprContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterFuncAssignment) {
			listener.enterFuncAssignment(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitFuncAssignment) {
			listener.exitFuncAssignment(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitFuncAssignment) {
			return visitor.visitFuncAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssigmentContext extends ExprContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterAssigment) {
			listener.enterAssigment(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitAssigment) {
			listener.exitAssigment(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitAssigment) {
			return visitor.visitAssigment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParenthesesContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_parentheses;
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FuncCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}

	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_funcCall;
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterFuncCall) {
			listener.enterFuncCall(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitFuncCall) {
			listener.exitFuncCall(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitFuncCall) {
			return visitor.visitFuncCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExprListContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_exprList;
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitExprList) {
			return visitor.visitExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_identifierList;
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode {
		return this.getToken(CalcLangParser.Identifier, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_identifier;
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NumberContext extends ParserRuleContext {
	public Number(): TerminalNode {
		return this.getToken(CalcLangParser.Number, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_number;
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BooleanContext extends ParserRuleContext {
	public Boolean(): TerminalNode {
		return this.getToken(CalcLangParser.Boolean, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return CalcLangParser.RULE_boolean;
	}

	// @Override
	public enterRule(listener: CalcLangListener): void {
		if (listener.enterBoolean) {
			listener.enterBoolean(this);
		}
	}

	// @Override
	public exitRule(listener: CalcLangListener): void {
		if (listener.exitBoolean) {
			listener.exitBoolean(this);
		}
	}

	// @Override
	public accept<Result>(visitor: CalcLangVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
