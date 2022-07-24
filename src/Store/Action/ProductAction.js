import { ProductType } from "../Type/ProductType"

export const productAction = (data) => {
    return {
        type: ProductType.PRODUCTTYPE,
        payload: data
    }
}

export const cartProductAction = (data) => {
    return {
        type: ProductType.CARTPRODUCTTYPE,
        payload: data
    }
}

export const removeProductAction = (data) => {
    return {
        type: ProductType.REMOVEPRODUCTTYPE,
        payload: data
    }
}

export const removeAllProductAction = () => {
    return {
        type: ProductType.REMOVEALLPRODUCTTYPE,
        payload: []
    }
}

export const incrementProductAction = (data) => {
    return {
        type: ProductType.INCREMENTPRODUCTTYPE,
        payload: data
    }
}

export const decrementProductAction = (data) => {
    return {
        type: ProductType.DECREMENTPRODUCTTYPE,
        payload: data
    }
}

export const wishlistProductAction = (data) => {
    return {
        type: ProductType.WISHLISTPRODUCTTYPE,
        payload: data
    }
}

export const removeWishlistProductAction = (data) => {
    return {
        type: ProductType.REMOVEWISHLISTPRODUCTTYPE,
        payload: data
    }
}

export const removeAllWishlistProductAction = (data) => {
    return {
        type: ProductType.REMOVEALLWISHLISTPRODUCTTYPE,
        payload: data
    }
}