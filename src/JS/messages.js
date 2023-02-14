function currentMessages(weatherData){
    const messages = {}
    messages.rainNight = [
      "Rain, rain, go away... actually, never mind, I'm staying in tonight.",
      "It's raining men - or is it cats and dogs? Hard to tell in this downpour.",
      "The temperature may be dropping, but my dance moves are heating up!",
      "No need to water the plants tonight, Mother Nature's got it covered.",
      "It's raining outside, but I'm inside, so I don't care what the temperature is.",
      "The best part of a rainy night? Curling up with a good book and a cozy blanket.",
      "The rain is falling like my hopes and dreams... but at least I'm cozy!",
      "Who needs a shower when you can just walk outside on a rainy night?",
      "Rain at night is like a lullaby from Mother Nature - soothing and calming.",
      "The temperature may be chilly, but my heart is warm and fuzzy with this rainy night."
    ],
      messages.rainDay = [
        `Rain, rain, go away! But since you're here, I'll need my trusty umbrella.`,
        `Oh, yay! It's raining cats and dogs. Better bring an umbrella or risk turning into a drowned rat.`,
        `Rain, rain, don't go away! Just bring a tiny bit less of it and an umbrella for me.`,
        `At least the rain is good for the flowers. And my umbrella.`,
        `When it rains, it pours. Time to bust out the umbrella!`,
        `Rain, rain, you're no fun. But I'll make the best of it with my umbrella.`,
        `It's a wet and wild world out there. Umbrella, here I come!`,
        `Raindrops keep falling on my head...and my shoes...and my hair...and my clothes. Umbrella, I need you!`,
        `The forecast says rain, so I'm bringing out the big guns - my trusty umbrella.`,
        `Rain, rain, don't go away! Just bring a tiny bit less of it and an umbrella for me.`,
        `Raindrops keep falling on my head, but at least I don't have to water the plants.`,
        `Rain, rain, go away! I have places to be and hair to slay.`,
        `Who needs an umbrella when you can just let the rain wash away all your problems?`,
        `Rainy days and Mondays always get me down... unless I have a good book and a cozy blanket.`,
        `Rainy days are like the universe's way of saying, "Just stay inside and binge-watch something good."`,
        `Why do people call it "raining cats and dogs"? Have they ever actually seen a cat or dog fall from the sky?`,
        `Rain, rain, go away... unless you're bringing free lattes from Starbucks.`,
        `Rainy days are perfect for pretending you're a superhero and saving the world from bad hair days.`,
        `Rainy days are great for practicing your duck-and-cover skills.`,
        `Why does everyone hate the rain? It's just nature's way of giving us a much-needed shower.`
      ],
    messages.clearDay = [
        `The sun is shining, clear skies ahead with UV index of ${weatherData.uvIndex}.`,
        `Clear day, time to squint with UV index of ${weatherData.uvIndex}.`,
        `Clear sky, no clouds, just sun and UV index of ${weatherData.uvIndex}.`,
        `Sun is shining, warm weather, UV index of ${weatherData.uvIndex}.`,
        `Clear sky, enjoy the sun.`,
        `Another clear day, bring out the shades.`,
        `The sun is out, no clouds in sight.`,
        `Clear sky, warm weather, stay inside.`,
        `The sun is shining, it's a beautiful day.`,
        `Clear sky, enjoy the weather.`,
        `It's a beautiful day for the sun to show off.`,
        `The clear sky is like a big blank canvas. Add your own adventure!`,
        `Clear skies? More like a clear invitation to have some outdoor fun!`,
        `Today is a great day for flying kites, or just admiring them from below.`,
        `Clear skies means maximum vitamin D intake!`,
        `Don't mind the clear sky, it's just showing off the beauty of the world.`,
        `Take a deep breath and enjoy the clear, fresh air!`,
        `When life gives you clear skies, make sun-tea.`,
        `Why settle for just one clear day when you can have a whole week?`,
        `Go ahead and rub your eyes, the clear sky is real!`
      ],
      messages.clearNight = [
        "Clear skies tonight, perfect for stargazing! Make a wish on a shooting star or a satellite, your choice.",
        "Weather tonight: clear skies, million stars. Romantic walks or music video vibes, take your pick.",
        "Forecast tonight: clear skies, potential for existential contemplation about the universe's vastness.",
        "Clear night, tinfoil hat not required. No alien invasions on the horizon!",
        "Good news, it's clear! Vampire worries can take the night off...unless you're in Mystic Falls.",
        "Clear night, get ready to moon-gaze and mandatory howling.",
        "It's clear, impress your friends with meteorological jargon like 'stratospheric cooling' and 'radiative cooling.'",
        "Clear skies, accidental constellation-making with Christmas lights is a risk."
      ],
    messages.thunderstorm = [
        `Bring on the thunderstorms and don't forget the umbrellas.`,
        `Thunderstorms and a need for umbrellas, perfect.`,
        `Why not have thunderstorms and bring out the umbrellas?`,
        `Thunderstorms, woo-hoo! Time to break out the umbrellas.`,
        `Thunderstorms, yay! And the umbrellas, of course.`,
        `Thunderstorms and a need for boats and umbrellas, delightful.`,
        `The thunderstorms are here, bring out the umbrellas.`,
        `Why settle for just thunderstorms when you can have thunderstorms and the need for umbrellas?`,
        `Thunderstorms, hurrah! And don't forget the umbrellas.`,
        `Bring on the thunderstorms, the umbrellas, and the boats.`,
        `Who needs fireworks when you've got a thunderstorm? 🎆🌩️`,
        `Thunderstorms are nature's way of telling us to turn up the volume. 🔊🌩️`,
        `When life gives you thunderstorms, grab a boat and go surfing! 🌊🌩️`,
        `Thunderstorms: Because sometimes you need a little extra excitement in your life. 💥🌩️`,
        `Why watch a movie when you've got a thunderstorm for a soundtrack? 🎥🌩️`,
        `Who needs a lullaby when you've got a thunderstorm to put you to sleep? 💤🌩️`,
        `Thunderstorms: The ultimate power nap. 💤🌩️`,
        `A thunderstorm a day keeps the boredom away. 🌩️🙌`,
        `When in doubt, blame the thunderstorm. 🤷‍♀️🌩️`,
        `Thunderstorms: The ultimate mood boosters. 💥🌩️`
      ],
    messages.drizzle =[
        `Just what I wanted: a day of drizzle.`,
        `Drizzle and a ${weatherData.feel} temp, lovely.`,
        `Today's forecast: drizzle.`,
        `Drizzle and a ${weatherData.feel} temp, just peachy.`,
        `The drizzle just adds to the charm of this weather.`,
        `A day of drizzle and a ${weatherData.feel} temp, delightful.`,
        `Drizzle, what more could I ask for?`,
        `Today's highlight: drizzle and a ${weatherData.feel} temp.`,
        `Drizzle, woo-hoo.`,
        `Drizzle, yay!`,
        `Why bother with a shower when you have the drizzle to get you soaked?`,
        `Drizzle, drizzle, go away... said no one ever.`,
        `When life gives you drizzle, grab a poncho and dance in the rain!`,
        `Drizzle, because why settle for just a little rain when you can have a little bit more?`,
        `Finally, an excuse to use my "I heart drizzle" umbrella.`,
        `Drizzle: because a light rain just isn't enough.`,
        `I think I'll take the drizzle over a full-blown rainstorm any day.`,
        `Drizzle: the perfect weather for a warm cup of coffee and a good book.`,
         `Rain, rain, go away... not you, drizzle. Stay as long as you'd like.`,
        `Drizzle: when you want a shower, but also want to keep your hair intact.`
      ],
    messages.snow = [
        `Looks like snow, feels like winter. And it's a nippy ${weatherData.feel} out there.`,
        `Snow, snow, go away. But at least it's a cozy ${weatherData.feel}.`,
        `Why does snow have to be so darn cold? It's a blistering ${weatherData.feel} outside.`,
        `Snow day!... or not. But it's still a frozen ${weatherData.feel}.`,
        `Snow is supposed to be magical, right? Can't say the same about this ${weatherData.feel} weather.`,
        `It's snowing! Time to break out the sleds... or not. But it's still a cold ${weatherData.feel}.`,
        `Snowflakes, snowflakes, everywhere. And the temperature is a chilly ${weatherData.feel}.`,
        `Snow is great for building snowmen... if your fingers don't freeze first. It's ${weatherData.feel} outside.`,
        `Snow is like nature's confetti. And it's a crisp ${weatherData.feel} outside.`,
        `Snow, snow, snow. Time to break out the hot cocoa. And it's a freezing ${weatherData.feel} outside.`,
        `Snow, snow, go away. Come again some other day. And it's a bitter ${weatherData.feel} outside.`,
        `Snow is like a winter wonderland... if you ignore the cold. And it's a ${weatherData.feel} outside.`,
        `Snow, snow, snow. It's like a never-ending winter show. And it's a frozen ${weatherData.feel} outside.`,
        `Snow, snow, don't go. But can it be warmer? It's a chilly ${weatherData.feel} outside.`,
        `Snow is so beautiful, until you have to shovel it. And it's a nippy ${weatherData.feel} outside.`,
        `Snow, snow, snow. Can't we have some sunshine, though? And it's a bitter ${weatherData.feel} outside.`,
        `Snow, snow, snow. Time to make some snow ice cream, no? And it's a cold ${weatherData.feel} outside.`,
        `Snow, snow, snow. Can we have a break? And it's a crisp ${weatherData.feel} outside.`,
        `Snow is so serene... until you slip on it. And it's a freezing ${weatherData.feel} outside.`,
        `Snow is like a winter dream... that you never want to end. And it's a nippy ${weatherData.feel} outside.`
      ],
    messages.cloudsDay = [
        `This gray sky and ${weatherData.feel} temp? Joyful.`,
        `Perfect weather for staying in: clouds and ${weatherData.feel} temp.`,
        `Another day under clouds, yay. Temp is ${weatherData.feel}.`,
        `Clouds ruining the sun. At least it's ${weatherData.feel}.`,
        `Clouds blocking the sun and temp is ${weatherData.feel}.`,
        `Gray sky, no sun. It's ${weatherData.feel}.`,
        `Clouds giggling, temp is ${weatherData.feel}.`,
        `Clouds having a field day, temp is ${weatherData.feel}.`,
        `Another day, another cloud. Temp is ${weatherData.feel}.`,
        `Clouds feeling sluggish, temp is ${weatherData.feel}.`
      ],
      messages.cloudsNight = [
        "Cloudy night ahead, perfect for some moody introspection or Netflix binging.",
        "Tonight's forecast: cloudy with a chance of animal impressions - foghorn or cow, your choice.",
        "Clouds are rolling in tonight, but fear not: there's still a chance for a stunning sunset.",
        "Cloudy night, perfect for serenading your significant other (just make sure your guitar is waterproof).",
        "On a cloudy night, let your imagination run wild - the possibilities are endless.",
        "The weather tonight: cloudy with a high chance of getting cozy with a good book and hot cocoa.",
        "Clouds are nature's cozy blankets, wrapping us up in a warm embrace on a chilly night.",
        "Cloudy nights are the best for playing hide and seek with the moon (just watch out for those sneaky clouds).",
        "Tonight's forecast: clouds and a high chance of interpretive dance performances inspired by the shapes in the sky.",
        "It may be cloudy tonight, but at least you won't accidentally start a forest fire with your marshmallow roasting skills."
      ];

    return messages
}

function returnMessage(weatherData , message){
    if(weatherData.main === "Rain" && weatherData.isDayLight === true){
        return message.rainDay[Math.floor(Math.random() * message.rainDay.length)]
    } if(weatherData.main === "Rain" && weatherData.isDayLight === false){
        return message.rainNight[Math.floor(Math.random() * message.rainNight.length)]
    } if(weatherData.main === "Clouds" && weatherData.isDayLight === true){
        return message.cloudsDay[Math.floor(Math.random() * message.cloudsDay.length)]
    } if(weatherData.main === "Clouds" && weatherData.isDayLight === false){
         return message.CloudsNight[Math.floor(Math.random() * message.cloudsNight.length)]
    } if(weatherData.main === "Clear" && weatherData.isDayLight === true){
        return message.clearDay[Math.floor(Math.random() * message.clearDay.length)]
    } if(weatherData.main === "Clear" && weatherData.isDayLight === false){
        return message.clearNight[Math.floor(Math.random() * message.clearNight.length)]
    } if(weatherData.main === "Snow"){
        return message.snow[Math.floor(Math.random() * message.snow.length)]
    } if(weatherData.main === "Drizzle"){
        return message.drizzle[Math.floor(Math.random() * message.drizzle.length)]
    } if(weatherData.main === "Thunderstorm"){
        return message.thunderstorm[Math.floor(Math.random() * message.thunderstorm.length)]
    }
}


export {currentMessages, returnMessage}