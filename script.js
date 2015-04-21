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
	var isValidAmount = isValidEntry(amount);
	var amountStr = "";

		
		if (!isValidAmount){
			document.getElementById("errorMessage").innerHTML = "<p>*Please enter valid amount.</p>";  
		
		} else {

			amountStr = amount.replace(/\D/g,'');
			var _denStr = getStr(amount);
			//alert (_denStr['2s']);
			_denominations ['2s'] = _denStr['2s'];
			_denominations ['1s'] = _denStr['1s'];
			_denominations ['50p'] = _denStr['50p'];
			_denominations ['20p'] = _denStr['20p'];
			_denominations ['10p'] = _denStr['10p'];
			_denominations ['5p'] = _denStr['5p'];
			_denominations ['2p'] = _denStr['2p'];
			_denominations ['1p'] = _denStr['1p'];
			
			document.getElementById("2s").innerHTML = _denominations ['2s'];
			document.getElementById("1s").innerHTML = _denominations ['1s'];
			document.getElementById("50p").innerHTML = _denominations ['50p'];
			document.getElementById("20p").innerHTML = _denominations ['20p'];
			document.getElementById("10p").innerHTML = _denominations ['10p'];
			document.getElementById("5p").innerHTML = _denominations ['5p'];
			document.getElementById("2p").innerHTML = _denominations ['2p'];
			document.getElementById("1p").innerHTML = _denominations ['1p'];

		}
			
}

function isValidEntry(amount) {
        var amountRegex = /^£?[1-9]?[0-9]*(\.[0-9]+)?p?$/;
	return amountRegex.test(amount);		
}

function getStr(amount){
        var count2s = 0;
	var count1s = 0;
	var count50 = 0;
	var count20 = 0;
	var count10 = 0;
	var count5 = 0;
	var count2 = 0;
	var count1 = 0;
	var amountStr = 0;
	var amountPence = 0;
	var str = new Array();
	var pn = new Array();
	var _denominations = new Array ();
	var amount=amount;
	var _str = amount.replace(/[^\d.]/g, '');
	_str = parseFloat(_str).toFixed(2);
	//alert(_str);
		
	var checkDec = (_str.split(".").length == 2);
	//alert (checkDec);
		
	if (checkDec){ 
		amountStr = _str.substring(0,_str.indexOf("."));
		amountPence = _str.substring(_str.indexOf(".")+1,_str.length);
		//alert(amountPence);
		//alert(amountStr);
	} else { 
		amountStr = _str;
		amountPence = 0;		
	}
		
	str = [2,1];
	pn=[50,20,10,5,2,1];
		
	// calculate for sterling
 
        if (amountStr == 0 || amountStr =="") {
		_denominations ['2s'] = 0;
		_denominations ['1s'] = 0;
	} else {
		var totalStr=0,count=0;
		
		for(i=0;i<2;i++) {
			count=amountStr/str[i]; 
			
				if(count!=0) {
				    	//alert(i);
					if (i==0) { count2s = parseInt(count); }
					if (i==1) { count1s = parseInt(count); }
				}
				
			totalStr=totalStr+count; 
			amountStr=amountStr%str[i];
            		amountStr = amountStr;			
			
		}
			
		_denominations ['2s'] = count2s;
		_denominations ['1s'] = count1s;
	}
		
	// calculate pence
	if (amountPence == 0 || amountPence ==""){
		_denominations ['50p'] = 0 ;
		_denominations ['20p'] = 0;
		_denominations ['10p'] = 0;
		_denominations ['5p'] = 0;
		_denominations ['2p'] = 0;
		_denominations ['1p'] = 0;
			
	} else {
		var totalStr=0,count=0;
			
		for(i=0;i<6;i++) {
		    	amountPence = amountPence;
			count=amountPence/pn[i]; 
			
			if(count!=0) {

				if (i==0) { count50 = parseInt(count); }
				if (i==1) { count20 = parseInt(count); }
				if (i==2) { count10 = parseInt(count); }
				if (i==3) { count5 = parseInt(count); }
				if (i==4) { count2 = parseInt(count); }
				if (i==5) { count1 = parseInt(count); }

			}
				
			totalStr=totalStr+count; 
			amountPence=amountPence%pn[i];
            		amountPence = amountPence;			
			
		}
		_denominations ['50p'] = count50 ;
		_denominations ['20p'] = count20;
		_denominations ['10p'] = count10;
		_denominations ['5p'] = count5;
		_denominations ['2p'] = count2;
		_denominations ['1p'] = count1;	
		
	}
		
		
	return _denominations;
}


function resetData(){
// TO DO:
}
