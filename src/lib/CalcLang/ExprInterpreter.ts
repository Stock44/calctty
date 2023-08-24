import type { ExprVisitor } from '$lib/CalcLang/ExprVisitor';
import type { AssignmentExpr } from '$lib/CalcLang/AssignmentExpr';
import type { BooleanExpr } from '$lib/CalcLang/BooleanExpr';
import type { FunCallExpr } from '$lib/CalcLang/FunCallExpr';
import type { FuncAssignmentExpr } from '$lib/CalcLang/FuncAssignmentExpr';
import type { ExprNode } from '$lib/CalcLang/ExprNode';
import type { IdentifierExpr } from '$lib/CalcLang/IdentifierExpr';
import type { NumberExpr } from '$lib/CalcLang/NumberExpr';

import { BinaryOp, BinaryOpExpr } from '$lib/CalcLang/BinaryOpExpr';
import { UnaryOp, UnaryOpExpr } from '$lib/CalcLang/UnaryOpExpr';

type ExprEnv = Map<string, ExprNode>;

type ExprValue = number | boolean | string | undefined;

export class ExprInterpreter implements ExprVisitor<ExprValue> {
	env: ExprEnv;

	constructor(initialEnv: ExprEnv) {
		this.env = initialEnv;
	}

	visitAssignment(expr: AssignmentExpr): ExprValue {
		this.env.set(expr.identifier, expr.value);
		return expr.value.accept(this);
	}

	visitBinaryOp(expr: BinaryOpExpr): ExprValue {
		const lhs = expr.lhs.accept(this);
		const rhs = expr.rhs.accept(this);
		if (lhs === undefined || rhs === undefined) return undefined;
		switch (expr.op) {
			case BinaryOp.Sum:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs + rhs;
			case BinaryOp.Mult:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs * rhs;
			case BinaryOp.Div:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs / rhs;
			case BinaryOp.Sub:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs - rhs;
			case BinaryOp.Exp:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs ** rhs;
			case BinaryOp.Equal:
				return lhs === rhs;
			case BinaryOp.NotEq:
				return lhs !== rhs;
			case BinaryOp.LessThan:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs < rhs;
			case BinaryOp.LessThanEq:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs <= rhs;
			case BinaryOp.GreaterThan:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs > rhs;
			case BinaryOp.GreaterThanEq:
				if (typeof lhs != 'number' || typeof rhs != 'number') return undefined;
				return lhs >= rhs;
			case BinaryOp.And:
				if (typeof lhs != 'boolean' || typeof rhs != 'boolean') return undefined;
				return lhs && rhs;
			case BinaryOp.Or:
				if (typeof lhs != 'boolean' || typeof rhs != 'boolean') return undefined;
				return lhs || rhs;
		}
	}

	visitBoolean(expr: BooleanExpr): ExprValue {
		return expr.value;
	}

	visitFunCall(expr: FunCallExpr): ExprValue {
		const fun = this.env.get(expr.identifier) as FuncAssignmentExpr | undefined;

		if (fun == undefined) return undefined;

		// mapping of arg names to values
		const args: [string, ExprNode][] = fun.args.map(function (argName, i) {
			return [argName, expr.args[i]];
		});

		console.log(args);

		for (const [argName, argValue] of args) {
			this.env.set(argName, argValue);
		}

		const value = fun.value.accept(this);
		console.log(fun.value);

		for (const [argName] of args) {
			this.env.delete(argName);
		}

		return value;
	}

	visitFuncAssigment(expr: FuncAssignmentExpr): ExprValue {
		this.env.set(expr.identifier, expr);
		return undefined;
	}

	visitIdentifier(expr: IdentifierExpr): ExprValue {
		const value = this.env.get(expr.identifier);
		return value?.accept(this) ?? undefined;
	}

	visitNumber(expr: NumberExpr): ExprValue {
		return expr.value;
	}

	visitUnaryOp(expr: UnaryOpExpr): ExprValue {
		const target = expr.target.accept(this);
		if (target === undefined) return undefined;
		switch (expr.op) {
			case UnaryOp.Not:
				if (typeof target != 'boolean') return undefined;
				return !target;
			case UnaryOp.Negation:
				if (typeof target != 'number') return undefined;
				return -target;
			case UnaryOp.Positive:
				if (typeof target != 'number') return undefined;
				return +target;
		}
	}
}
