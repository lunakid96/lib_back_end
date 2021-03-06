const result = (json) => ({
    errorCode: 0,
    data: json
});

const error = (code, message) => ({
    message,
    errorCode: code,
});

module.exports = {
    Result: result,
    ErrorResult: error
}