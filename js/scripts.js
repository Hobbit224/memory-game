$(document).ready(function(){
	var cards = [
	'<img src="images/monsters-01.png">',
	'<img src="images/monsters-02.png">',
	'<img src="images/monsters-03.png">',
	'<img src="images/monsters-04.png">',
	'<img src="images/monsters-05.png">',
	'<img src="images/monsters-06.png">',
	'<img src="images/monsters-07.png">',
	'<img src="images/monsters-08.png">',
	'<img src="images/monsters-09.png">',
	'<img src="images/monsters-10.png">',
	'<img src="images/monsters-11.png">',
	'<img src="images/monsters-12.png">',
	'<img src="images/monsters-13.png">',
	'<img src="images/monsters-14.png">',
	'<img src="images/monsters-15.png">',
	'<img src="images/monsters-16.png">',
	];



	var gridSize = 16;
	var memoryGameHTML = '';
	for(let i=0; i <gridSize; i++){
		if(i<2){
			card=cards[0];
		}else if(i<4) {
			card=cards[1]
		}else if(i<6){
			card=cards[2]
		}else if(i<8) {
			card=cards[3]
		}else if(i<10){
			card=cards[4]
		}else if(i<12) {
			card=cards[5]
		}else if(i<14){
			card=cards[6]
		}else if(i<16) {
			card=cards[7]
		}else if(i<18){
			card=cards[8]
		}else if(i<20) {
			card=cards[9]
		}else if(i<22){
			card=cards[10]
		}else if(i<24) {
			card=cards[11]
		}else if(i<26){
			card=cards[12]
		}else{
			card=cards[13]
		}

		memoryGameHTML += '<div class="card col-sm-3">';
			memoryGameHTML+='<div class="card-holder">';
				memoryGameHTML+=`<div class="card-front">${card}</div>`;
				memoryGameHTML+=`<div class="card-back"></div>`;
			memoryGameHTML+='</div>'
		memoryGameHTML+='</div>'

		// console.log(memoryGameHTML);
		$('.mg-contents').html(memoryGameHTML)

	};



	$('.card-holder').click(function() {
		$(this).toggleClass('flip')


		// Card has been flipped. If there us another one turned over, see if they match. Otherwise do nothing.

		var cardsUp = $('.flip');
		if(cardsUp.length == 2){
			var card1 = cardsUp[0].children[0].children[0].src
			var card2 = cardsUp[1].children[0].children[0].src

			// cardsUpImages = cardsUp.find('card-front img';)

			if(card1 == card2){
				// They match!
			}else{
				// No match, flip them over
				setTimeout(function(){
					cardsUp.removeClass('flip')
				}, 2000)
				
			}
		}
	})


	









});