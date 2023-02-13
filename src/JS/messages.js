function currentMessages(weatherData){
    const messages = {}
    messages.rain = [`rain Message Test and its cold & ${weatherData.main}.`, `rain Message Test 2 and its cold & ${weatherData.main}.`],
    messages.clear = [`it feels like ${weatherData.feel}, Don't Forget to put on Sunscreen.`, `its ${weatherData.feel} and Clear outside Look out for starts or maybe the sun`],
    messages.thunderstorm = [`its ${weatherData.feel} and pouring outside get a umbrella and a BOAT!` , `its ${weatherData.feel} and pouring outside get a umbrella and a BOAT! message 2` ],
    messages.drizzle =[`its ${weatherData.feel} and drizzlin outside get a umbrella and stay dry`, `its ${weatherData.feel} and this is test message 2 on drizzle`],
    messages.snow = [`it's snowing feels like ${weatherData.feel}, Stay warm and maybe don't drive for a bit.`, `This is a test message on snow: ${weatherData.main}`],
    messages.clouds =[`it's cloudy feels like ${weatherData.feel}, Stay warm and maybe run a bit.`]

    return messages
}

function returnMessage(weatherData , message){
    if(weatherData.main === "Rain"){
        console.log(message.rain[Math.floor(Math.random() * message.rain.length)])
        return message.rain[Math.floor(Math.random() * message.rain.length)]
    } if(weatherData.main === "Clear"){
        console.log(message.clear[Math.floor(Math.random() * message.clear.length)])
        return message.clear[Math.floor(Math.random() * message.clear.length)]
    } if(weatherData.main === "Snow"){
        console.log(message.snow[Math.floor(Math.random() * message.snow.length)])
        return message.snow[Math.floor(Math.random() * message.snow.length)]
    } if(weatherData.main === "Clouds"){
        console.log(message.clouds[Math.floor(Math.random() * message.clouds.length)])
        return message.clouds[Math.floor(Math.random() * message.clouds.length)]
    } if(weatherData.main === "Drizzle"){
        console.log(message.rain[Math.floor(Math.random() * message.drizzle.length)])
        return message.drizzle[Math.floor(Math.random() * message.drizzle.length)]
    } if(weatherData.main === "Thunderstorm"){
        console.log(message.thunderstorm[Math.floor(Math.random() * message.thunderstorm.length)])
        return message.thunderstorm[Math.floor(Math.random() * message.thunderstorm.length)]
    }
}


export {currentMessages, returnMessage}