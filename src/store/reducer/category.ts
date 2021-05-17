import Category from "../../model/category";
import { CategoryProcess, CategoryType } from "../../model/enums";
import {
  FETCH_CATEGORY_START,
  FETCH_CATEGORY_SUCCESS,
  FETCH_PRODUCT_Fail,
} from "../action/actionTypes";

const init = {
  loading: false,
  categories: [Category],
  error: null,
  categoryProcess: null,
};

const fetchCategoryStart = (state: any, data: any) => {
  return {
    ...state,
    loading: true,
    categoryProcess: CategoryProcess.FETCH,
  };
};
const fetchCategoryFail = (state: any, data: any) => {
  return {
    ...state,
    loading: false,
    error: data.message,
    categoryProcess: null,
  };
};

const fetchCategorySuccess = (state: any, data: any) => {
  let categories: Category[] = [];
  data.data.forEach((element: any) => {
    const _category = new Category({
      _id: element._id,
      slug: element.slug,
      title: element.name,
      categoryId: null,
      subCategory: null,
      type: CategoryType.MAIN,
      image: element.image,
    });
    categories.push(_category);
    if (element.children.length > 0) {
      element.children.forEach((e: any) => {
        const _category1 = new Category({
          _id: e._id,
          slug: e.slug,
          title: e.name,
          categoryId: element._id,
          subCategory: null,
          type: CategoryType.SUB,
          image: e.image,
        });
        categories.push(_category1);
        if (e.children.length > 0) {
          e.children.forEach((f: any) => {
            const _category2 = new Category({
              _id: f._id,
              slug: f.slug,
              title: f.name,
              categoryId: element._id,
              subCategory: e._id,
              type: CategoryType.CHILD,
              image: f.image,
            });
            categories.push(_category2);
          });
        }
      });
    }
  });
  return {
    ...state,
    categories: categories,
    loading: false,
    categoryProcess: null,
  };
};

const reducer = (state = init, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_CATEGORY_START:
      return fetchCategoryStart(state, action.payload);
    case FETCH_PRODUCT_Fail:
      return fetchCategoryFail(state, action.payload);
    case FETCH_CATEGORY_SUCCESS:
      return fetchCategorySuccess(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
