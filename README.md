# My Awesome Project
The Snarky Skies weather app, was built with vanilla JavaScript and powered by the Google Geocoding API and Open Weather API. This sassy little app delivers up-to-the-minute weather updates, complete with a minutely rain graph to keep you prepared for any rain!

**Link to project:** https://alexrobinett.github.io/Simple-Weather/

![snarkyskies-](https://user-images.githubusercontent.com/59510577/219566128-e37532ef-55b6-4d58-87ef-bad7380dea83.png)

## How It's Made:

**Tech used:** HTML, Tailwind CSS, JavaScript, Webpack

Introducting  Snarky Skies, my latest project built with HTML, Tailwind CSS, and vanilla JS, utilizing the Google Geocoding API and Open Weather 3.0 API for accurate weather updates. This project aims to create a mobile-first experience that scales seamlessly to desktop and provides a touch of humor to your weather updates.

One of the main features of Snarky Skies is the minutely rain graph, inspired by one of my favorite weather apps, Dark Skies. The project also features funny messages that are stored on an object in arrays, taking inspiration from Carrot Weather.

To make the project lightweight and efficient, I used Tailwind CSS to style the application, and Webpack to bundle everything up. My goal was to create a project that was not only functional but also visually pleasing and fun to use.

Overall, Snarky Skies is a combination of accurate weather updates, witty messages, and a mobile-first design.

## Optimizations
Optimizations:

Storing Funny Messages: In the future, I plan to store the funny messages in a database like MongoDB or PostgressSQL. This will allow for easy updating and management of the message content, enabling more frequent updates with freshed human without having to redeploy the app.

Desktop UI: I am planning on expanding the desktop UI to take advantage of the larger screen size, providing users with more details and visualizations.

Rain Graph Animation: I am looking into ways to optimize the rain graph with animation, with the aim of making it more engaging. This will create a more polished user experience and enhance the overall look and feel of the app.

## Lessons Learned:

Through this project, I gained valuable experience working with Tailwind CSS, which was a new technology for me. While I already had a good understanding of regular CSS, learning the syntax for Tailwind CSS was a bit of challenge bit after I pciked it up development went quickly.

Another area where I faced challenges was in the configuration of Webpack, which led to some errors in rendering the CSS. However, overcoming these challenges helped me understand the intricacies of bundling and managing dependencies using Webpack.

Additionally, I learned a lot about displaying data on the rain graph. Initially, I took the raw rain data per minute, but quickly realized that this approach resulted in a graph that was difficult to read due to the spikes in the data. Through research, I discovered the moving average algorithm, which helped to smooth out the data and set the maximum value of the graph based on the smoothed data. This approach significantly improved the appearance of the graph, making the data more uniform and easier to read.
