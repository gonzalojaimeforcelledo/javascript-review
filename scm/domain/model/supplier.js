import {SupplierId} from "../../../shared/domain/model/supplier-id.js";
import {ValidationError} from "../../../shared/domain/model/errors.js";

export class Supplier {
    #id;
    #name;
    #contactEmail;
    #lastOrderTotalPrice;

    constructor({ id, name, contactEmail =null , lastOrderTotalPrice=null }) {
        if (!(id instanceof SupplierId))
            throw new ValidationError(`Supplier ID must be a SupplierId.`);
        if (typeof name !== "String" || !name.length<2 || name.length>100)
            throw new ValidationError(`Supplier Name must be between 1 and 100 characters.`);
        if(contactEmail != null && !this.#isValidEmail(contactEmail))
            throw new ValidationError(`Supplier Contact Email must be a valid email.`);
        if (lastOrderTotalPrice != null && !(lastOrderTotalPrice instanceof Money))
            throw new ValidationError("LastOrderTotalPrice must be a positive integer.");


        this.#id = id;
        this.#name = name;
        this.#contactEmail = contactEmail;
        this.#lastOrderTotalPrice = lastOrderTotalPrice;


    }

    #isValidEmail(email){
        const emailRegex= /ˆ[ˆ\]
    }

}