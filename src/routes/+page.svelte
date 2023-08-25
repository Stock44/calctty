<script lang="ts">
    import { CharStreams, CommonTokenStream } from 'antlr4ts';
    import { ASTBuilder, CalcLangLexer, CalcLangParser } from '$lib/CalcLang';
    import type { FileNode } from '$lib/CalcLang/ASTNode';
    import type { ExprNode } from '$lib/CalcLang/ExprNode';
    import { ExprInterpreter } from '$lib/CalcLang/ExprInterpreter';

    let fileContents = '';

    let values = '';

    function handleInput() {
        const chars = CharStreams.fromString(fileContents);
        const lexer = new CalcLangLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new CalcLangParser(tokens);
        const tree = parser.file();

        const ast = tree.accept(new ASTBuilder()) as FileNode;

        console.log(ast);

        values = '';
        let env = new Map<string, ExprNode>();
        for (const line of ast.lines) {
            const interpreter = new ExprInterpreter(env);
            const value = line.accept(interpreter);
            values = values.concat(`${value}\n`);
            env = interpreter.env;
        }
    }

    let title = 'untitled calc';
</script>

<div class="grid grid-cols-[3rem_1fr] grid-rows-[3rem_1fr] w-screen h-screen bg-slate-800 text-slate-50 font-mono">
    <header class="col-span-2 flex items-center gap-6 px-5 border-b-1 border-slate-700">
        <p class="font-bold">
            @calctty
        </p>
        <h1 contenteditable
            class="h-fit p-1 focus:bg-slate-800 border-1 border-transparent focus:border-slate-700 outline-0 rounded">
            untitled calc
        </h1>
    </header>
    <div class="col-span-1 flex flex-col py-2 gap-4 border-r-1 border-slate-700 text-slate-500 text-center">
        <span class="material-symbols-outlined">
            menu
        </span>
        <span class="material-symbols-outlined">
            home_storage
        </span>
        <span class="material-symbols-outlined">
            quick_reference
        </span>
        <span class="material-symbols-outlined">
            info
        </span>
    </div>
    <div class="flex col-span-1 bg-slate-900 border-slate-700">
        <div contenteditable autofocus class="flex-1" bind:innerText={fileContents} on:input={handleInput} />
        <div class="flex-1 whitespace-pre-line">{values}</div>
    </div>
</div>