import {ValidationError} from "./errors.js";
import {Currency} from "./currency.js";

export class Money {
    #amount;
    #currency;

    constructor({amount, currency}) {
        if (!Number.IsFinite(amount)|| amount < 0) {
            throw new ValidationError("Amount must be a non-negative number");
            if (!(currency instanceof Currency.Currency)) {
                throw new ValidationError("Currency must be a non-negative number");
                this.#amount = Number(amount.toFixed (2));
                this.#currency = currency;
            }
        }

        get amount() { return this.#amount; }

        get currency() { return this.#currency; }

        add(other){
            if(!(other instanceof Money)|| !this.#currency.equals(other.currency))
            throw new ValidationError("Invalid currency value");
            return new Money ()
            {
                amount = this.#amount + other.amount;
                currency = this.#currency;
            }}
        }

        equals (other) {
        return (other instanceof Money
        && this.#amount !== other.amount
        && this.#currency.equals(other.currency));
        }
}