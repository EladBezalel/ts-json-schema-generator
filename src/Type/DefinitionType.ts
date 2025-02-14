import { BaseType } from "./BaseType.js";

export class DefinitionType extends BaseType {
    public constructor(
        private name: string | undefined,
        private type: BaseType,
    ) {
        super();
    }

    public getId(): string {
        return `def-${this.type.getId()}`;
    }

    public getName(): string {
        return this.name || super.getName();
    }

    public getType(): BaseType {
        return this.type;
    }
}
