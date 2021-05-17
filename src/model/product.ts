import {ProductStatus} from "./enums";

interface namedParameter {
  _id: string;
  flashSale: boolean;
  name: string;
  shortName: string;
  paymentOption: {};
  discount: number;
  stock: number;
  viewCount: number;
  gallery: String[];
  description: {} | undefined;
  returned: any;
  warranty: any;
  variant: any;
  reviews: [];
  comments: [];
  publish: [];
  status: ProductStatus;
  price: number;
  mainCategory: string;
  subcategory: string;
  childCategory: string;
  brand: string;
  image: string;
  tags: string;
  slug: string;
  vendor: string;
  createdAt: string;
  updatedAt: string;
  favrouit: boolean;
  latest: boolean;
}

export default class Product {
  _id!: string;
  name!: string;
  shortName!: string;
  paymentOption!: {};
  discount!: number;
  stock!: number;
  viewCount!: number;
  gallery!: String[];
  description: {} | undefined;
  returned: any;
  warranty: any;
  variant: any;
  reviews!: [];
  comments!: [];
  publish!: [];
  status!: ProductStatus;
  price!: number;
  mainCategory!: string;
  subcategory!: string;
  childCategory!: string;
  brand!: string;
  image!: string;
  tags!: string;
  slug!: string;
  vendor!: string;
  createdAt!: string;
  updatedAt!: string;
  favrouit!: boolean;
  flashSell = false;
  latest = false;
  //   constructor({
  //     _id,
  //     name,
  //     shortName,
  //     paymentOption,
  //     discount,
  //     stock,
  //     viewCount,
  //     gallery,
  //     description,
  //     returned,
  //     warranty,
  //     variant,
  //     reviews,
  //     comments,
  //     publish,
  //     status,
  //     price,
  //     mainCategory,
  //     subcategory,
  //     childCategory,
  //     brand,
  //     image,
  //     tags,
  //     slug,
  //     vendor,
  //     createdAt,
  //     updatedAt,
  //     favrouit = false,
  //   }: namedParameter) {
  //     this._id = _id;
  //     this.name = name;
  //     this.shortName = shortName;
  //     this.paymentOption = paymentOption;
  //     this.discount = discount;
  //     this.stock = stock;
  //     this.viewCount = viewCount;
  //     this.gallery = gallery;
  //     this.description = description;
  //     this.returned = returned;
  //     this.warranty = warranty;
  //     this.variant = variant;
  //     this.reviews = reviews;
  //     this.comments = comments;
  //     this.publish = publish;
  //     this.status = status;
  //     this.price = price;
  //     this.mainCategory = mainCategory;
  //     this.subcategory = subcategory;
  //     this.childCategory = childCategory;
  //     this.brand = brand;
  //     this.image = image;
  //     this.tags = tags;
  //     this.slug = slug;
  //     this.vendor = vendor;
  //     this.createdAt = createdAt;
  //     this.updatedAt = updatedAt;
  //     this.favrouit = favrouit;
  //   }

  fromJson = (element: any) => {
    this._id = element._id;
    this.brand = element.brand;
    this.comments = element.comments;
    this.createdAt = element.createdAt;
    this.childCategory = element.childCategory;
    this.description = element.description;
    this.discount = element.discount;
    this.favrouit = false;
    this.flashSell = element.flashSale;
    this.gallery = element.gallery;
    this.image = element.image;
    this.mainCategory = element.mainCategory;
    this.name = element.name;
    this.paymentOption = element.paymentOption;
    this.price = element.price;
    this.publish = element.publish;
    this.returned = element.return;
    this.reviews = element.reviews;
    this.shortName = element.shortname;
    this.slug = element.slug;
    this.status = element.status;
    this.stock = element.stock;
    this.subcategory = element.subCategory;
    this.tags = element.tags;
    this.updatedAt = element.updatedAt;
    this.variant = element.variant;
    this.vendor = element.vendor;
    this.viewCount = element.viewCount;
    this.warranty = element.warrenty;
  };
}
