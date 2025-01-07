import ts from "typescript";
import type { Context } from "../NodeParser.js";
import type { SubNodeParser } from "../SubNodeParser.js";
import type { BaseType } from "../Type/BaseType.js";
import { UndefinedType } from "../Type/UndefinedType.js";

export class UndefinedTypeNodeParser implements SubNodeParser {
    public supportsNode(node: ts.KeywordTypeNode): boolean {
        return node.kind === ts.SyntaxKind.UndefinedKeyword;
    }
    public createType(node: ts.KeywordTypeNode, context: Context): BaseType {
        return new UndefinedType();
    }
}
