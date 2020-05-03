export const setProfessionalData = (data) => ({
    type: "SET_PROFESSIONAL_DATA",
    payload: {
        data
    }
})

export const setServices = (services) => ({
    type: "SET_SERVICES",
    payload: {
        services
    }
})

export const setLacations = (locations) => ({
    type: "SET_LOCATIONS",
    payload: {
        locations
    }
})

export const setProduct = (product) => ({
    type: "SET_PRODUCT",
    payload: {
      product
    }
})
export const setProductToDetail = (productDetail) => ({
    type: "SET_PRODUCT_TO_DETAIL",
    payload: {
      productDetail
    }
})