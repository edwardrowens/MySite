var ResourceLoader = function (resourcePath) {
    var request = new XMLHttpRequest()
    request.open('GET', resourcePath, false)
    request.send()

    if (request.status === 200) {
        return request.responseText
    } else {
        return "The content could not be loaded."
        console.log('Request unsuccessful: ' + request.status + ' from ' + request.responseURL)
    }
}

module.exports = ResourceLoader