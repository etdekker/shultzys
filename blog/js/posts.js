var posts = [
	{
		"title":"OktoBEERfest Party",
		"images":["oktobeerfest1.jpg", "oktobeerfest2.jpg", "oktobeerfest.jpg"],
		"body":"Well, as promised, the OktoBEERfest party last Saturday night was full of all kinds of Okto fun! A lot of beer was consumed, there were lederhosen and dirndl sightings, a wooden keg was tapped (and consumed) and some steins were hoisted.<br>A good time was had by all, but the best news of all is, we still have lots of delicious #oktobeerfest beers to drink!! Check out what's pouring by following us @shultzys, tell us what you're enjoying now or even post a photo of your liter using #oktobeerfest.",
		"date": "10/7/14"
	},
	{
		"title":"Fall Sausage, Another First!!",
		"images":["front.jpg"],
		"body":"We've really been having a lot of fun with these Sausage Specials, hopefully you have too. This one is different, even for us. Is it a link? Is it a sausage burger? NO, it's a crumble! Our Red Hot Buffalo Crumble to be exact. A spicy, tasty, loose ground chicken sausage that we're serving three different ways for you to enjoy. 1) The Buffalo Joe; think of a sloppy joe without tomato sauce, instead we use blue cheese dressing, which also helps to beat the heat. This one is served in a basket with fries, coleslaw and celery(if you want). 2) The Buffalo Caesar; our caesar salad with the chicken crumble and blue cheese, wait for it, crumbles. 3) Buffalo Fries; Our World's Greatest Fries topped with chicken crumble (déjà vu?) and blue cheese dressing. That's it; a sandwich, a salad or a snack, our most versatile sausage ever. Wait! That's not all!! It's OktoBEERfest!!! We've got over 31 beers lined up so far, that number could grow, but we need help drinking them. Steve German at Victory Brewing was nice enough to let us have some of their Zeltbier again this year. This beer is available in two places, Downingtown Pennsylvania (that's where the brewery is) and Shultzy's (that's where we, and hopefully you, are). Alright, I think that's everything now. Except for this pretty picture of the restaurant at night. ",
		"date":"9/18/14"
	},
	{
		"title":"A New Sausage for the Summer?",
		"images":["summer1.jpg", "summer2.jpg"],
		"body":"It's true! We’ve released a new sausage this summer to help commemorate our 25th anniversary. The BBQ Sausage Sandwich link was crafted to pair with our own Bourbon BBQ Sauce, with spices selected to enhance and complement the flavors of our house made sauce. It becomes an even bigger treat when paired with one of our carefully selected draft beers. Don’t forget, the whole experience can be made even more special by enjoying it all in our Biergarten. Die Sonne sheint! (The sun is shining!)",
		"date": "7/26/14"
	},
	{
		"title":"World Cup Continues! The Knockouts have Begun!",
		"images":["worldcup.jpg"],
		"body":"It's the final week of 9am games, win or go home and the US has survived the Group of Death. We have had great lively crowds here for the matches so far and we're looking forward to excitement that comes with this phase of the tournament. If you haven't come in yet for one of the early games, you're missing out on some great deals. We have a, not often available, breakfast menu and a handful of drink specials for all of the 9AM matches. Check out the World Cup Menu to the right for see everything on the breakfast menu. (Limited to supplies on hand, once it's gone, there's no going back.) Come show your support, wear your colors, meet new rabid fans like yourself and have some great food and drink!",
		"date": "6/28/14"
	},
	{
		"title":"Four Days of Four Leaf Festivities",
		"images":["fourleaf.jpg"],
		"body":"Starting today, Friday 3/14, at 4pm until Midnight Monday 3/17. Shultzy's becomes O'Shultzy's, all day specials on select Irish cocktails and libations, $6 for Traditional 20 oz., that's right I said 20 oz., Imperial Pints of Guinness draught. Heck, we even have the a green German beer, O'Bitburger! I almost forgot, an amazing Happy Hour special, until 6 today, all-day Sunday and 3-6 Monday. Banger & Mash, our sausage of the month, one Banger, Buttermilk Mashed Potatoes, Gravy and Peas - all for $4.99!!!",
		"date": "3/14/14"
	}
];

posts.forEach(function(post) {
    post.date = new Date(post.date);
});
