import { LOGIN, LOGOUT, GET_LIST_PRODUCT, GET_PRODUCT_BY_ID, ADD_PRODUCT, DELETE_PRODUCT, DETAIL_PRODUCT, UPDATE_PRODUCT } from "../../actions/productAction";
const initialState = {
    isLogin: localStorage.getItem('token'),

    getListProductResult: false,
    getListProductLoading: false,
    getListProductError: false,

    getProductByIdResult: false,
    getProductByIdLoading: false,
    getProductByIdError: false,

    addProductResult: false,
    addProductLoading: false,
    addProductError: false,

    deleteProductResult: false,
    deleteProductLoading: false,
    deleteProductError: false,

    detailProductResult: false,

    updateProductResult: false
};

let ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: action.payload.data
            };
        case LOGOUT:
            console.log("logout reducer");
            return {
                ...state,
                isLogin: action.payload.data
            };

        case GET_LIST_PRODUCT:
            return {
                ...state,
                getListProductResult: action.payload.data,
                getListProductLoading: action.payload.loading,
                getListProductError: action.payload.errorMessage
            };
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                getProductByIdResult: action.payload.data,
                getProductByIdLoading: action.payload.loading,
                getProductByIdError: action.payload.errorMessage
            };
        case ADD_PRODUCT:
            return {
                ...state,
                addProductResult: action.payload.data,
                addProductLoading: action.payload.loading,
                addProductError: action.payload.errorMessage
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProductResult: action.payload.data,
                deleteProductLoading: action.payload.loading,
                deleteProductError: action.payload.errorMessage
            };
        case DETAIL_PRODUCT:
            return {
                ...state,
                detailProductResult: action.payload.data
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProductResult: action.payload.data,
                updateProductLoading: action.payload.loading,
                updateProductError: action.payload.errorMessage
            };
        default:
            return state;
    }
};


export default ProductReducer; 