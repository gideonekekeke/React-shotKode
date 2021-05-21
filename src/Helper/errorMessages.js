
export const getErrorMessage = (errObj) => {
    const errResponse = errObj.response || null;

    const errorMessage =
        errResponse === null
            ? 'Something went Wrong Please try again'
            : errResponse &&
              errResponse.data &&
              errResponse.data.message &&
              errResponse.data.message.message
            ? errResponse.data.message.message
            : errResponse.data.message
            ? errResponse.data.message
            : 'Something went Wrong Please try again';
    return errorMessage;
};

