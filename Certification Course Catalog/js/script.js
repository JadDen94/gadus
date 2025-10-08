	var acc = document.getElementsByClassName("pri");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var pricon = this.nextElementSibling;
		if (pricon.style.maxHeight) {
		pricon.style.maxHeight = null;
		} else {
      pricon.style.maxHeight = pricon.scrollHeight + "px";
		} 
		});
    }
	
	function Show1(){
		document.getElementById('img1').style.display = "none"
		document.getElementById('img2').style.display = "block"
		document.getElementById('cart1').style.display = "block"
	}
	
	function Hide1(){
		document.getElementById('img2').style.display = "none"
		document.getElementById('img1').style.display = "block"
		document.getElementById('cart1').style.display = "none"
	}
	
	function Show2(){
		document.getElementById('img3').style.display = "none"
		document.getElementById('img4').style.display = "block"
		document.getElementById('cart2').style.display = "block"
	}
	
	function Hide2(){
		document.getElementById('img4').style.display = "none"
		document.getElementById('img3').style.display = "block"
		document.getElementById('cart2').style.display = "none"
	}
	
	function Show3(){
		document.getElementById('img5').style.display = "none"
		document.getElementById('img6').style.display = "block"
		document.getElementById('cart3').style.display = "block"
	}
	
	function Hide3(){
		document.getElementById('img6').style.display = "none"
		document.getElementById('img5').style.display = "block"
		document.getElementById('cart3').style.display = "none"
	}
	
	function Show4(){
		document.getElementById('img7').style.display = "none"
		document.getElementById('img8').style.display = "block"
		document.getElementById('cart4').style.display = "block"
	}
	
	function Hide4(){
		document.getElementById('img8').style.display = "none"
		document.getElementById('img7').style.display = "block"
		document.getElementById('cart4').style.display = "none"
	}
	
	function Show5(){
		document.getElementById('img9').style.display = "none"
		document.getElementById('img10').style.display = "block"
		document.getElementById('cart5').style.display = "block"
	}
	
	function Hide5(){
		document.getElementById('img10').style.display = "none"
		document.getElementById('img9').style.display = "block"
		document.getElementById('cart5').style.display = "none"
	}
	
	function Show6(){
		document.getElementById('img11').style.display = "none"
		document.getElementById('img12').style.display = "block"
		document.getElementById('cart6').style.display = "block"
	}
	
	function Hide6(){
		document.getElementById('img12').style.display = "none"
		document.getElementById('img11').style.display = "block"
		document.getElementById('cart6').style.display = "none"
	}
	
	function Show7(){
		document.getElementById('img13').style.display = "none"
		document.getElementById('img14').style.display = "block"
		document.getElementById('cart7').style.display = "block"
	}
	
	function Hide7(){
		document.getElementById('img14').style.display = "none"
		document.getElementById('img13').style.display = "block"
		document.getElementById('cart7').style.display = "none"
	}
	
	function Show8(){
		document.getElementById('img15').style.display = "none"
		document.getElementById('img16').style.display = "block"
		document.getElementById('cart8').style.display = "block"
	}
	
	function Hide8(){
		document.getElementById('img16').style.display = "none"
		document.getElementById('img15').style.display = "block"
		document.getElementById('cart8').style.display = "none"
	}
	
	function Show9(){
		document.getElementById('img17').style.display = "none"
		document.getElementById('img18').style.display = "block"
		document.getElementById('cart9').style.display = "block"
	}
	
	function Hide9(){
		document.getElementById('img18').style.display = "none"
		document.getElementById('img17').style.display = "block"
		document.getElementById('cart9').style.display = "none"
	}
	
	function Show10(){
		document.getElementById('img19').style.display = "none"
		document.getElementById('img20').style.display = "block"
		document.getElementById('cart10').style.display = "block"
	}
	
	function Hide10(){
		document.getElementById('img20').style.display = "none"
		document.getElementById('img19').style.display = "block"
		document.getElementById('cart10').style.display = "none"
	}
	
	function Show11(){
		document.getElementById('img21').style.display = "none"
		document.getElementById('img22').style.display = "block"
		document.getElementById('cart11').style.display = "block"
	}
	
	function Hide11(){
		document.getElementById('img22').style.display = "none"
		document.getElementById('img21').style.display = "block"
		document.getElementById('cart11').style.display = "none"
	}
	
	function Show12(){
		document.getElementById('img23').style.display = "none"
		document.getElementById('img24').style.display = "block"
		document.getElementById('cart12').style.display = "block"
	}
	
	function Hide12(){
		document.getElementById('img24').style.display = "none"
		document.getElementById('img23').style.display = "block"
		document.getElementById('cart12').style.display = "none"
	}
	
	function Show13(){
		document.getElementById('img25').style.display = "none"
		document.getElementById('img26').style.display = "block"
		document.getElementById('cart13').style.display = "block"
	}
	
	function Hide13(){
		document.getElementById('img26').style.display = "none"
		document.getElementById('img25').style.display = "block"
		document.getElementById('cart13').style.display = "none"
	}
	
	function Show14(){
		document.getElementById('img27').style.display = "none"
		document.getElementById('img28').style.display = "block"
		document.getElementById('cart14').style.display = "block"
	}
	
	function Hide14(){
		document.getElementById('img28').style.display = "none"
		document.getElementById('img27').style.display = "block"
		document.getElementById('cart14').style.display = "none"
	}
	
	function Show15(){
		document.getElementById('img29').style.display = "none"
		document.getElementById('img30').style.display = "block"
		document.getElementById('cart15').style.display = "block"
	}
	
	function Hide15(){
		document.getElementById('img30').style.display = "none"
		document.getElementById('img29').style.display = "block"
		document.getElementById('cart15').style.display = "none"
	}
	
	function Show16(){
		document.getElementById('img31').style.display = "none"
		document.getElementById('img32').style.display = "block"
		document.getElementById('cart16').style.display = "block"
	}
	
	function Hide16(){
		document.getElementById('img32').style.display = "none"
		document.getElementById('img31').style.display = "block"
		document.getElementById('cart16').style.display = "none"
	}
	
	function Show17(){
		document.getElementById('img33').style.display = "none"
		document.getElementById('img34').style.display = "block"
		document.getElementById('cart17').style.display = "block"
	}
	
	function Hide17(){
		document.getElementById('img34').style.display = "none"
		document.getElementById('img33').style.display = "block"
		document.getElementById('cart17').style.display = "none"
	}
	
	function Show18(){
		document.getElementById('img35').style.display = "none"
		document.getElementById('img36').style.display = "block"
		document.getElementById('cart18').style.display = "block"
	}
	
	function Hide18(){
		document.getElementById('img36').style.display = "none"
		document.getElementById('img35').style.display = "block"
		document.getElementById('cart18').style.display = "none"
	}
	
	function Show19(){
		document.getElementById('img37').style.display = "none"
		document.getElementById('img38').style.display = "block"
		document.getElementById('cart19').style.display = "block"
	}
	
	function Hide19(){
		document.getElementById('img38').style.display = "none"
		document.getElementById('img37').style.display = "block"
		document.getElementById('cart19').style.display = "none"
	}
	
	function Show20(){
		document.getElementById('img39').style.display = "none"
		document.getElementById('img40').style.display = "block"
		document.getElementById('cart20').style.display = "block"
	}
	
	function Hide20(){
		document.getElementById('img40').style.display = "none"
		document.getElementById('img39').style.display = "block"
		document.getElementById('cart20').style.display = "none"
	}
	
	function Show21(){
		document.getElementById('img41').style.display = "none"
		document.getElementById('img42').style.display = "block"
		document.getElementById('cart21').style.display = "block"
	}
	
	function Hide21(){
		document.getElementById('img42').style.display = "none"
		document.getElementById('img41').style.display = "block"
		document.getElementById('cart21').style.display = "none"
	}
	
	function Show22(){
		document.getElementById('img43').style.display = "none"
		document.getElementById('img44').style.display = "block"
		document.getElementById('cart22').style.display = "block"
	}
	
	function Hide22(){
		document.getElementById('img44').style.display = "none"
		document.getElementById('img43').style.display = "block"
		document.getElementById('cart22').style.display = "none"
	}
	
	function Show23(){
		document.getElementById('img45').style.display = "none"
		document.getElementById('img46').style.display = "block"
		document.getElementById('cart23').style.display = "block"
	}
	
	function Hide23(){
		document.getElementById('img46').style.display = "none"
		document.getElementById('img45').style.display = "block"
		document.getElementById('cart23').style.display = "none"
	}
	
	function Show24(){
		document.getElementById('img47').style.display = "none"
		document.getElementById('img48').style.display = "block"
		document.getElementById('cart24').style.display = "block"
	}
	
	function Hide24(){
		document.getElementById('img48').style.display = "none"
		document.getElementById('img47').style.display = "block"
		document.getElementById('cart24').style.display = "none"
	}
	
	function Show25(){
		document.getElementById('img49').style.display = "none"
		document.getElementById('img50').style.display = "block"
		document.getElementById('cart25').style.display = "block"
	}
	
	function Hide25(){
		document.getElementById('img50').style.display = "none"
		document.getElementById('img49').style.display = "block"
		document.getElementById('cart25').style.display = "none"
	}
	
	function Show26(){
		document.getElementById('img51').style.display = "none"
		document.getElementById('img52').style.display = "block"
		document.getElementById('cart26').style.display = "block"
	}
	
	function Hide26(){
		document.getElementById('img52').style.display = "none"
		document.getElementById('img51').style.display = "block"
		document.getElementById('cart26').style.display = "none"
	}
	
	function Show27(){
		document.getElementById('img53').style.display = "none"
		document.getElementById('img54').style.display = "block"
		document.getElementById('cart27').style.display = "block"
	}
	
	function Hide27(){
		document.getElementById('img54').style.display = "none"
		document.getElementById('img53').style.display = "block"
		document.getElementById('cart27').style.display = "none"
	}
	
	function Show28(){
		document.getElementById('img55').style.display = "none"
		document.getElementById('img56').style.display = "block"
		document.getElementById('cart28').style.display = "block"
	}
	
	function Hide28(){
		document.getElementById('img56').style.display = "none"
		document.getElementById('img55').style.display = "block"
		document.getElementById('cart28').style.display = "none"
	}
	
	function Show29(){
		document.getElementById('img57').style.display = "none"
		document.getElementById('img58').style.display = "block"
		document.getElementById('cart29').style.display = "block"
	}
	
	function Hide29(){
		document.getElementById('img58').style.display = "none"
		document.getElementById('img57').style.display = "block"
		document.getElementById('cart29').style.display = "none"
	}
	
	function Show30(){
		document.getElementById('img59').style.display = "none"
		document.getElementById('img60').style.display = "block"
		document.getElementById('cart30').style.display = "block"
	}
	
	function Hide30(){
		document.getElementById('img60').style.display = "none"
		document.getElementById('img59').style.display = "block"
		document.getElementById('cart30').style.display = "none"
	}
	
	function Show31(){
		document.getElementById('img61').style.display = "none"
		document.getElementById('img62').style.display = "block"
		document.getElementById('cart31').style.display = "block"
	}
	
	function Hide31(){
		document.getElementById('img62').style.display = "none"
		document.getElementById('img61').style.display = "block"
		document.getElementById('cart31').style.display = "none"
	}
	
	function Show32(){
		document.getElementById('img63').style.display = "none"
		document.getElementById('img64').style.display = "block"
		document.getElementById('cart32').style.display = "block"
	}
	
	function Hide32(){
		document.getElementById('img64').style.display = "none"
		document.getElementById('img63').style.display = "block"
		document.getElementById('cart32').style.display = "none"
	}
	
	function Show33(){
		document.getElementById('img65').style.display = "none"
		document.getElementById('img66').style.display = "block"
		document.getElementById('cart33').style.display = "block"
	}
	
	function Hide33(){
		document.getElementById('img66').style.display = "none"
		document.getElementById('img65').style.display = "block"
		document.getElementById('cart33').style.display = "none"
	}
	
	function Show34(){
		document.getElementById('img67').style.display = "none"
		document.getElementById('img68').style.display = "block"
		document.getElementById('cart34').style.display = "block"
	}
	
	function Hide34(){
		document.getElementById('img68').style.display = "none"
		document.getElementById('img67').style.display = "block"
		document.getElementById('cart34').style.display = "none"
	}
	
	function Show35(){
		document.getElementById('img69').style.display = "none"
		document.getElementById('img70').style.display = "block"
		document.getElementById('cart35').style.display = "block"
	}
	
	function Hide35(){
		document.getElementById('img70').style.display = "none"
		document.getElementById('img69').style.display = "block"
		document.getElementById('cart35').style.display = "none"
	}
	
	function Show36(){
		document.getElementById('img71').style.display = "none"
		document.getElementById('img72').style.display = "block"
		document.getElementById('cart36').style.display = "block"
	}
	
	function Hide36(){
		document.getElementById('img72').style.display = "none"
		document.getElementById('img71').style.display = "block"
		document.getElementById('cart36').style.display = "none"
	}
	
	function Show37(){
		document.getElementById('img73').style.display = "none"
		document.getElementById('img74').style.display = "block"
		document.getElementById('cart37').style.display = "block"
	}
	
	function Hide37(){
		document.getElementById('img74').style.display = "none"
		document.getElementById('img73').style.display = "block"
		document.getElementById('cart37').style.display = "none"
	}
	
	function Show38(){
		document.getElementById('img75').style.display = "none"
		document.getElementById('img76').style.display = "block"
		document.getElementById('cart38').style.display = "block"
	}
	
	function Hide38(){
		document.getElementById('img76').style.display = "none"
		document.getElementById('img75').style.display = "block"
		document.getElementById('cart38').style.display = "none"
	}


	