import axios from 'axios';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const loginUser = (data) => {
    console.log('masuk action login bos');
    console.log(data);

    if (data.username !== '' && data.password === "12345") {
        localStorage.setItem('token', 'xvzft');
    }

    return (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: {
                data: localStorage.getItem('token')
            }
        });
    };
};

export const logoutUser = () => {
    console.log('masuk logout');
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
            payload: {
                data: null
            }
        });
    };
};

export const getListProduct = () => {
    console.log("2. Masuk action");
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get API
        axios({
            method: "GET",
            url: "http://localhost:3000/products",
            timeout: 120000
        })
            .then((response) => {
                //berhasil get API
                console.log("3. Berhasil get API: ", response.data);
                dispatch({
                    type: GET_LIST_PRODUCT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((error) => {
                //gagal get API
                console.log("3. Gagal get API");
                dispatch({
                    type: GET_LIST_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                });
            });
    };
};

export const getProductById = (id) => {
    console.log("2. Masuk action");
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get API
        axios({
            method: "GET",
            url: "http://localhost:3000/products/" + id,
            timeout: 120000
        })
            .then((response) => {
                //berhasil get API
                console.log("3. Berhasil get API: ", response.data);
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((error) => {
                //gagal get API
                console.log("3. Gagal get API");
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                });
            });
    };
};

export const addProduct = (data) => {
    console.log("2. Masuk action");
    return (dispatch) => {
        //loading
        dispatch({
            type: ADD_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get API
        axios({
            method: "POST",
            url: "http://localhost:3000/products",
            timeout: 120000,
            data: data
        })
            .then((response) => {
                //berhasil get API
                console.log("3. Berhasil get API: ", response.data);
                dispatch({
                    type: ADD_PRODUCT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((error) => {
                //gagal get API
                console.log("3. Gagal get API");
                dispatch({
                    type: ADD_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                });
            });
    };
};

export const deleteProduct = (id) => {
    console.log("2. Masuk action delete bang");
    return (dispatch) => {
        //loading
        dispatch({
            type: DELETE_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get API
        axios({
            method: "DELETE",
            url: "http://localhost:3000/products/" + id,
            timeout: 120000,
        })
            .then((response) => {
                //berhasil get API
                console.log("3. Berhasil get API delete bang: ", response.data);
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((error) => {
                //gagal get API
                console.log(error);
                console.log("3. Gagal get API delete bang");
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                });
            });
    };
};

export const detailProduct = (data) => {
    console.log(data, 'ini data detail');
    return (dispatch) => {
        dispatch({
            type: DETAIL_PRODUCT,
            payload: {
                data: data
            }
        });
    };
};

export const updateProduct = (data) => {
    console.log("2. Masuk action");
    return (dispatch) => {
        //loading
        dispatch({
            type: UPDATE_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get API
        axios({
            method: "PUT",
            url: "http://localhost:3000/products/" + data.id,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                //berhasil get API
                console.log("3. Berhasil get API: ", response.data);
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((error) => {
                //gagal get API
                console.log("3. Gagal get API");
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                });
            });
    };
};