var React = require('react')
var RatingService = require('./../services/RatingService')

function Skill(props) {
    return (
        <div className="skillContainer">
            <h5 className="skillTitle">{props.skillTitle}</h5>
            <div className="skillRating">{RatingService.retrieveRating(props.rating)}</div>
        </div>
    );
}

module.exports = Skill