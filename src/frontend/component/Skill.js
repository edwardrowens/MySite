var React = require('react')
var RatingService = require('./../services/RatingService')

function Skill(props) {
    return (
        <li className="skillContainer">
            <p className="skillTitle">{props.skillTitle}</p>
            <span className="skillRating">{RatingService.retrieveRating(props.rating)}</span>
        </li>
    );
}

module.exports = Skill