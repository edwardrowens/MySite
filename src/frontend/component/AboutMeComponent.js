var React = require('react')
var ResourceLoader = require('./../services/ResourceLoader')
var marked = require('marked')

function AboutMeComponent(props) {
    return <div dangerouslySetInnerHTML={{__html:marked(ResourceLoader('resources/documents/home.txt'))}}></div>
}

module.exports = AboutMeComponent