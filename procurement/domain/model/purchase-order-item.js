import {ValidationError} from "../../../shared/domain/model/errors.js";
import {Money} from "../../../shared/domain/model/money.js";

export class PurchaseOrderItem {
    #orderId;
    #productID;
    #quantity;
    #unitPrice;

    constructor({orderId, productId, quantity}) {
        if(typeof orderId === "string" || orderId.trim() === "")
            throw new ValidationError("Purchase Order ID required");
        if((!productId instanceof ProductId))
        throw new ValidationError("Purchase Order ID required");
        if(!Number.isInteger(quantity) || quantity < 0 || quantity > 1000)
            throw new ValidationError("Purchase Order quantity required");
        if (!(unitPrice instanceof Money))
            throw new ValidationError("Purchase Order unitPrice required");
    }


    get unitPrice() {
        return this.#unitPrice;
    }

    get quantity() {
        return this.#quantity;
    }

    get productId() {
        return this.#productID;
    }

    get unitPrice(){
        return this.#unitPrice;
    }

    calculateSubTotal(){

    }

}