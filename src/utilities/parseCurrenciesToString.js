export function parseCurrenciesToString(objectToParse) {
    if (objectToParse) {

        let arrayToParse = Object.values(objectToParse);
        let resultString = "";

        for (let i = 0; i < arrayToParse.length; i++) {
            resultString += arrayToParse[i].name + " (" + arrayToParse[i].symbol + ")";

            if (i === arrayToParse.length - 1) {
                resultString += "."
            }
            else {
                resultString += ", "
            }
        }

        return resultString
    }
    else {
        return "-"
    }
}