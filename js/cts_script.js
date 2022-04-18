/*	flags are 0 for neutral effect
	1 for positive effect
	2 for negative effect
	3 is a trigger to calculate total score*/
	
const situations = [{
		id: 0,
		q: "Faced with a long weekend you have a choice over where you will spend a few days rough camping. Where would you like to go?",
		a: [{ text: "Mountains", next_situation: 1, ss_flag: 0 },
			{ text: "Forest", next_situation: 59, ss_flag: 0  }
		]
	},
	{
		id: 1,
		q: "Theres a beautiful trek up some nearby mountains. Its bound to be cold but that never bothered you much anyway.",
		a: [{text: "Proceed", next_situation: 1, ss_flag: 0 },
			{text: "Proceed", next_situation: 1, ss_flag: 0 }
		]
	},
	{
		id: 2,
		q: "On the radio there is a weather report of a big storm blowing in. Maybe you should wait for better weather?",
		a: [{text: "No, go anyway.", next_situation: 5, ss_flag: 2 },
			{text: "Yes, wait for it to clear.", next_situation: 3, ss_flag: 1 }
		]
	},
	{
		id: 3,
		q: "You choose to wait for better weather.",
		a: [{text: "Proceed", next_situation: 4, ss_flag: 0 },
			{text: "Proceed", next_situation: 4, ss_flag: 0 }
		]
	},
	{
		id: 4,
		q: "A week later you have another long weekend and with a clear forecast you begin preparations.",
		a: [{text: "Proceed", next_situation: 7, ss_flag: 0 },
			{text: "Proceed", next_situation: 7, ss_flag: 0 }
		]
	},
	{
		id: 5,
		q: "Its probably not gonna be that bad. You pack your things and head out.",
		a: [{text: "Proceed", next_situation: 6, ss_flag: 0 },
			{text: "Proceed", next_situation: 6, ss_flag: 0 }
		]
	},
	/*{
		id: 6,
		q: "Upon arriving at the park you encounter a park ranger. Surprised to see you, the ranger gives you a long speech about safety and his responsibility for the visitors to the park. You are turned away. There wont be any camping this week.",
		a: [{text: "Proceed", next_situation: 4, ss_flag: 0 },
			{text: "Proceed", next_situation: 4, ss_flag: 0 }
		]
	},
	{
		id: 7,
		q: "The weather is finally clear and you begin to make preparations. You find yourself asking what sort of gear you should bring. You want to bring your lightweight comfortable gear as you know the path will be hilly. Desipte this thought it could be very cold still and you have much warmer, albeit much heavier gear available.",
		a: [{text: "Take the light-weight gear", next_situation: 32, ss_flag: 2 },
			{text: "Take heavier gear", next_situation: 8, ss_flag: 1 }
		]
	},
	{
		id: 8,
		q: "The heavier gear will certainly be warmer. The cost will come when you are sucking wind while trying to enjoy all the beautiful views in the hills.",
		a: [{text: "Proceed", next_situation: 9, ss_flag: 0 },
			{text: "Proceed", next_situation: 9, ss_flag: 0 }
		]
	},
	{
		id: 9,
		q: "After a winding drive you find a small car park and prepare to leave your vehicle to hike the rest on foot. A quick glance at your compass and you are able to plot a direct course to where the campsite is supposed to be: due west. Before stepping out you spot a well trod trail leading in the same direction. Should you take the winding trail or set straight out on the most direct path available?",
		a: [{text: "Take the well trod trail.", next_situation: 10, ss_flag: 1 },
			{text: "As the crow flies. Take the direct path.", next_situation: 21, ss_flag: 2 }
		]
	},
	{
		id: 10,
		q: "The well trod trail is not nearly as effecient but the ground is quite deceptive under a layer of snow and you are making good time.",
		a: [{text: "Proceed", next_situation: 11, ss_flag: 0 },
			{text: "Proceed", next_situation: 11, ss_flag: 0 }
		]
	},
	{
		id: 11,
		q: "You certainly walked a fair bit longer, but the path leads you right to a campsite in a clearing shielded from the elements.",
		a: [{text: "Proceed", next_situation: 12, ss_flag: 0 },
			{text: "Proceed", next_situation: 12, ss_flag: 0 }
		]
	},
	{
		id: 12,
		q: "You find a stash of firewood left by a previous 'tenant'. It is slightly wet so you take care to stack it by the fire pit before foraging nearby for dry wood.",
		a: [{text: "Proceed", next_situation: 13, ss_flag: 0 },
			{text: "Proceed", next_situation: 13, ss_flag: 0 }
		]
	},
	{
		id: 13,
		q: "After some work you have a nice stash of dry firewood to start your fire. During this process the wet wood is dried out and your fuel stores are quite abundant.",
		a: [{text: "Proceed", next_situation: 14, ss_flag: 0 },
			{text: "Proceed", next_situation: 14, ss_flag: 0 }
		]
	},
	{
		id: 14,
		q: "The well-fueled fire warms your bones as well as your dinner. There is plenty of heat to boil some water for tea as well.",
		a: [{text: "Proceed", next_situation: 15, ss_flag: 0 },
			{text: "Proceed", next_situation: 15, ss_flag: 0 }
		]
	},
	{
		id: 15,
		q: "The shadows lengthen and the night begins to draw close. Your attention turns to preparing for bed",
		a: [{text: "Proceed", next_situation: 16, ss_flag: 0 },
			{text: "Proceed", next_situation: 16, ss_flag: 0 }
		]
	},
	{
		id: 16,
		q: "The warmth from your meal by the fire and the heavy winter-rated gear warms your aching muscles and soon you fall fast asleep.",
		a: [{text: "Proceed", next_situation: 17, ss_flag: 0 },
			{text: "Proceed", next_situation: 17, ss_flag: 0 }
		]
	},
	{
		id: 17,
		q: "You awaken refreshed after sleeping the whole night through. You are able to make a small fire with wood leftover from the night before. After a fine meal of eggs and coffee you pack your things and prepare to hike out.",
		a: [{text: "Proceed", next_situation: 18, ss_flag: 0 },
			{text: "Proceed", next_situation: 18, ss_flag: 0 }
		]
	},
	{
		id: 18,
		q: "The way back is uneventful and soon you spot your vehicle and your aching body is reenergized for the final push.",
		a: [{text: "Proceed", next_situation: 19, ss_flag: 0 },
			{text: "Proceed", next_situation: 19, ss_flag: 0 }
		]
	},
	{
		id: 19,
		q: "You arrive at your vehicle more knowledgable than you were when you left it. A feeling of relief washes over you as you start the journey back home.",
		a: [{text: "Proceed", next_situation: 20, ss_flag: 0 },
			{text: "Proceed", next_situation: 20, ss_flag: 0 }
		]
	},
	{
		id: 20,
		q: "You have successfully completed this trip. Lessons were learned and you find yourself longing for the next long weekend.",
		a: [{text: "Restart?", next_situation: 0, ss_flag: 3 },
			{text: "Restart?", next_situation: 0, ss_flag: 3 }
		]
	},
	{
		id: 21,
		q: "You decide on the direct heading and begin your trek through the snow.",
		a: [{text: "Proceed", next_situation: 22, ss_flag: 0 },
			{text: "Proceed", next_situation: 22, ss_flag: 0 }
		]
	},
	{
		id: 22,
		q: "Sheer cliff faces and long ravines force you to retrace your steps several different times. Eventually you are able to find your way back to the head of the trail. After losing several hours of daylight you decide to follow the trail.",
		a: [{text: "Proceed", next_situation: 23, ss_flag: 0 },
			{text: "Proceed", next_situation: 23, ss_flag: 0 }
		]
	},
	{
		id: 23,
		q: "You find a stash of firewood left by a previous 'tenant'. It is slightly wet so you take care to stack it by the fire pit. The night is coming on quickly now and you have only a meagre stash of fuel. Maybe there is some dry wood nearby...",
		a: [{text: "Search for the dry wood", next_situation: 30, ss_flag: 0 },
			{text: "Focus your efforts on lighting the meagre and wet stash you have", next_situation: 24, ss_flag: 0 }
		]
	},
	{
		id: 24,
		q: "The going is slow and the fire is stubborn but you are eventually able to get a fire started.",
		a: [{text: "Proceed", next_situation: 25, ss_flag: 0 },
			{text: "Proceed", next_situation: 25, ss_flag: 0 }
		]
	},
	{
		id: 25,
		q: "With your meagre fire you prepare to carefully ration the wood you have in order to heat your bones and food.",
		a: [{text: "Proceed", next_situation: 26, ss_flag: 0 },
			{text: "Proceed", next_situation: 26, ss_flag: 0 }
		]
	},
	{
		id: 26,
		q: "Your dinner is quite cold but crouching close to the fire you are able to keep most of the chill off.",
		a: [{text: "Proceed", next_situation: 27, ss_flag: 0 },
			{text: "Proceed", next_situation: 27, ss_flag: 0 }
		]
	},
	{
		id: 27,
		q: "Its now fully dark out and you make preparations to rest.",
		a: [{text: "Proceed", next_situation: 28, ss_flag: 0 },
			{text: "Proceed", next_situation: 28, ss_flag: 0 }
		]
	},
	{
		id: 28,
		q: "The night is freezing and you sleep horribly. Thankfully the winter-rated gear keeps the worst of it off of you. You are happy to see morning.",
		a: [{text: "Proceed", next_situation: 29, ss_flag: 0 },
			{text: "Proceed", next_situation: 29, ss_flag: 0 }
		]
	},
	{
		id: 29,
		q: "Without a fire to cook your eggs you are content to eat a small packet of peanuts you found in one of your jacket pockets. It isnt much but you are ready to leave now.",
		a: [{text: "Proceed", next_situation: 18, ss_flag: 0 },
			{text: "Proceed", next_situation: 18, ss_flag: 0 }
		]
	},
	{
		id: 30,
		q: "You grab your flashlight and head out to find anything that would make better fuel.",
		a: [{text: "Proceed", next_situation: 31, ss_flag: 0 },
			{text: "Proceed", next_situation: 31, ss_flag: 0 }
		]
	},
	{
		id: 31,
		q: "You wander in the growing dark, but your search proves fruitless. If you had done this in the daylight the results might be different but your small flashlight is no help in locating any further fuel for your campfire.",
		a: [{text: "Proceed", next_situation: 25, ss_flag: 0 },
			{text: "Proceed", next_situation: 25, ss_flag: 0 }
		]
	},
	{
		id: 32,
		q: "You decide on your lighter gear. Your pack will be significantly lighter and you figure the energy you save will keep you warmer than the winter gear anyway.",
		a: [{text: "Proceed", next_situation: 33, ss_flag: 0 },
			{text: "Proceed", next_situation: 33, ss_flag: 0 }
		]
	},
	{
		id: 33,
		q: "After a winding drive you find a small car park and prepare to leave your vehicle to hike the rest on foot. A quick glance at your compass and you are able to plot a direct course to where the campsite is supposed to be: due west. Before stepping out you spot a well trod trail leading in the same direction. Should you take the winding trail or set straight out on the most direct path available?",
		a: [{text: "Take the well trod trail.", next_situation: 34, ss_flag: 1 },
			{text: "As the crow flies. Take the direct path.", next_situation: 48, ss_flag: 2 }
		]
	},
	{
		id: 34,
		q: "The well trod trail is not nearly as effecient but the ground is quite deceptive under a layer of snow and you are making good time.",
		a: [{text: "Proceed", next_situation: 35, ss_flag: 0 },
			{text: "Proceed", next_situation: 35, ss_flag: 0 }
		]
	},
	{
		id: 35,
		q: "You certainly walked a fair bit longer, but the path leads you right to a campsite in a clearing shielded from the elements.",
		a: [{text: "Proceed", next_situation: 36, ss_flag: 0 },
			{text: "Proceed", next_situation: 36, ss_flag: 0 }
		]
	},
	{
		id: 36,
		q: "You find a stash of firewood left by a previous 'tenant'. It is slightly wet so you take care to stack it by the fire pit before foraging nearby for dry wood.",
		a: [{text: "Proceed", next_situation: 37, ss_flag: 0 },
			{text: "Proceed", next_situation: 37, ss_flag: 0 }
		]
	},
	{
		id: 37,
		q: "After some work you have a nice stash of dry firewood to start your fire. During this process the wet wood is dried out and your fuel stores are quite abundant.",
		a: [{text: "Proceed", next_situation: 38, ss_flag: 0 },
			{text: "Proceed", next_situation: 38, ss_flag: 0 }
		]
	},
	{
		id: 38,
		q: "The well-fueled fire warms your bones as well as your dinner. There is plenty of heat to boil some water for tea as well.",
		a: [{text: "Proceed", next_situation: 39, ss_flag: 0 },
			{text: "Proceed", next_situation: 39, ss_flag: 0 }
		]
	},
	{
		id: 39,
		q: "Night approaches and the wind is picking up. You notice that you are quite cold when you arent next to the fire. It bodes poorly.",
		a: [{text: "Proceed", next_situation: 40, ss_flag: 0 },
			{text: "Proceed", next_situation: 40, ss_flag: 0 }
		]
	},
	{
		id: 40,
		q: "The winter night takes it toll on you. While you arrived at your campsite full of energy you now find yourself shivering as the wind whips through your tent. You sleep very poorly.",
		a: [{text: "Proceed", next_situation: 41, ss_flag: 0 },
			{text: "Proceed", next_situation: 41, ss_flag: 0 }
		]
	},
	{
		id: 41,
		q: "You are able to build a small fire and the coffee and eggs you make revitalize you for the hike back to your vehicle.",
		a: [{text: "Proceed", next_situation: 42, ss_flag: 0 },
			{text: "Proceed", next_situation: 42, ss_flag: 0 }
		]
	},
	{
		id: 42,
		q: "Now that you are aware of the exact direction your vehicle lies in you consider the path back. Maybe you would make better time using a more direct route...",
		a: [{text: "No, follow the trail", next_situation: 43, ss_flag: 1 },
			{text: "Yes, the direct route will save time", next_situation: 45, ss_flag: 2 }
		]
	},
	{
		id: 43,
		q: "You take the winding trail back and arrive at your vehicle without any fanfare. Loading your stuff you prepare to leave.",
		a: [{text: "Proceed", next_situation: 44, ss_flag: 0 },
			{text: "Proceed", next_situation: 44, ss_flag: 0 }
		]
	},
	{
		id: 44,
		q: "As you pile into the car and turn the heater on full blast you consider the lessons you learned during your trip. You will consider your gear choices with a bit more gravity in the future.",
		a: [{text: "Restart?", next_situation: 0, ss_flag: 3 },
			{text: "Restart?", next_situation: 0, ss_flag: 3 }
		]
	},
	{
		id: 45,
		q: "You head out straight in the direction of your vehicle. Everybody knows the shortest path between two points is a straight line.",
		a: [{text: "Proceed", next_situation: 46, ss_flag: 0 },
			{text: "Proceed", next_situation: 46, ss_flag: 0 }
		]
	},
	{
		id: 46,
		q: "Pushing through snowy field and navigating around the large ravines is fairly successful right up until you twist your ankle. Hobbling forward on your throbbing ankle you eventually find your path intersecting with the winding path. Knowing you cant continue through rough terrain in your current state, you begrudingly take the path for the final leg of your joruney.",
		a: [{text: "Proceed", next_situation: 47, ss_flag: 0 },
			{text: "Proceed", next_situation: 47, ss_flag: 0 }
		]
	},
	{
		id: 47,
		q: "You arrive back at the vehicle, warmed through from your exertion. The throbbing in your ankle is getting worse though. Quickly you pack your gear into the vehicle and start your way home. Perhaps this injury could have been prevented?",
		a: [{text: "Restart?", next_situation: 0, ss_flag: 3 },
			{text: "Restart?", next_situation: 0, ss_flag: 3 }
		]
	},
	{
		id: 48,
		q: "You decide on the direct heading and begin your trek through the snow.",
		a: [{text: "Proceed", next_situation: 49, ss_flag: 0 },
			{text: "Proceed", next_situation: 49, ss_flag: 0 }
		]
	},
	{
		id: 49,
		q: "Sheer cliff faces and long ravines force you to retrace your steps several different times. Eventually you are able to find your way back to the head of the trail. After losing several hours of daylight you decide to follow the trail.",
		a: [{text: "Proceed", next_situation: 50, ss_flag: 0 },
			{text: "Proceed", next_situation: 50, ss_flag: 0 }
		]
	},
	{
		id: 50,
		q: "You find a stash of firewood left by a previous 'tenant'. It is slightly wet so you take care to stack it by the fire pit. The night is coming on quickly now and you have only a meagre stash of fuel. Maybe there is some dry wood nearby...",
		a: [{text: "Search for the dry wood", next_situation: 51, ss_flag: 0 },
			{text: "Focus your efforts on lighting the meagre and wet stash you have", next_situation: 53, ss_flag: 0 }
		]
	},
	{
		id: 51,
		q: "You grab your flashlight and head out to find anything that would make better fuel.",
		a: [{text: "Proceed", next_situation: 52, ss_flag: 0 },
			{text: "Proceed", next_situation: 52, ss_flag: 0 }
		]
	},
	{
		id: 52,
		q: "You wander in the growing dark, but your search proves fruitless. If you had done this in the daylight the results might be different but your small flashlight is no help in locating any further fuel for your campfire.",
		a: [{text: "Proceed", next_situation: 54, ss_flag: 0 },
			{text: "Proceed", next_situation: 54, ss_flag: 0 }
		]
	},
	{
		id: 53,
		q: "The going is slow and the fire is stubborn but you are eventually able to get a fire started.",
		a: [{text: "Proceed", next_situation: 54, ss_flag: 0 },
			{text: "Proceed", next_situation: 54, ss_flag: 0 }
		]
	},
	{
		id: 54,
		q: "With your meagre fire you prepare to carefully ration the wood you have in order to heat your bones and food.",
		a: [{text: "Proceed", next_situation: 55, ss_flag: 0 },
			{text: "Proceed", next_situation: 55, ss_flag: 0 }
		]
	},
	{
		id: 55,
		q: "Your dinner is quite cold but crouching close to the fire you are able to keep most of the chill off.",
		a: [{text: "Proceed", next_situation: 56, ss_flag: 0 },
			{text: "Proceed", next_situation: 56, ss_flag: 0 }
		]
	},
	{
		id: 56,
		q: "Its now fully dark out and you make preparations to rest.",
		a: [{text: "Proceed", next_situation: 57, ss_flag: 0 },
			{text: "Proceed", next_situation: 57, ss_flag: 0 }
		]
	},
	{
		id: 57,
		q: "You awaken to the unmistakable sight of pearly gates. Saint Peter chides you for neglecting to prepare properly for your trip. That was the last one you will take it seems.",
		a: [{text: "Restart?", next_situation: 0, ss_flag: 3 },
			{text: "Restart?", next_situation: 0, ss_flag: 3 }
		]
	}*/
]			

var start = true;
var survival_score = 0;


function iterate(id) {
	
	console.log("placemarker 1");
	
	var answer = document.getElementsByClassName("answer");
	answer[0].innerText = "";
	
	const question = document.getElementById("question");
	
	question.innerText = situations[id].q; 
	
	const answer_1 = document.getElementById("ans_1");
	const answer_2 = document.getElementById("ans_2");

	
	answer_1.innerText = situations[id].a[0].text;
	answer_2.innerText = situations[id].a[1].text;

	
	answer_1.next = situations[id].a[0].next_situation; 
	answer_2.next = situations[id].a[1].next_situation; 
	
	console.log("placemarker 2");
	
	console.log("this is the current id number before selecting the next answer: " + id);
	
	var selected = 0;
	
	 answer_1.addEventListener("click", () => {
        answer_1.style.backgroundColor = "#d1c6ad";
        answer_2.style.backgroundColor = "#6c91c2";
        selected = answer_1.next;
		proceed(selected);
		console.log("next selected is: " + selected);
    })
  
    // Show selection for answer_2
    answer_2.addEventListener("click", () => {
        answer_1.style.backgroundColor = "#6c91c2";
        answer_2.style.backgroundColor = "#d1c6ad";
        selected = answer_2.next;
		proceed(selected);
		console.log("next selected is: " + selected);
    })
	
	console.log("placemarker 3");
	
	//Restart method
	const restart = document.getElementsByClassName("restart");
	
	restart[0].addEventListener("click", function (e) {
		if (selected >= 1) {
			iterate(0);
			survival_score = 0; 
		} else {
			return; 
		}

	})
	
	console.log("placemarker 4");
	
}

function proceed(selected) {
	
	console.log("placemarker 5");
	
	const proceed = document.getElementsByClassName("proceed")[0];

	proceed.addEventListener("click", () => {
		console.log("placemarker 6");
		if (selected >= 1) {
			iterate(selected);
			console.log("placemarker 7");
		}
		
	})
}


if (start) {
	iterate(0);
}