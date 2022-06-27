function displayErrors(error, getValues, setError) {
    const errs = error.response.data || [];
    let gotUsefulMessage = false;
    for (const field of Object.keys(getValues())) {
        if (errs[field]) {
            gotUsefulMessage = true;
            setError(field, {
                type: "server",
                message: errs[field].join(' | ')})
        }
    }
    if (!gotUsefulMessage) {
        alert('something has gone wrong!');
    }
}

export {displayErrors}