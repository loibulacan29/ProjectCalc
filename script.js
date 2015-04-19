function getDenominations(){
	var amount = document.getElementById('amount').value;
        var _denominations = new Array ();
        var _2s = 0;            
        var _1s = 0;
        var _50p = 0;
        var _20p = 0;
        var _10p = 0;
        var _5p = 0;
        var _2p = 0;
        var _1p = 0;
        
// calculate whole amount only

        var validWholeAmount = checkDecimalAmount(amount);
        alert (validWholeAmount);
        
        if (validWholeAmount) {
            
            var _denStrAndPence = calculateWholeAmount(amount);

            _denominations ['2s'] = _denStrAndPence['2s'];
            _denominations ['1s'] = _denStrAndPence['1s'];
            _denominations ['50p'] = _denStrAndPence['50p'];
	    _denominations ['20p'] = _denStrAndPence['20p'];
	    _denominations ['10p'] = _denStrAndPence['10p'];
	    _denominations ['5p'] = _denStrAndPence['5p'];
	    _denominations ['2p'] = _denStrAndPence['2p'];
	    _denominations ['1p'] = _denStrAndPence['1p'];

           alert (_denStrAndPence);

           alert (_denominations ['2s']+"=="+_denominations ['1s']+"=="+_denominations ['50p']+"=="+_denominations ['20p']+"=="+_denominations ['10p']+"=="+_denominations ['5p']+"=="+_denominations ['2p']+"=="+_denominations ['1p'])
            
           return _denominations;

        }

// calculate decimal only



// calculate whole number and decimal

			


        

}

function checkDecimalAmount(amount){
       var amountToCalc = amount;
       var validAmount = "";
       
       if (amountToCalc.split(".").length == 1 && amountToCalc !=0 ){
         validAmount = true;
       } else {
  	 validAmount = false;
       }

       return validAmount;
}


function calculateWholeAmount(amount){
	var amount = amount;
        var _denominations = new Array ();

        if (amount >= 2) {
            	var _2sValue = getSterlingAndPence(2,amount);

                _2s = _2sValue['num'];
               	_denominations ['2s'] = _2s; 

                        if (_2sValue['rem'] == 0) {_denominations ['1s'] = 0;} 

			else { var _1sValue = getSterlingAndPence(1,amount); _1s = _1sValue['num']; _denominations ['1s'] = _1s; }
          

	} else { _denominations ['2s'] = 0; }
        

	_denominations ['50p'] = 0 ;
	_denominations ['20p'] = 0;
	_denominations ['10p'] = 0;
	_denominations ['5p'] = 0;
	_denominations ['2p'] = 0;
	_denominations ['1p'] = 0;

        return _denominations;
}


function getSterlingAndPence(strP, valueToConvert) {
        var strP = strP;
        var valueToConvert = valueToConvert;
        var num = 0;
        var rem = 0;
        var _val = new Array();  // create array to hold the number of Sterling or pence and the remaining amount to calculate

        if (valueToConvert < 1 ) {
            //alert(valueToConvert);
            valueToConvert = valueToConvert*100; // get the whole number
            //valueToConvert = valueToConvert.ToFixed(2); // round off to 2 decimal places 

        }

        rem = valueToConvert%strP;      // get the remaining amount to calculate
	num = (valueToConvert-rem)/strP; // get the number or Sterling or pence
        _val['num'] = num;    // store value
        _val['rem'] = rem;    // store value

        return _val;

}
