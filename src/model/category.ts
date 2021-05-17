import {CategoryType} from "./enums";

interface namedParameter {
  _id: string;
  title: string;
  slug: string;
  subCategory: string | null;
  image: string | null;
  categoryId: string | null;
  type: CategoryType;
}
export default class Category {
  _id!: string;
  title!: string;
  slug!: string;
  image!: string | null;
  subCategoryId: string | null; // child category
  categoryId!: string | null; //sub category
  type!: CategoryType;
  constructor({
    _id,
    title,
    slug,
    subCategory = null,
    categoryId = null,
    type,
    image,
  }: namedParameter) {
    this._id = _id;
    this.title = title;
    this.slug = slug;
    this.subCategoryId = subCategory;
    this.categoryId = categoryId;
    this.type = type;
    this.image = image;
  }
}
// main
// --child
// ------child
