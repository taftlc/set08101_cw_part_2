const situations = [{
		id: 0,
		q: "Faced with a long weekend you have a choice over where you will spend a few days rough camping. Where would you like to go?",
		a: [{ text: "Mountains", next_situation: 1, ss_flag: 0 },
			{ text: "Forest", next_situation: 58, ss_flag: 0  }
		]
	},
	{
		id: 1,
		q: "Theres a beautiful trek up some nearby mountains. Its bound to be cold but that never bothered you much anyway.",
		a: [{text: "Proceed", next_situation: 2, ss_flag: 0 },
			{text: "Proceed", next_situation: 2, ss_flag: 0 }
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
	{
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
			{text: "Focus your efforts on lighting fuel you have", next_situation: 24, ss_flag: 0 }
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
			{text: "Focus your efforts on lighting fuel you have", next_situation: 53, ss_flag: 0 }
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
	},
	{
		id: 58,
		q: "There is a nice stretch of woods nearby. Its perfect for a hike and the chance to see some wildlife.",
		a: [{text: "Proceed", next_situation: 59, ss_flag: 0 },
			{text: "Proceed", next_situation: 59, ss_flag: 0 }
		]
	},
	{
		id: 59,
		q: "The weather report is clear and your gear is packed. You are ready for your hike and night in the rough.",
		a: [{text: "Proceed", next_situation: 60, ss_flag: 0 },
			{text: "Proceed", next_situation: 60, ss_flag: 0 }
		]
	},
	{
		id: 60,
		q: "On your arrival you set out on one of the many trails. Covering several miles you take a few pictures of various local flora and fauna.",
		a: [{text: "Proceed", next_situation: 61, ss_flag: 0 },
			{text: "Proceed", next_situation: 61, ss_flag: 0 }
		]
	},
	{
		id: 61,
		q: "As you stop to take a break you reach for a snack in your bag only to find you left your trail mix at home. As you are faced with the prospect of a single cereal bar you spot some bushed filled with clumps of what appears to be cranberries.",
		a: [{text: "Finish your dissapointing snack and press on.", next_situation: 62, ss_flag: 1 },
			{text: "Eat some berries.", next_situation: 80, ss_flag: 2 }
		]
	},
	{
		id: 62,
		q: "You finish your snack and cast one last look at the unidentified berries before continuing down the trail.",
		a: [{text: "Proceed", next_situation: 63, ss_flag: 0 },
			{text: "Proceed", next_situation: 63, ss_flag: 0 }
		]
	},
	{
		id: 63,
		q: "As you continue you soon reach a clearing with a great view and a clear stream gurgling nearby",
		a: [{text: "Proceed", next_situation: 64, ss_flag: 0 },
			{text: "Proceed", next_situation: 64, ss_flag: 0 }
		]
	},
	{
		id: 64,
		q: "You set about making your camp and getting a fire started.",
		a: [{text: "Proceed", next_situation: 65, ss_flag: 0 },
			{text: "Proceed", next_situation: 65, ss_flag: 0 }
		]
	},
	{
		id: 65,
		q: "Due to the prevelance of natural springs and streams in the area, you packed minimal water. Now would be a good time to investigate that nearby stream.",
		a: [{text: "Proceed", next_situation: 66, ss_flag: 0 },
			{text: "Proceed", next_situation: 66, ss_flag: 0 }
		]
	},
	{
		id: 66,
		q: "You collect some water filtering out the silt through your trusty bandana. You are thirsty now, but typically you would want to boil the water first. It looks pretty clean...",
		a: [{text: "Drink the water now", next_situation: 67, ss_flag: 2 },
			{text: "Boil the water for 2-3 minutes before consuming", next_situation: 69, ss_flag: 1 }
		]
	},
	{
		id: 67,
		q: "You drink the water tenatively at first. You dont detect anything wrong with it and proceed to take a few gulps and collect some for later.",
		a: [{text: "Proceed", next_situation: 68, ss_flag: 0 },
			{text: "Proceed", next_situation: 68, ss_flag: 0 }
		]
	},
	{
		id: 68,
		q: "You set about preparing your evening meal now.",
		a: [{text: "Proceed", next_situation: 70, ss_flag: 0 },
			{text: "Proceed", next_situation: 70, ss_flag: 0 }
		]
	},
	{
		id: 69,
		q: "You boil the water for 2-3 minutes. Its too hot to drink intially but you rest the kettle in the stream and the current quickly reduces it to drinking temperature.",
		a: [{text: "Proceed", next_situation: 68, ss_flag: 0 },
			{text: "Proceed", next_situation: 68, ss_flag: 0 }
		]
	},
	{
		id: 70,
		q: "In the distance up the stream you notice several deer drinking from the stream you had collected from. Hopefully that water was clean...",
		a: [{text: "Proceed", next_situation: 71, ss_flag: 0 },
			{text: "Proceed", next_situation: 71, ss_flag: 0 }
		]
	},
	{
		id: 71,
		q: "After your dinner you sit by the fire and whittle for awhile before turning in for a restful nights sleep.",
		a: [{text: "Proceed", next_situation: 72, ss_flag: 0 },
			{text: "Proceed", next_situation: 72, ss_flag: 0 }
		]
	},
	{
		id: 72,
		q: "In the morning you are packing your kit and getting ready to move when your breath catches in your throat.",
		a: [{text: "Proceed", next_situation: 73, ss_flag: 0 },
			{text: "Proceed", next_situation: 73, ss_flag: 0 }
		]
	},
	{
		id: 73,
		q: "Through the next clearing you can just make out the shape of a black bear. Once your heart rate has a chance to settle, a thought springs into your mind: this is an excellent photo oppurtunity.",
		a: [{text: "Hell no! Stay quiet and leave.", next_situation: 74, ss_flag: 1 },
			{text: "Creep a little closer and snap a picture.", next_situation: 77, ss_flag: 2 }
		]
	},
	{
		id: 74,
		q: "No social media clout is worth angering a bear.",
		a: [{text: "Proceed", next_situation: 75, ss_flag: 0 },
			{text: "Proceed", next_situation: 75, ss_flag: 0 }
		]
	},
	{
		id: 75,
		q: "Quiet as a mouse you wait for the bear to wander off. You finish packing your kit and hike in the opposite direction. Its a good time to end the trip. Nobody mentioned bears.",
		a: [{text: "Proceed", next_situation: 76, ss_flag: 0 },
			{text: "Proceed", next_situation: 76, ss_flag: 0 }
		]
	},
	{
		id: 76,
		q: "You arrive back at your vehicle refreshed after your communion with nature. A successful trip by all accounts.",
		a: [{text: "Restart?", next_situation: 0, ss_flag: 3 },
			{text: "Restart?", next_situation: 0, ss_flag: 3 }
		]
	},
	{
		id: 77,
		q: "You can already count all the updoots your reddit post will earn you. ",
		a: [{text: "Proceed", next_situation: 78, ss_flag: 0 },
			{text: "Proceed", next_situation: 78, ss_flag: 0 }
		]
	},
	{
		id: 78,
		q: "You are mere meters from the bear when you spot the cub concealed in the tall grass. With a roar the mother bear charges at you full tilt.",
		a: [{text: "Proceed", next_situation: 79, ss_flag: 0 },
			{text: "Proceed", next_situation: 79, ss_flag: 0 }
		]
	},
	{
		id: 79,
		q: "Saint Peter has a good chuckle at your expense. Bears are dangerous animals and a respectful distance should always be kept.",
		a: [{text: "Restart?", next_situation: 0, ss_flag: 3 },
			{text: "Restart?", next_situation: 0, ss_flag: 3 }
		]
	},
	{
		id: 80,
		q: "You scarf down some berries. They definetly looked better on the bush.",
		a: [{text: "Proceed", next_situation: 81, ss_flag: 0 },
			{text: "Proceed", next_situation: 81, ss_flag: 0 }
		]
	},
	{
		id: 81,
		q: "Greedily you eat the berries. They arent great but your stomach is full and you continue your trek.",
		a: [{text: "Proceed", next_situation: 82, ss_flag: 0 },
			{text: "Proceed", next_situation: 82, ss_flag: 0 }
		]
	},
	{
		id: 82,
		q: "As you continue you soon reach a clearing with a great view and a clear stream gurgling nearby",
		a: [{text: "Proceed", next_situation: 83, ss_flag: 0 },
			{text: "Proceed", next_situation: 83, ss_flag: 0 }
		]
	},
	{
		id: 83,
		q: "You set about making your camp and getting a fire started.",
		a: [{text: "Proceed", next_situation: 84, ss_flag: 0 },
			{text: "Proceed", next_situation: 84, ss_flag: 0 }
		]
	},
	{
		id: 84,
		q: "Due to the prevelance of natural springs and streams in the area, you packed minimal water. Now would be a good time to investigate that nearby stream.",
		a: [{text: "Proceed", next_situation: 85, ss_flag: 0 },
			{text: "Proceed", next_situation: 85, ss_flag: 0 }
		]
	},
	{
		id: 85,
		q: "You collect some water filtering out the silt through your trusty bandana. You are thirsty now, but typically you would want to boil the water first. It looks pretty clean...",
		a: [{text: "Boil the water for 2-3 minutes before consuming", next_situation: 86, ss_flag: 1 },
			{text: "Drink the water now", next_situation: 88, ss_flag: 2 }
		]
	},
	{
		id: 86,
		q: "You boil the water for 2-3 minutes. Its too hot to drink intially but you rest the kettle in the stream and the current quickly reduces it to drinking temperature.",
		a: [{text: "Proceed", next_situation: 87, ss_flag: 0 },
			{text: "Proceed", next_situation: 87, ss_flag: 0 }
		]
	},
	{
		id: 87,
		q: "You set about preparing your evening meal now.",
		a: [{text: "Proceed", next_situation: 89, ss_flag: 0 },
			{text: "Proceed", next_situation: 89, ss_flag: 0 }
		]
	},
	{
		id: 88,
		q: "You drink the water tenatively at first. You dont detect anything wrong with it and proceed to take a few gulps and collect some for later.",
		a: [{text: "Proceed", next_situation: 87, ss_flag: 0 },
			{text: "Proceed", next_situation: 87, ss_flag: 0 }
		]
	},
	{
		id: 89,
		q: "In the distance up the stream you notice several deer drinking from the stream you had collected from. Hopefully that water was clean...",
		a: [{text: "Proceed", next_situation: 90, ss_flag: 0 },
			{text: "Proceed", next_situation: 90, ss_flag: 0 }
		]
	},
	{
		id: 90,
		q: "As if on cue you feel yourself become ill. You can see bits of berries coming back to haunt you. The next few hours are a blur of vomiting and diarrhea.",
		a: [{text: "Proceed", next_situation: 91, ss_flag: 0 },
			{text: "Proceed", next_situation: 91, ss_flag: 0 }
		]
	},
	{
		id: 91,
		q: "Come morning you are able to get to your feet after a night without much sleep. Gingerly you pack your belongings and begin the long shuffle back to your vehicle.",
		a: [{text: "Proceed", next_situation: 92, ss_flag: 0 },
			{text: "Proceed", next_situation: 92, ss_flag: 0 }
		]
	},
	{
		id: 92,
		q: "You collapse into the drivers seat. Why would you eat unidentified berries in the woods? You realize you are lucky to be alive.",
		a: [{text: "Restart?", next_situation: 0, ss_flag: 3 },
			{text: "Restart?", next_situation: 0, ss_flag: 3 }
		]
	}
]

var start_flag = 0;


if (start_flag == 0) {
	
	start_flag++; 
	init();

}

function init() {
	
	ss_calc(4); 
	
	main_loop("0");
	
	//use this to intialize 
	
}

function main_loop(next_flag) {
	
	const answer_1 = document.getElementById("ans_1");
	const answer_2 = document.getElementById("ans_2");
	const question = document.getElementById("question");
	const restart = document.getElementById("restart_id"); 
	const proceed = document.getElementById("proceed_id");
	
	answer_1.style.backgroundColor = "#6c91c2";
	answer_2.style.backgroundColor = "#6c91c2";
	
	question.innerText = situations[next_flag].q; 
	answer_1.innerText = situations[next_flag].a[0].text;
	answer_2.innerText = situations[next_flag].a[1].text;

	answer_1.next = situations[next_flag].a[0].next_situation; 
	answer_2.next = situations[next_flag].a[1].next_situation; 

	answer_1.ss_flag = situations[next_flag].a[0].ss_flag; 
	answer_2.ss_flag = situations[next_flag].a[1].ss_flag; 
	
	answer_1.addEventListener("click", () => {
		console.log("answer_1 event listener");
		answer_1.style.backgroundColor = "#d1c6ad";
		answer_2.style.backgroundColor = "#6c91c2";
		next_flag = answer_1.next;
		console.log(next_flag);
	})
	
	answer_2.addEventListener("click", () => {
		console.log("answer_2 event listener");
		answer_1.style.backgroundColor = "#6c91c2";
		answer_2.style.backgroundColor = "#d1c6ad";
		next_flag = answer_2.next;
		console.log(next_flag);
	})

	proceed.addEventListener("click", () => {
		
		ss_calc(answer_2.ss_flag);
		main_loop(next_flag); 
		
	})

	restart.addEventListener("click", () => {
		if (answer_1.next > 0) {
			restart_quiz();
		} else {
			return; 
		}	
	})

}

function restart_quiz() {
	
	ss_calc(4); 
	main_loop(0);
	

}

function ss_calc(ss_flag) {
	
	/*	flags are 0 for neutral effect
	1 for positive effect
	2 for negative effect
	3 is a trigger to calculate total score
	4 is for init/restart, it zeroes current survival score and runs an hs_update*/
	
	switch (ss_flag) {
		case 0:
			break;
		case 1:
			survival_score++;
			break;
		case 2:
			survival_score--; 
			break;
		case 3:
			update_highscore(survival_score);
			break;
		case 4:
			survival_score = 0;
			update_highscore(survival_score);
			break;
	}

	
}

function update_highscore(survival_score) {
	
	var ss_highscore_display = document.getElementById("ss_hs");
	
	if (survival_score > localStorage.getItem("ss_highscore")) {
	
		localStorage.setItem("ss_highscore", survival_score); 
	}
		
	ss_highscore_display.innerText = "Your current highscore is: " + localStorage.getItem("ss_highscore"); 
	
	return; 
	
}
