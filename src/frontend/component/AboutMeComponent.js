var React = require('react')
var ResourceLoader = require('./../services/ResourceLoader')
var marked = require('marked')

function AboutMeComponent(props) {
    return <div dangerouslySetInnerHTML={{__html:marked('Intro will be written shortly')}}></div>
}

module.exports = AboutMeComponent