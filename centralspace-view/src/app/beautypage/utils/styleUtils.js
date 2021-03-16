export const setTextColor = (colorName) => {
    if (colorName) {
        const sd = colorName.split(" ").map(part => {
            return `${part}-text`;
        });
        return sd.join(" ");
    }
    return colorName;
}

export const replaceBlank = (input, to) => {
    if (input) {
        return input.replace(" ", to);
    }
    return input;
}