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

export type UnaryOperator =
  | '-'
  | '+'
  | '!'
  | 'abs'
  | 'acos'
  | 'acosh'
  | 'asin'
  | 'asinh'
  | 'atan'
  | 'atanh'
  // 11
  | 'cbrt'
  | 'ceil'
  | 'cos'
  | 'cosh'
  | 'exp'
  | 'expm1'
  | 'floor'
  | 'length'
  | 'lg'
  | 'ln'
  // 21
  | 'log'
  | 'log1p'
  | 'log2'
  | 'log10'
  | 'not'
  | 'round'
  | 'sign'
  | 'sin'
  | 'sinh'
  | 'sqrt'
  // 31
  | 'tan'
  | 'tanh'
  | 'trunc'
  ;

export type BinaryOperator =
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '^'
  | '||'
  | '=='
  | '!='
  | '>'
  // 11
  | '<'
  | '>='
  | '<='
  | '='
  | '[xxx]'
  | 'and'
  | 'in'
  | 'or'
  | '??'
  | 'as'
  ;

export class Parser {
    constructor(options?: ParserOptions);
    binaryOps: Record<BinaryOperator, (value1: any, value2: any) => any>;
    unaryOps: Record<UnaryOperator, (value: any) => any>;
    functions: Record<string, Function>;
    consts: Record<string, any>;

    /**
     * Provides custom variable name resolution when a variable name is not recognized.  This property
     * can be set to a callback that will be called whenever a variable name is not recognized to provide
     * custom variable name resolution.
     * @param token The name of the variable that could not be resolved.
     * @returns One of the following:
     * * An object with an `alias` property; if this is returned then the token will be
     * treated as if it was the value of the `alias` property.
     * * An object with a 'value' property; if this is returned then the value of the
     * `value` property will be used as the value of the token.
     * * `undefined`; if this is returned then the token is considered unresolved.
     */
    resolve: (token: string) => { alias: string } | { value: any } | undefined;

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
