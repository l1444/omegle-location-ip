# Omegle Location by L14
Find an ip address, and the location of someone on omegle.
(the API key is offered with;)
![demo](https://nsa40.casimages.com/img/2021/02/16/mini_210216073755970111.gif)

Soon there will be a tutorial in **French**, to tell a little more about how omegle works and how does it work?

## How does omegle work to have such a big flaw?
So I'm going to explain to you what I understood, basically omegle is using WebRTC for the use of realtime sending from the camera, to another person. As omegle does not need to store cameras in real time etc. Omegle uses P2P technology, so you are a client and a server, so you must have the client's IP address to be able to connect to the server ( in theory but normally it's a little more complex than that)

**An image that represents how WebRTC *(Web Real-Time Communication)* works. from wikipedia**

![FR](https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Webrtc_triangle_architecture.svg/800px-Webrtc_triangle_architecture.svg.png)

## How did the github author find the flaw?
It was not really me who found the flaw, I was walking on a forum and I saw it so normal while intrigued I copy the code, and I see how it works, and subsequently it interested me and I tested and it works (still in theory)

## Does it work in all cases?
Of course not, otherwise it will be too good first for people who use vpn, suddenly it does not give a real IP address so it is not its address. Otherwise since the fiber has become democratized, the IP address no longer gives where the person with this IP address lives, but the server address, but with ADSL you could have a 98% chance of knowing his neighborhood and even its location.
Otherwise people who use 4G, 3G etc, are not immune since it goes directly to the terminal next to your home, so it's easy to know in which neighborhood you live!

## Why did you share this in a github?
Only to prevent :)