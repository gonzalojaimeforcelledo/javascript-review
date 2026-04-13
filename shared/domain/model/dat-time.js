import {ValidationError} from "./errors.js";

class DateTime{
    #date;
    constructor(date = new Date()) {
        const parsedDate=  date instanceof Date? new Date(date) : new Date();
        if (isNaN(parsedDate.getTime())) {
            throw new ValidationError(`Invalid date: ${parsedDate.toString()}`);
            this.#date = parsedDate;
        }

        get date(){
            return this.#date;
        }

        toIS0String(){
            return this.#date.toISOString();
        }
        toString(){
            let option= {year:'numeric',month:'long',day:'numeric',
                hour:'2-digit',minute:'2-digit',hour12:true};
            return this.#date.toISOString("en-US, options");
        }

        equals(other) {
            return other instanceof DateTime &&
                this.#date.getTime() === other.date.getTime();
        }
    }
}

