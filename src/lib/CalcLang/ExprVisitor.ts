import type { FunCallExpr } from '$lib/CalcLang/FunCallExpr';
import type { UnaryOpExpr } from '$lib/CalcLang/UnaryOpExpr';
import type { BinaryOpExpr } from '$lib/CalcLang/BinaryOpExpr';
import type { FuncAssignmentExpr } from '$lib/CalcLang/FuncAssignmentExpr';
import type { AssignmentExpr } from '$lib/CalcLang/AssignmentExpr';
import type { NumberExpr } from '$lib/CalcLang/NumberExpr';
import type { BooleanExpr } from '$lib/CalcLang/BooleanExpr';
import type { IdentifierExpr } from '$lib/CalcLang/IdentifierExpr';

export interface ExprVisitor<T> {
	visitFunCall(expr: FunCallExpr): T;

	visitUnaryOp(expr: UnaryOpExpr): T;

	visitBinaryOp(expr: BinaryOpExpr): T;

	visitFuncAssigment(expr: FuncAssignmentExpr): T;

	visitAssignment(expr: AssignmentExpr): T;

	visitNumber(expr: NumberExpr): T;

	visitBoolean(expr: BooleanExpr): T;

	visitIdentifier(expr: IdentifierExpr): T;
}
