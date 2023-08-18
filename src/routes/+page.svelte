<script lang="ts">
    import { CharStreams, CommonTokenStream } from 'antlr4ts';
    import { ASTBuilder, CalcLangLexer, CalcLangParser } from '$lib/CalcLang';

    let fileContents = '';

    function handleInput() {
        const chars = CharStreams.fromString(fileContents);
        const lexer = new CalcLangLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new CalcLangParser(tokens);
        const tree = parser.file()

        console.log(tree.accept(new ASTBuilder()));
    }
</script>

<div class="flex w-screen h-screen">
    <div contenteditable class="flex-1" bind:innerHTML={fileContents} on:input={handleInput} />
    <div class="flex-1"></div>
</div>