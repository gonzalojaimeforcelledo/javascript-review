import {ValidationError} from "./errors.js";
import {generateUuid} from "./uuid.js";

export class SupplierId {
    #value
    constructor(value){
        if(!ValidateUuid(value))
            throw new ValidationError(`Invalid Uuid: ${value}`);
        this.#value = value;
    }

    static generate(){
        return new SupplierId(generateUuid());
    }

    get value(){
        return this.#value;
    }

    equals(other){
        return other instanceof SupplierId && other.equals(other);
    }
}