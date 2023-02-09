export function getDataFromCell(data, column, line) {
    try {
        let field = `field${column}`
        let dataInRow = data[line - 1]
        return (dataInRow[field])
    } catch {
    }
}