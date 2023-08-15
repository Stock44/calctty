// Generated from /home/hiram/Projects/calctty/src/calclang.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import calclangListener from './calclangListener.js';
import calclangVisitor from './calclangVisitor.js';

const serializedATN = [4,1,19,66,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,0,1,0,1,0,
3,0,11,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,26,8,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,61,8,1,
10,1,12,1,64,9,1,1,1,0,1,2,2,0,2,0,0,79,0,10,1,0,0,0,2,25,1,0,0,0,4,5,3,
2,1,0,5,6,5,1,0,0,6,11,1,0,0,0,7,8,3,2,1,0,8,9,5,0,0,1,9,11,1,0,0,0,10,4,
1,0,0,0,10,7,1,0,0,0,11,1,1,0,0,0,12,13,6,1,-1,0,13,14,5,17,0,0,14,15,5,
2,0,0,15,26,3,2,1,16,16,17,5,14,0,0,17,26,3,2,1,4,18,19,5,17,0,0,19,20,5,
15,0,0,20,21,3,2,1,0,21,22,5,16,0,0,22,26,1,0,0,0,23,26,5,17,0,0,24,26,5,
18,0,0,25,12,1,0,0,0,25,16,1,0,0,0,25,18,1,0,0,0,25,23,1,0,0,0,25,24,1,0,
0,0,26,62,1,0,0,0,27,28,10,15,0,0,28,29,5,3,0,0,29,61,3,2,1,16,30,31,10,
14,0,0,31,32,5,4,0,0,32,61,3,2,1,15,33,34,10,13,0,0,34,35,5,5,0,0,35,61,
3,2,1,14,36,37,10,12,0,0,37,38,5,6,0,0,38,61,3,2,1,13,39,40,10,11,0,0,40,
41,5,7,0,0,41,61,3,2,1,12,42,43,10,10,0,0,43,44,5,8,0,0,44,61,3,2,1,11,45,
46,10,9,0,0,46,47,5,9,0,0,47,61,3,2,1,10,48,49,10,8,0,0,49,50,5,10,0,0,50,
61,3,2,1,9,51,52,10,7,0,0,52,53,5,11,0,0,53,61,3,2,1,8,54,55,10,6,0,0,55,
56,5,12,0,0,56,61,3,2,1,7,57,58,10,5,0,0,58,59,5,13,0,0,59,61,3,2,1,6,60,
27,1,0,0,0,60,30,1,0,0,0,60,33,1,0,0,0,60,36,1,0,0,0,60,39,1,0,0,0,60,42,
1,0,0,0,60,45,1,0,0,0,60,48,1,0,0,0,60,51,1,0,0,0,60,54,1,0,0,0,60,57,1,
0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,3,1,0,0,0,64,62,1,0,0,
0,4,10,25,60,62];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class calclangParser extends antlr4.Parser {

    static grammarFileName = "calclang.g4";
    static literalNames = [ null, "'\\n'", "'='", "'+'", "'*'", "'-'", "'/'", 
                            "'^'", "'=='", "'!='", "'<'", "'>'", "'<='", 
                            "'>='", "'!'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "Identifier", "Number", "Whitespace" ];
    static ruleNames = [ "line", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = calclangParser.ruleNames;
        this.literalNames = calclangParser.literalNames;
        this.symbolicNames = calclangParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 15);
    		case 1:
    			return this.precpred(this._ctx, 14);
    		case 2:
    			return this.precpred(this._ctx, 13);
    		case 3:
    			return this.precpred(this._ctx, 12);
    		case 4:
    			return this.precpred(this._ctx, 11);
    		case 5:
    			return this.precpred(this._ctx, 10);
    		case 6:
    			return this.precpred(this._ctx, 9);
    		case 7:
    			return this.precpred(this._ctx, 8);
    		case 8:
    			return this.precpred(this._ctx, 7);
    		case 9:
    			return this.precpred(this._ctx, 6);
    		case 10:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, calclangParser.RULE_line);
	    try {
	        this.state = 10;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 4;
	            this.expr(0);
	            this.state = 5;
	            this.match(calclangParser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 7;
	            this.expr(0);
	            this.state = 8;
	            this.match(calclangParser.EOF);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, calclangParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 13;
	            this.match(calclangParser.Identifier);
	            this.state = 14;
	            this.match(calclangParser.T__1);
	            this.state = 15;
	            this.expr(16);
	            break;

	        case 2:
	            this.state = 16;
	            this.match(calclangParser.T__13);
	            this.state = 17;
	            this.expr(4);
	            break;

	        case 3:
	            this.state = 18;
	            this.match(calclangParser.Identifier);
	            this.state = 19;
	            this.match(calclangParser.T__14);
	            this.state = 20;
	            this.expr(0);
	            this.state = 21;
	            this.match(calclangParser.T__15);
	            break;

	        case 4:
	            this.state = 23;
	            this.match(calclangParser.Identifier);
	            break;

	        case 5:
	            this.state = 24;
	            this.match(calclangParser.Number);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 62;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 60;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 27;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 28;
	                    this.match(calclangParser.T__2);
	                    this.state = 29;
	                    this.expr(16);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 30;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 31;
	                    this.match(calclangParser.T__3);
	                    this.state = 32;
	                    this.expr(15);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 33;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 34;
	                    this.match(calclangParser.T__4);
	                    this.state = 35;
	                    this.expr(14);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 36;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 37;
	                    this.match(calclangParser.T__5);
	                    this.state = 38;
	                    this.expr(13);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 39;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 40;
	                    this.match(calclangParser.T__6);
	                    this.state = 41;
	                    this.expr(12);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 42;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 43;
	                    this.match(calclangParser.T__7);
	                    this.state = 44;
	                    this.expr(11);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 45;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 46;
	                    this.match(calclangParser.T__8);
	                    this.state = 47;
	                    this.expr(10);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 48;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 49;
	                    this.match(calclangParser.T__9);
	                    this.state = 50;
	                    this.expr(9);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 51;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 52;
	                    this.match(calclangParser.T__10);
	                    this.state = 53;
	                    this.expr(8);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 54;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 55;
	                    this.match(calclangParser.T__11);
	                    this.state = 56;
	                    this.expr(7);
	                    break;

	                case 11:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, calclangParser.RULE_expr);
	                    this.state = 57;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 58;
	                    this.match(calclangParser.T__12);
	                    this.state = 59;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

calclangParser.EOF = antlr4.Token.EOF;
calclangParser.T__0 = 1;
calclangParser.T__1 = 2;
calclangParser.T__2 = 3;
calclangParser.T__3 = 4;
calclangParser.T__4 = 5;
calclangParser.T__5 = 6;
calclangParser.T__6 = 7;
calclangParser.T__7 = 8;
calclangParser.T__8 = 9;
calclangParser.T__9 = 10;
calclangParser.T__10 = 11;
calclangParser.T__11 = 12;
calclangParser.T__12 = 13;
calclangParser.T__13 = 14;
calclangParser.T__14 = 15;
calclangParser.T__15 = 16;
calclangParser.Identifier = 17;
calclangParser.Number = 18;
calclangParser.Whitespace = 19;

calclangParser.RULE_line = 0;
calclangParser.RULE_expr = 1;

class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calclangParser.RULE_line;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(calclangParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calclangListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calclangListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calclangVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calclangParser.RULE_expr;
    }

	Identifier() {
	    return this.getToken(calclangParser.Identifier, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Number() {
	    return this.getToken(calclangParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calclangListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calclangListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calclangVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




calclangParser.LineContext = LineContext; 
calclangParser.ExprContext = ExprContext; 
