var React = require('react')
var ResourceLoader = require('./../services/ResourceLoader')
var marked = require('marked')

function AboutMeComponent(props) {
    return <div dangerouslySetInnerHTML={{__html:marked("Hi, my name is Edward Owens and I'm a software engineer based out of Los Angeles. I mostly work with java but I also like C++ and JS. I'm always trying to learn new things and gather new skills. I really like making stuff (like this website). It's an SPA built with React.js and Node.js (via Express). I also did all of the styling and design. This site is for all things Eddie. Have a look around!")}}></div>
}

module.exports = AboutMeComponent