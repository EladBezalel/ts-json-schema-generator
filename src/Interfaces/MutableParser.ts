import type { SubNodeParser } from "./SubNodeParser.js";

export interface MutableParser {
    addNodeParser(parser: SubNodeParser): MutableParser;
}
