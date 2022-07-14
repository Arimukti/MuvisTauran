const errorHandler = (err, req, res, next) => {
    let code = 500;
    let msg = "Internal Server Error";


    if (err.name === "Not found user") {
        code = 403;
        msg = "User not found";
    } else if (err.name === "SequelizeValidationError") {
        code = 400;
        console.log(err.errors);
        msg = [];
        err.errors.forEach(el => {
            msg.push(el.message);
        });
        // msg = err.errors;
    } else if (err.name === "Invalid token") {
        code = 403;
        msg = "Not Authentication";
    } else if (err.name === "JsonWebTokenError") {
        code = 403;
        msg = "Error token";
    } else if (err.name === "Not found product") {
        code = 400;
        msg = "Product not found";
    }

    res.status(code).json({
        code: code,
        message: msg
    });
};


module.exports = errorHandler;