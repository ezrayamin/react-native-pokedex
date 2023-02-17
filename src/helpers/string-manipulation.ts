export const pokemonIdFormat = (id: number) => {
    const stringifyId = id.toString()
    const idLength = stringifyId.length
    const suffix = "000"

    const result = `#${suffix.substring(idLength)}${id}`
    return result
}

export const getIdFromUrl = (url: string) => {
    const splitUrl = url.split("/")

    const length = splitUrl.length
    const idIndex = length - 2
    const id = splitUrl[idIndex]

    const result = parseInt(id)
    return result
}