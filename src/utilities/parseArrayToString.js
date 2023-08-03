export function parseArrayToString(arrayToParse) {
    let resultString = "";

    for (let i = 0; i < arrayToParse?.length; i++) {
        resultString += arrayToParse[i];

        if (i === arrayToParse?.length - 1) {
            resultString += "."
        }
        else {
            resultString += ", "
        }
    }

    return resultString
}