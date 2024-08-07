export const required = value => {
    return value ? undefined : "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    return value && value.length > maxLength ? "Max length is 30 symbols" : undefined;
}