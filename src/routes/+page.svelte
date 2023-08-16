<script lang="ts">
    import { CharStreams, CommonTokenStream, } from 'antlr4ts';
    import { CalcLangLexer } from '$lib/CalcLang/CalcLangLexer';
    import {
        AssigmentContext,
        BinaryOpContext,
        BooleanContext,
        CalcLangParser,
        ExprContext,
        ExprListContext,
        FileContext,
        FuncAssignmentContext,
        FuncCallContext,
        IdentifierContext,
        IdentifierListContext,
        ImplicitMulContext,
        NumberContext,
        ParenthesesContext,
        UnaryOpContext,
        ValueContext
    } from '$lib/CalcLang/CalcLangParser';
    import type { CalcLangVisitor } from '$lib/CalcLang/CalcLangVisitor';
    import type { ErrorNode, ParseTree, RuleNode } from 'antlr4ts/tree';
    import type { TerminalNode } from 'antlr4ts/tree/TerminalNode';

    let fileContents = '';

    enum NodeType {
        File,
        Expr,
    }

    enum ExprType {
        FunctionCall,
        UnaryOp,
        BinaryOp,
        FuncAssigment,
        Assignment,
        Identifier,
        Boolean,
        Number
    }

    enum UnaryOp {
        Not,
        Negation,
        Positive,
    }

    const UnaryOpMap = new Map([
        ['!', UnaryOp.Not],
        ['not', UnaryOp.Not],
        ['-', UnaryOp.Negation],
        ['+', UnaryOp.Positive]
    ]);

    enum BinaryOp {
        Sum,
        Mult,
        Div,
        Sub,
        Exp,
        Equal,
        NotEq,
        LessThan,
        LessThanEq,
        GreaterThan,
        GreaterThanEq,
        And,
        Or
    }

    const BinaryOpMap = new Map([
        ['+', BinaryOp.Sum],
        ['*', BinaryOp.Mult],
        ['/', BinaryOp.Div],
        ['-', BinaryOp.Sub],
        ['^', BinaryOp.Exp],
        ['==', BinaryOp.Equal],
        ['!=', BinaryOp.NotEq],
        ['<', BinaryOp.LessThan],
        ['<=', BinaryOp.LessThanEq],
        ['>', BinaryOp.GreaterThan],
        ['>=', BinaryOp.GreaterThanEq],
        ['&&', BinaryOp.And],
        ['and', BinaryOp.And],
        ['||', BinaryOp.Or],
        ['or', BinaryOp.Or],
    ]);

    type Identifier = string;

    interface ASTNode {
        type: NodeType,
    }

    interface File extends ASTNode {
        lines: Expression[];
    }

    interface Expression extends ASTNode {
        exprType: ExprType,
    }

    interface FunctionCallExpr extends Expression {
        identifier: Identifier,
        args: Expression[],
    }

    interface UnaryOpExpr extends Expression {
        op: UnaryOp,
        target: Expression,
    }

    interface BinaryOpExpr extends Expression {
        op: BinaryOp,
        lhs: Expression,
        rhs: Expression,
    }

    interface FuncAssignmentExpr extends Expression {
        identifier: Identifier,
        args: string[],
        value: Expression,
    }

    interface AssignmentExpr extends Expression {
        identifier: Identifier,
        value: Expression,
    }

    interface IdentifierExpr extends Expression {
        value: Identifier,
    }

    interface NumberExpr extends Expression {
        value: number,
    }

    interface BooleanExpr extends Expression {
        value: boolean,
    }


    class CalcLangInterpreter implements CalcLangVisitor<ASTNode> {
        visitChildren(node: RuleNode): ASTNode {
            return node.accept(this);
        }

        visit(tree: ParseTree): ASTNode {
            return tree.accept(this);
        }

        visitErrorNode(node: ErrorNode): ASTNode {
            return node.accept(this);
        }

        visitTerminal(node: TerminalNode): ASTNode {
            return node.accept(this);
        }

        visitFile(ctx: FileContext): File {
            if (!ctx.children) {
                return {
                    type: NodeType.File,
                    lines: [],
                };
            }

            const lines = ctx.children
                .filter(child => child instanceof ExprContext)
                .map(child => child.accept(this)) as Expression[];

            return {
                type: NodeType.File,
                lines,
            };
        };

        visitValue = (ctx: ValueContext): Expression => {
            const value = ctx.getChild(0);
            return value.accept(this) as Expression;
        };

        visitParentheses = (ctx: ParenthesesContext): Expression => {
            return ctx.getChild(1).accept(this) as Expression;
        };

        visitFuncCall = (ctx: FuncCallContext): FunctionCallExpr => {
            const args = ctx
                .exprList()
                ?.children
                ?.filter(child => child.text != ',')
                ?.map(child => child.accept(this) as Expression) ?? [];

            return {
                type: NodeType.Expr,
                exprType: ExprType.FunctionCall,
                identifier: ctx.getChild(0).text,
                args,
            };
        };

        visitUnaryOp = (ctx: UnaryOpContext): UnaryOpExpr => {
            let op = UnaryOpMap.get(ctx.getChild(0).text);


            if (!op) {
                throw Error(`unknown operator ${ctx.getChild(0).text}`);
            }

            return {
                type: NodeType.Expr,
                exprType: ExprType.UnaryOp,
                op,
                target: ctx.getChild(1).accept(this) as Expression
            };
        };

        visitBinaryOp = (ctx: BinaryOpContext): BinaryOpExpr => {
            let op = BinaryOpMap.get(ctx.getChild(1).text);

            if (op === undefined) {
                throw Error(`unknown operator ${ctx.getChild(1).text}`);
            }

            return {
                type: NodeType.Expr,
                exprType: ExprType.BinaryOp,
                op,
                lhs: ctx.getChild(0).accept(this) as Expression,
                rhs: ctx.getChild(2).accept(this) as Expression,
            };
        };

        visitImplicitMul = (ctx: ImplicitMulContext): BinaryOpExpr => {
            return {
                type: NodeType.Expr,
                exprType: ExprType.BinaryOp,
                op: BinaryOp.Mult,
                lhs: ctx.getChild(0).accept(this) as Expression,
                rhs: ctx.getChild(1).accept(this) as Expression,
            };
        };

        visitFuncAssignment = (ctx: FuncAssignmentContext): FuncAssignmentExpr => {
            let args = ctx
                .getChild(2, IdentifierListContext)
                ?.children
                ?.map(child => child.text)
                ?.filter(child => child != ',') ?? [];
            return {
                type: NodeType.Expr,
                exprType: ExprType.FuncAssigment,
                identifier: ctx.getChild(0).text,
                args,
                value: ctx.getChild(5).accept(this) as Expression,
            };
        };

        visitAssigment = (ctx: AssigmentContext): AssignmentExpr => {
            return {
                type: NodeType.Expr,
                exprType: ExprType.Assignment,
                identifier: ctx.getChild(0).text,
                value: ctx.getChild(2).accept(this) as Expression,
            };
        };

        visitIdentifier = (ctx: IdentifierContext): IdentifierExpr => {
            return {
                type: NodeType.Expr,
                exprType: ExprType.Identifier,
                value: ctx.text
            };
        };

        visitNumber = (ctx: NumberContext): NumberExpr => {
            return {
                type: NodeType.Expr,
                exprType: ExprType.Number,
                value: Number(ctx.text)
            };
        };

        visitBoolean = (ctx: BooleanContext): BooleanExpr => {
            return {
                type: NodeType.Expr,
                exprType: ExprType.Boolean,
                value: ctx.text == 'true'
            };
        };
    }

    function handleInput() {
        const chars = CharStreams.fromString(fileContents);
        const lexer = new CalcLangLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new CalcLangParser(tokens);
        const tree = parser.file();

        console.log(tree.accept(new CalcLangInterpreter()));
    }
</script>

<div class="flex w-screen h-screen">
    <textarea class="flex-1" bind:value={fileContents} on:input={handleInput} />
    <div class="flex-1"></div>
</div>