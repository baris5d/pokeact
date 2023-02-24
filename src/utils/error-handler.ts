function handleError(
    error: any,
    callback?: (result: any, error?: boolean | any) => any,
) {
    if (callback) {
        callback(error, true);
    } else {
        throw error;
    }
}

export default handleError;
