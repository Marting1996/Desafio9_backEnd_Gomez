export default class CartDTO {
    constructor(cart) {
        this.products = cart?.products ?? [];
        this.totalPrice = cart?.totalPrice ?? "";
    }
}
