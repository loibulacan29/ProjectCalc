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
        //alert (validWholeAmount);
        
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


           alert (_denominations ['2s']+"=="+_denominations ['1s']+"=="+_denominations ['50p']+"=="+_denominations ['20p']+"=="+_denominations ['10p']+"=="+_denominations ['5p']+"=="+_denominations ['2p']+"=="+_denominations ['1p'])
            
			return _denominations;
		}

// TO DO : calculate decimal only      				

// TO DO : calculate whole number and decimal

}

// function isValidEntry(amount) {
//       TO DO: create regex		
//}


function checkDecimalAmount(amount){
       var amountToCalc = amount;
       var validAmount = "";
       
		if (amountToCalc.split(".").length == 1 && amountToCalc !=0 ){  // simple check if valid entry, will be replaced by regex
			validAmount = true;
		} else {
			validAmount = false;
		}

       return validAmount;
}

function checkIfDecimalAmount(amount){
       var amountToCalc = amount;
       var validAmount = "";
       
		if (amountToCalc.split(".").length == 2 && amountToCalc !=0 && amountToCalc < 1){  // simple check if valid entry, will be replaced by regex
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

			else { 
				var _1sValue = getSterlingAndPence(1,_2sValue['rem']); 
				_1s = _1sValue['num']; 
				_denominations ['1s'] = _1s; 
				
				alert (_denominations ['1s']);
				}
          

		} else { _denominations ['2s'] = 0; }
        

	_denominations ['50p'] = 0 ;
	_denominations ['20p'] = 0;
	_denominations ['10p'] = 0;
	_denominations ['5p'] = 0;
	_denominations ['2p'] = 0;
	_denominations ['1p'] = 0;

    return _denominations;
}

function calculateDecimalAmount(amount){
	var _denominations = new Array ();
	//var amount = amount.ToFixed(2); 
	amount = amount*100;

        if (amount >= 50 ) {
		_denominations = getPenceAboveAndEqual50(amount);
		
    	}
            
	return _denominations;
}


function getSterlingAndPence(strP, valueToConvert) {
    var strP = strP;
    var valueToConvert = valueToConvert;
    var num = 0;
    var rem = 0;
	var x = 0;
    var _val = new Array();  // create array to hold the number of Sterling or pence and the remaining amount to calculate

		rem = valueToConvert%strP;		// get the remaining amount to calculate
		x = (valueToConvert-rem);
		if (x !=0) { num = (valueToConvert-rem)/strP; }
		else {num = num;} // get the number or Sterling or pence
		_val['num'] = num;    // store value
		_val['rem'] = rem;    // store value

    return _val;

}

// IN PROGRESS : will be replaced by while statement
function getPenceAboveAndEqual50(amount){
	var _50pValue = getSterlingAndPence(50,amount);
	var _denominations = new Array ();

                _50p = _50pValue['num'];
               	_denominations ['50p'] = _50p; 

                    if (_50pValue['rem'] == 0) {
						_denominations ['20p'] = 0;
						_denominations ['10p'] = 0;
						_denominations ['5p'] = 0;
						_denominations ['2p'] = 0;
						_denominations ['1p'] = 0;
						
					} else { 
					    if (_50pValue['rem'] >=20 && _50pValue['num'] < 50){
						
							var _20pValue = getSterlingAndPence(20,amount);   // get 20p
							_20p = _20pValue['num']; 
							_denominations ['20p'] = _20p; 
							
							// TO DO - other checks
							
						} else if (_50pValue['rem'] >=10 && _50pValue['num'] < 20){
							var _10pValue = getSterlingAndPence(10,amount);   // get 10p
							_10p = _10pValue['num'];
							
							_denominations ['20p'] = 0; 
							_denominations ['10p'] = _10p; 
							
							// TO DO - other checks
							
						} else if (_50pValue['rem'] >=5 && _50pValue['num'] < 10){
							var _5pValue = getSterlingAndPence(5,amount);   // get 5p
							_5p = _5pValue['num']; 
							
							_denominations ['20p'] = 0; 
							_denominations ['10p'] = 0;
							_denominations ['5p'] = _5p;

               				// TO DO - other checks	
							
						} else if (_50pValue['rem'] >=2 && _50pValue['num'] < 5 ){
							var _2pValue = getSterlingAndPence(2,amount);   // get 2p
							_2p = _2pValue['num']; 
							
							_denominations ['20p'] = 0; 
							_denominations ['10p'] = 0;
							_denominations ['5p'] = 0;
							_denominations ['2p'] = _2p;
							
							// TO DO - other checks
							
						} else if (_50pValue['rem'] >=1 && _50pValue['num'] < 2 ){
							var _1pValue = getSterlingAndPence(1,amount);   // get 1p
							_1p = _1pValue['num']; 
							
							_denominations ['20p'] = 0; 
							_denominations ['10p'] = 0;
							_denominations ['5p'] = 0;
							_denominations ['2p'] = 0;
							_denominations ['2p'] = _1p;
						
							// TO DO - other checks
						
						
						}
					}

	_denominations ['2s'] = 0 ;
	_denominations ['1s'] = 0 ;

    return _denominations;				
					
}
