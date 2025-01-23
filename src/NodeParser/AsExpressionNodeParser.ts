import type { NodeParser } from "../NodeParser.js";
import ts from "typescript";
import type { Context } from "../NodeParser.js";
import type { SubNodeParser } from "../SubNodeParser.js";
import type { BaseType } from "../Type/BaseType.js";

export class AsExpressionNodeParser implements SubNodeParser {
    public constructor(protected childNodeParser: NodeParser) {}

    public supportsNode(node: ts.AsExpression): boolean {
        return node.kind === ts.SyntaxKind.AsExpression;
    }
    public createType(node: ts.AsExpression, context: Context): BaseType {
        // only implement `as const` for now where we just ignore the as expression
        return this.childNodeParser.createType(node.expression, context);
    }
}
