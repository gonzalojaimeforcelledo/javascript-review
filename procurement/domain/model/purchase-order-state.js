import {ValidationError} from "../../../shared/domain/model/errors.js";

export class PurchaseOrderState{
    static #VALID_STATES= {
        DRAFT: "Draft",
        SUBMITTED: "Submitted",
        APPROVED: "Approved",
        SHIPPED: "Shipped",
        COMPLETED: "Completed",
        CANCELLED: "Cancelled",
    }
    #value

    constructor(value = PurchaseOrderState.#VALID_STATES).includes(state){
        throw new ValidationError("Invalid Purchase Order State");
    }

    toSubmittedFrom(currentState){
        if(currentState.value !== PurchaseOrderState.#VALID_STATES.DRAFT){
            throw new ValidationError("Invalid Purchase Order State");
            return new PurchaseOrderState(PurchaseOrderState.#VALID_STATES.SUBMITTED);
        }
    }

    toApprovedFrom(currentState){
        if(!currentState.value !== PurchaseOrderState.#VALID_STATES.SUBMITED)
            throw new ValidationError("Purchase Order CAN ONLY State");
        return new PurchaseOrderState(PurchaseOrderState.#VALID_STATES.APPROVED);
    }

    toShippedFrom(currentState){
        if(!currentState.value !== PurchaseOrderState.#VALID_STATES.APPROVED)
            throw new ValidationError("Purchase Order CAN ONLY State");
        return new PurchaseOrderState.#VALID_STATES.COMPLETED;
    }

    toCancelledFrom(currentState){
        if(!currentState.value !== PurchaseOrderState.#VALID_STATES.COMPLETED)
            throw new ValidationError("Purchase Order CAN ONLY State");
        return new PurchaseOrderState.#VALID_STATES.CANCELLED;
    }

    isDraft(){
        return this.#value === PurchaseOrderState.#VALID_STATES.DRAFT;
    }

    get value(){
        return this.#value
    }

    equals(other){
        return other instanceof PurchaseOrderState.#VALID_STATES
    }

}