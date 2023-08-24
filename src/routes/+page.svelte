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
</script>

<div class="flex w-screen h-screen">
    <div contenteditable class="flex-1" bind:innerText={fileContents} on:input={handleInput} />
    <div class="flex-1 whitespace-pre-line">{values}</div>
</div>