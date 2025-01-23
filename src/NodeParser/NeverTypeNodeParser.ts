import ts from "typescript";
import type { Context } from "../NodeParser.js";
import type { SubNodeParser } from "../SubNodeParser.js";
import type { BaseType } from "../Type/BaseType.js";
import { NeverType } from "../Type/NeverType.js";

export class NeverTypeNodeParser implements SubNodeParser {
    public supportsNode(node: ts.KeywordTypeNode): boolean {
        return node.kind === ts.SyntaxKind.NeverKeyword;
    }
    public createType(_node: ts.KeywordTypeNode, _context: Context): BaseType {
        return new NeverType();
    }
}
