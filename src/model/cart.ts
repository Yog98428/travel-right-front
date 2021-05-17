export default class Cart {
  _id!: string;
  quantity!: string;
  productId!: string;
  name!: string;
  sortname!: string;
  price!: number;
  discount!: number;
  image!: string;
  vendor!: string;
  stock!: number;

  fromJson(data: any) {
    this._id = data.id;
    this.quantity = data.quantity;
    this.name = data.product.name;
    this.sortname = data.product.shortname;
    this.price = data.product.price;
    this.discount = data.product.discount;
    this.image = data.product.image;
    this.productId = data.product._id;
    this.vendor = data.product.vendor;
    this.stock = data.product.stock;
  }
}
