var SkillProgressBarService = {
	decideColors: function(color, fill) {
		var colors = [];
		
		for (var i=0; i < fill; ++i) {
				colors.push(color);
		}
		for (;i<5;++i) {
				colors.push('#ffffff');
		}
		return colors;
	}	
};


module.exports = SkillProgressBarService;