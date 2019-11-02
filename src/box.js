const fitStringSize = (string, size, char) => {
    if (char === undefined) char = " ";
    return string + char.repeat(size - string.length);
};
// 39
const twoColumnFormat = (nameC1, valueC1, nameC2, valueC2) => {
    const indexSize = 10;
    const valueSize = 39 - 2 - 10;
    let formatString = "";

    formatString.concat(
        "│",
        fitStringSize(` ${nameC1}`, indexSize),
        "│",
        fitStringSize(` ${valueC1}`, valueSize),
        "│",
        fitStringSize(` ${nameC2}`, indexSize),
        "│",
        fitStringSize(` ${valueC2}`, valueSize),
        "│"
    );
    return formatString;
};

const headerBoxPrint = (type, name) => {
    console.log(`┌${"─".repeat(9)}DeSOLE.log${"─".repeat(58)}┐`);
    if (name === undefined) {
        console.log(twoColumnFormat("Type", type, "Name", "$ Unknown $"));
    } else {
        console.log(twoColumnFormat("Type", type, "Name", name));
    }
};

console.log(headerBoxPrint("Number", "asd"));
