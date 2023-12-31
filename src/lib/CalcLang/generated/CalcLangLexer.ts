// Generated from src/lib/CalcLang/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT


// Generated from src/lib/CalcLang/CalcLang.g4 by ANTLR 4.9.0-SNAPSHOT
import type { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import type { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import type { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CalcLangLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "BlockComment", "LineComment", "Character", 
		"Digit", "Boolean", "Number", "Identifier", "Newline", "Whitespace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'!'", "'not'", "'-'", "'+'", "'^'", "'*'", "'/'", "'=='", 
		"'!='", "'<'", "'<='", "'>'", "'>='", "'&&'", "'and'", "'||'", "'or'", 
		"'('", "')'", "'='", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "BlockComment", "LineComment", "Boolean", "Number", "Identifier", 
		"Newline", "Whitespace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcLangLexer._LITERAL_NAMES, CalcLangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcLangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CalcLangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CalcLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcLangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcLangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CalcLangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CalcLangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1E\xC0\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17y\n\x17\f\x17\x0E" +
		"\x17|\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x07\x18\x87\n\x18\f\x18\x0E\x18\x8A\v\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x19\x05\x19\x91\n\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\x9E" +
		"\n\x1B\x03\x1C\x06\x1C\xA1\n\x1C\r\x1C\x0E\x1C\xA2\x03\x1C\x03\x1C\x06" +
		"\x1C\xA7\n\x1C\r\x1C\x0E\x1C\xA8\x05\x1C\xAB\n\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\xB0\n\x1D\f\x1D\x0E\x1D\xB3\v\x1D\x03\x1E\x06\x1E\xB6\n\x1E" +
		"\r\x1E\x0E\x1E\xB7\x03\x1F\x06\x1F\xBB\n\x1F\r\x1F\x0E\x1F\xBC\x03\x1F" +
		"\x03\x1F\x03z\x02\x02 \x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v" +
		"\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x023\x02\x025\x02" +
		"\x1A7\x02\x1B9\x02\x1C;\x02\x1D=\x02\x1E\x03\x02\x06\x04\x02\f\f\x0F\x0F" +
		"\x04\x02C\\c|\x03\x022;\x04\x02\v\v\"\"\x02\xC7\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
		"\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02" +
		";\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x03?\x03\x02\x02\x02\x05A\x03\x02" +
		"\x02\x02\x07E\x03\x02\x02\x02\tG\x03\x02\x02\x02\vI\x03\x02\x02\x02\r" +
		"K\x03\x02\x02\x02\x0FM\x03\x02\x02\x02\x11O\x03\x02\x02\x02\x13R\x03\x02" +
		"\x02\x02\x15U\x03\x02\x02\x02\x17W\x03\x02\x02\x02\x19Z\x03\x02\x02\x02" +
		"\x1B\\\x03\x02\x02\x02\x1D_\x03\x02\x02\x02\x1Fb\x03\x02\x02\x02!f\x03" +
		"\x02\x02\x02#i\x03\x02\x02\x02%l\x03\x02\x02\x02\'n\x03\x02\x02\x02)p" +
		"\x03\x02\x02\x02+r\x03\x02\x02\x02-t\x03\x02\x02\x02/\x82\x03\x02\x02" +
		"\x021\x90\x03\x02\x02\x023\x92\x03\x02\x02\x025\x9D\x03\x02\x02\x027\xA0" +
		"\x03\x02\x02\x029\xAC\x03\x02\x02\x02;\xB5\x03\x02\x02\x02=\xBA\x03\x02" +
		"\x02\x02?@\x07#\x02\x02@\x04\x03\x02\x02\x02AB\x07p\x02\x02BC\x07q\x02" +
		"\x02CD\x07v\x02\x02D\x06\x03\x02\x02\x02EF\x07/\x02\x02F\b\x03\x02\x02" +
		"\x02GH\x07-\x02\x02H\n\x03\x02\x02\x02IJ\x07`\x02\x02J\f\x03\x02\x02\x02" +
		"KL\x07,\x02\x02L\x0E\x03\x02\x02\x02MN\x071\x02\x02N\x10\x03\x02\x02\x02" +
		"OP\x07?\x02\x02PQ\x07?\x02\x02Q\x12\x03\x02\x02\x02RS\x07#\x02\x02ST\x07" +
		"?\x02\x02T\x14\x03\x02\x02\x02UV\x07>\x02\x02V\x16\x03\x02\x02\x02WX\x07" +
		">\x02\x02XY\x07?\x02\x02Y\x18\x03\x02\x02\x02Z[\x07@\x02\x02[\x1A\x03" +
		"\x02\x02\x02\\]\x07@\x02\x02]^\x07?\x02\x02^\x1C\x03\x02\x02\x02_`\x07" +
		"(\x02\x02`a\x07(\x02\x02a\x1E\x03\x02\x02\x02bc\x07c\x02\x02cd\x07p\x02" +
		"\x02de\x07f\x02\x02e \x03\x02\x02\x02fg\x07~\x02\x02gh\x07~\x02\x02h\"" +
		"\x03\x02\x02\x02ij\x07q\x02\x02jk\x07t\x02\x02k$\x03\x02\x02\x02lm\x07" +
		"*\x02\x02m&\x03\x02\x02\x02no\x07+\x02\x02o(\x03\x02\x02\x02pq\x07?\x02" +
		"\x02q*\x03\x02\x02\x02rs\x07.\x02\x02s,\x03\x02\x02\x02tu\x071\x02\x02" +
		"uv\x07,\x02\x02vz\x03\x02\x02\x02wy\v\x02\x02\x02xw\x03\x02\x02\x02y|" +
		"\x03\x02\x02\x02z{\x03\x02\x02\x02zx\x03\x02\x02\x02{}\x03\x02\x02\x02" +
		"|z\x03\x02\x02\x02}~\x07,\x02\x02~\x7F\x071\x02\x02\x7F\x80\x03\x02\x02" +
		"\x02\x80\x81\b\x17\x02\x02\x81.\x03\x02\x02\x02\x82\x83\x071\x02\x02\x83" +
		"\x84\x071\x02\x02\x84\x88\x03\x02\x02\x02\x85\x87\n\x02\x02\x02\x86\x85" +
		"\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89" +
		"\x03\x02\x02\x02\x89\x8B\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C" +
		"\x05;\x1E\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\b\x18\x02\x02\x8E0\x03\x02" +
		"\x02\x02\x8F\x91\t\x03\x02\x02\x90\x8F\x03\x02\x02\x02\x912\x03\x02\x02" +
		"\x02\x92\x93\t\x04\x02\x02\x934\x03\x02\x02\x02\x94\x95\x07v\x02\x02\x95" +
		"\x96\x07t\x02\x02\x96\x97\x07w\x02\x02\x97\x9E\x07g\x02\x02\x98\x99\x07" +
		"h\x02\x02\x99\x9A\x07c\x02\x02\x9A\x9B\x07n\x02\x02\x9B\x9C\x07u\x02\x02" +
		"\x9C\x9E\x07g\x02\x02\x9D\x94\x03\x02\x02\x02\x9D\x98\x03\x02\x02\x02" +
		"\x9E6\x03\x02\x02\x02\x9F\xA1\x053\x1A\x02\xA0\x9F\x03\x02\x02\x02\xA1" +
		"\xA2\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3" +
		"\xAA\x03\x02\x02\x02\xA4\xA6\x070\x02\x02\xA5\xA7\x053\x1A\x02\xA6\xA5" +
		"\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9" +
		"\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xA4\x03\x02\x02\x02\xAA\xAB" +
		"\x03\x02\x02\x02\xAB8\x03\x02\x02\x02\xAC\xB1\x051\x19\x02\xAD\xB0\x05" +
		"1\x19\x02\xAE\xB0\x053\x1A\x02\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02" +
		"\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02" +
		"\x02\x02\xB2:\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB6\t\x02\x02" +
		"\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB5\x03\x02\x02" +
		"\x02\xB7\xB8\x03\x02\x02\x02\xB8<\x03\x02\x02\x02\xB9\xBB\t\x05\x02\x02" +
		"\xBA\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02" +
		"\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\b\x1F\x02\x02" +
		"\xBF>\x03\x02\x02\x02\x0E\x02z\x88\x90\x9D\xA2\xA8\xAA\xAF\xB1\xB7\xBC" +
		"\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLangLexer.__ATN) {
			CalcLangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLangLexer._serializedATN));
		}

		return CalcLangLexer.__ATN;
	}

}

