var Hamming = {
    compute: function(input1, input2) {

    	if(input1.length != input2.length) {
    		
    		throw new Error('DNA strands must be of equal length.'); 
    	}
        var diff = 0;
        for (i = 0; i < input1.length; i++) {
            if (input1[i] != input2[i]) {
                diff = diff + 1;            
            };
        };
        return diff;
    }
};

module.exports = Hamming;
