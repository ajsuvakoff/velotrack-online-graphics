export function columnNameHandler(name) {
    if (name === '№') {
        return 'номер'
    }

    if (name === 'Ср. скорость') {
        return 'скорость'
    }

    if (name !== 'ФИО' && name !== 'ФИ') {
        return name.toLowerCase()
    } else return name
}