const getCSVFileName = (fullname) => {


    const secondPart = fullname.split(".")
    const csvFileName = `${secondPart[0]}.${secondPart[1]}`

    return csvFileName

}


module.exports = {

    getCSVFileName

}