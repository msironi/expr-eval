export type Value = number
    | string
    | ((...args: Value[]) => Value)
    | { [propertyName: string]: Value };

export interface Values {
    [propertyName: string]: Value;
}

export interface ParserOptions {
  allowMemberAccess?: boolean;
  operators?: {
    add?: boolean,
    comparison?: boolean,
    concatenate?: boolean,
    conditional?: boolean,
    divide?: boolean,
    factorial?: boolean,
    logical?: boolean,
    multiply?: boolean,
    power?: boolean,
    remainder?: boolean,
    subtract?: boolean,
    sin?: boolean,
    cos?: boolean,
    tan?: boolean,
    asin?: boolean,
    acos?: boolean,
    atan?: boolean,
    sinh?: boolean,
    cosh?: boolean,
    tanh?: boolean,
    asinh?: boolean,
    acosh?: boolean,
    atanh?: boolean,
    sqrt?: boolean,
    log?: boolean,
    ln?: boolean,
    lg?: boolean,
    log10?: boolean,
    abs?: boolean,
    ceil?: boolean,
    floor?: boolean,
    round?: boolean,
    trunc?: boolean,
    exp?: boolean,
    length?: boolean,
    in?: boolean,
    random?: boolean,
    min?: boolean,
    max?: boolean,
    assignment?: boolean,
    fndef?: boolean,
    cbrt?: boolean,
    expm1?: boolean,
    log1p?: boolean,
    sign?: boolean,
    log2?: boolean,
    coalesce?: boolean,
    conversion?: boolean
  };
}

export class Parser {
    constructor(options?: ParserOptions);
    unaryOps: any;
    functions: any;
    consts: any;
    parse(expression: string): Expression;

    /**
     * Evaluate an expression.
     * @param expression The expression to evaluate.
     * @param values Input values to pass to the expression.
     * @returns The return value is the result of the expression; the type is dependent on
     * what type the expression returns.  Note that if the expression uses custom functions
     * that return promises, then the return value will be a promise which will contain the
     * expression value when resolved.
     */
    evaluate(expression: string, values?: Value): any;
    static parse(expression: string): Expression;

    /**
     * Evaluate an expression.
     * @param expression The expression to evaluate.
     * @param values Input values to pass to the expression.
     * @returns The return value is the result of the expression; the type is dependent on
     * what type the expression returns.
     */
    static evaluate(expression: string, values?: Value): any;
}

export interface Expression {
    simplify(values?: Value): Expression;

    /**
     * Evaluate an expression.
     * @param values Input values to pass to the expression.
     * @returns The return value is the result of the expression; the type is dependent on
     * what type the expression returns.  Note that if the expression uses custom functions
     * that return promises, then the return value will be a promise which will contain the
     * expression value when resolved.
     */
    evaluate(values?: Value): any;
    substitute(variable: string, value: Expression | string | number): Expression;
    symbols(options?: { withMembers?: boolean }): string[];
    variables(options?: { withMembers?: boolean }): string[];
    toJSFunction(params: string | string[], values?: Value): (...args: any[]) => number;
}
