const fitStringSize = (string, size, char) => {
    if (char === undefined) char = " ";
    return string + char.repeat(size - string.length);
};

const twoColumnTopLinePrint = () => {
    const twoColumnTopLineString = () => {
        return (
            "┌" +
            "─".repeat(10) +
            "DeSOLE.log" +
            "─".repeat(18) +
            "┬" +
            "─".repeat(10) +
            "┬" +
            "─".repeat(27) +
            "┐"
        );
    };
    console.log(twoColumnTopLineString());
};

const twoColumnMiddleLinePrint = () => {
    const twoColumnMiddleLineString = () => {
        return (
            "├" +
            "─".repeat(10) +
            "┼" +
            "─".repeat(27) +
            "┼" +
            "─".repeat(10) +
            "┼" +
            "─".repeat(27) +
            "┤"
        );
    };
    console.log(twoColumnMiddleLineString());
};

const twoColumnTopLineString = () => {
    return (
        "┌" +
        "─".repeat(10) +
        "DeSOLE.log" +
        "─".repeat(18) +
        "┬" +
        "─".repeat(10) +
        "┬" +
        "─".repeat(27) +
        "┐"
    );
};

const twoColumnFormat = (nameC1, valueC1, nameC2, valueC2) => {
    const indexSize = 10;
    const valueSize = 39 - 2 - 10;

    return (
        "│" +
        fitStringSize(` ${nameC1}`, indexSize) +
        "│" +
        fitStringSize(` ${valueC1}`, valueSize) +
        "│" +
        fitStringSize(` ${nameC2}`, indexSize) +
        "│" +
        fitStringSize(` ${valueC2}`, valueSize) +
        "│"
    );
};

const headerBoxPrint = (type, name) => {
    twoColumnTopLinePrint();
    if (name === undefined) {
        console.log(twoColumnFormat("Type", type, "Name", "$ Unknown $"));
    } else {
        console.log(twoColumnFormat("Type", type, "Name", name));
    }
};

headerBoxPrint("Number", "asd");
twoColumnMiddleLinePrint();
