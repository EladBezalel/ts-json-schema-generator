import ts from "typescript";
import type { Context, NodeParser } from "../NodeParser.js";
import type { SubNodeParser } from "../SubNodeParser.js";
import type { BaseType } from "../Type/BaseType.js";

export class LiteralNodeParser implements SubNodeParser {
    public constructor(protected childNodeParser: NodeParser) {}

    public supportsNode(node: ts.LiteralTypeNode): boolean {
        return node.kind === ts.SyntaxKind.LiteralType;
    }
    public createType(node: ts.LiteralTypeNode, context: Context): BaseType {
        return this.childNodeParser.createType(node.literal, context);
    }
}
