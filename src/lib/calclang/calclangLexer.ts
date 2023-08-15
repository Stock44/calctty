// Generated from /home/hiram/Projects/calctty/src/calclang.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class calclangLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'\\n'", "'('", 
                                                   "')'", "','", "'!'", 
                                                   "'not'", "'-'", "'+'", 
                                                   "'^'", "'*'", "'/'", 
                                                   "'=='", "'!='", "'<'", 
                                                   "'<='", "'>'", "'>='", 
                                                   "'&&'", "'and'", "'||'", 
                                                   "'or'", "'='" ];
	public static readonly symbolicNames: string[] = [ null, null, null, null, 
                                                    null, null, null, null, 
                                                    null, null, null, null, 
                                                    null, null, null, null, 
                                                    null, null, null, null, 
                                                    null, null, null, "BlockComment", 
                                                    "LineComment", "Boolean", 
                                                    "Number", "Identifier", 
                                                    "Whitespace" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "BlockComment", "LineComment", 
		"Character", "Digit", "Boolean", "Number", "Identifier", "Whitespace",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, calclangLexer._ATN, calclangLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "calclang.g4"; }

	public get literalNames(): (string | null)[] { return calclangLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return calclangLexer.symbolicNames; }
	public get ruleNames(): string[] { return calclangLexer.ruleNames; }

	public get serializedATN(): number[] { return calclangLexer._serializedATN; }

	public get channelNames(): string[] { return calclangLexer.channelNames; }

	public get modeNames(): string[] { return calclangLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,28,187,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,1,
	1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,
	1,9,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,
	15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
	1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,22,5,22,121,8,22,10,22,12,22,
	124,9,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,5,23,135,8,23,10,
	23,12,23,138,9,23,1,23,1,23,1,23,1,23,1,24,3,24,145,8,24,1,25,1,25,1,26,
	1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,158,8,26,1,27,4,27,161,8,27,
	11,27,12,27,162,1,27,1,27,4,27,167,8,27,11,27,12,27,168,3,27,171,8,27,1,
	28,1,28,1,28,5,28,176,8,28,10,28,12,28,179,9,28,1,29,4,29,182,8,29,11,29,
	12,29,183,1,29,1,29,1,122,0,30,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,
	19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,
	43,22,45,23,47,24,49,0,51,0,53,25,55,26,57,27,59,28,1,0,4,2,0,10,10,13,
	13,2,0,65,90,97,122,1,0,48,57,2,0,9,9,32,32,193,0,1,1,0,0,0,0,3,1,0,0,0,
	0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
	0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,
	27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,
	0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,
	53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,1,61,1,0,0,0,3,63,1,0,
	0,0,5,65,1,0,0,0,7,67,1,0,0,0,9,69,1,0,0,0,11,71,1,0,0,0,13,75,1,0,0,0,
	15,77,1,0,0,0,17,79,1,0,0,0,19,81,1,0,0,0,21,83,1,0,0,0,23,85,1,0,0,0,25,
	88,1,0,0,0,27,91,1,0,0,0,29,93,1,0,0,0,31,96,1,0,0,0,33,98,1,0,0,0,35,101,
	1,0,0,0,37,104,1,0,0,0,39,108,1,0,0,0,41,111,1,0,0,0,43,114,1,0,0,0,45,
	116,1,0,0,0,47,130,1,0,0,0,49,144,1,0,0,0,51,146,1,0,0,0,53,157,1,0,0,0,
	55,160,1,0,0,0,57,172,1,0,0,0,59,181,1,0,0,0,61,62,5,10,0,0,62,2,1,0,0,
	0,63,64,5,40,0,0,64,4,1,0,0,0,65,66,5,41,0,0,66,6,1,0,0,0,67,68,5,44,0,
	0,68,8,1,0,0,0,69,70,5,33,0,0,70,10,1,0,0,0,71,72,5,110,0,0,72,73,5,111,
	0,0,73,74,5,116,0,0,74,12,1,0,0,0,75,76,5,45,0,0,76,14,1,0,0,0,77,78,5,
	43,0,0,78,16,1,0,0,0,79,80,5,94,0,0,80,18,1,0,0,0,81,82,5,42,0,0,82,20,
	1,0,0,0,83,84,5,47,0,0,84,22,1,0,0,0,85,86,5,61,0,0,86,87,5,61,0,0,87,24,
	1,0,0,0,88,89,5,33,0,0,89,90,5,61,0,0,90,26,1,0,0,0,91,92,5,60,0,0,92,28,
	1,0,0,0,93,94,5,60,0,0,94,95,5,61,0,0,95,30,1,0,0,0,96,97,5,62,0,0,97,32,
	1,0,0,0,98,99,5,62,0,0,99,100,5,61,0,0,100,34,1,0,0,0,101,102,5,38,0,0,
	102,103,5,38,0,0,103,36,1,0,0,0,104,105,5,97,0,0,105,106,5,110,0,0,106,
	107,5,100,0,0,107,38,1,0,0,0,108,109,5,124,0,0,109,110,5,124,0,0,110,40,
	1,0,0,0,111,112,5,111,0,0,112,113,5,114,0,0,113,42,1,0,0,0,114,115,5,61,
	0,0,115,44,1,0,0,0,116,117,5,47,0,0,117,118,5,42,0,0,118,122,1,0,0,0,119,
	121,9,0,0,0,120,119,1,0,0,0,121,124,1,0,0,0,122,123,1,0,0,0,122,120,1,0,
	0,0,123,125,1,0,0,0,124,122,1,0,0,0,125,126,5,42,0,0,126,127,5,47,0,0,127,
	128,1,0,0,0,128,129,6,22,0,0,129,46,1,0,0,0,130,131,5,47,0,0,131,132,5,
	47,0,0,132,136,1,0,0,0,133,135,8,0,0,0,134,133,1,0,0,0,135,138,1,0,0,0,
	136,134,1,0,0,0,136,137,1,0,0,0,137,139,1,0,0,0,138,136,1,0,0,0,139,140,
	5,10,0,0,140,141,1,0,0,0,141,142,6,23,0,0,142,48,1,0,0,0,143,145,7,1,0,
	0,144,143,1,0,0,0,145,50,1,0,0,0,146,147,7,2,0,0,147,52,1,0,0,0,148,149,
	5,116,0,0,149,150,5,114,0,0,150,151,5,117,0,0,151,158,5,101,0,0,152,153,
	5,102,0,0,153,154,5,97,0,0,154,155,5,108,0,0,155,156,5,115,0,0,156,158,
	5,101,0,0,157,148,1,0,0,0,157,152,1,0,0,0,158,54,1,0,0,0,159,161,3,51,25,
	0,160,159,1,0,0,0,161,162,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,170,
	1,0,0,0,164,166,5,46,0,0,165,167,3,51,25,0,166,165,1,0,0,0,167,168,1,0,
	0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,164,1,0,0,0,170,
	171,1,0,0,0,171,56,1,0,0,0,172,177,3,49,24,0,173,176,3,49,24,0,174,176,
	3,51,25,0,175,173,1,0,0,0,175,174,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,
	0,177,178,1,0,0,0,178,58,1,0,0,0,179,177,1,0,0,0,180,182,7,3,0,0,181,180,
	1,0,0,0,182,183,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,
	185,186,6,29,1,0,186,60,1,0,0,0,11,0,122,136,144,157,162,168,170,175,177,
	183,2,0,1,0,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!calclangLexer.__ATN) {
			calclangLexer.__ATN = new ATNDeserializer().deserialize(calclangLexer._serializedATN);
		}

		return calclangLexer.__ATN;
	}


	static DecisionsToDFA = calclangLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}