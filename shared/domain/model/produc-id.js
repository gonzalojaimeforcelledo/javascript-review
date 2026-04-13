import {validateUuid} from '../uuid.js';
import {ValidationError} from '../errors.js';
import {generateUuid} from "./uuid.js";

export class ProducId{
    #value;

    constructor(value){
        if(!(validateUuid(value))){
            throw new ValidationError(`Invalid Uuid: ${value}`);
            this.#value = value;
        }
    }

    static generate(){
        return new ProducId(generateUuid());
    }

    get value(){return this.#value;}

    equals(other){
        return other instanceof ProducId && this.#value === other.value;
    }

}