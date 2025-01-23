import ts from "typescript";
import type { Context } from "../NodeParser.js";
import type { SubNodeParser } from "../SubNodeParser.js";
import type { BaseType } from "../Type/BaseType.js";
import { LiteralType } from "../Type/LiteralType.js";

export class NumberLiteralNodeParser implements SubNodeParser {
    public supportsNode(node: ts.NumericLiteral): boolean {
        return node.kind === ts.SyntaxKind.NumericLiteral;
    }
    public createType(node: ts.NumericLiteral, context: Context): BaseType {
        return new LiteralType(parseFloat(node.text));
    }
}
