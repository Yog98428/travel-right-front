// category type
export enum CategoryType {
  MAIN,
  SUB,
  CHILD,
}
// product status
export enum ProductStatus {
  Pending,
  Approved,
  Suspended,
}

// category process reducer
export enum CategoryProcess {
  FETCH,
}

// product process reducer
export enum ProductProcess {
  FETCH_FLASH,
  LATEST_PRODUCT,
}

export enum ProfileProcess {
  LOGIN,
  REGISTER,
  CART,
}
