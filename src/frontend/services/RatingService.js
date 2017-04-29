var React = require('react')

var RatingService = {
    retrieveRating : function(numOfStars) {
        var rating = '';
        var i = 0;
        for (; i < numOfStars; ++i) {
            rating += '★';
        }
        for (; i<5; ++i) {
            rating += '☆';
        }

        return <div id="rating">{rating}</div>
    }
}

module.exports = RatingService;