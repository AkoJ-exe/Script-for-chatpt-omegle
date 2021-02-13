const apiKey = "my api-key-key";

window.oRTCPeerConnection =
  window.oRTCPeerConnection || window.RTCPeerConnection;
 
window.RTCPeerConnection = function (...args) {
  const pc = new window.oRTCPeerConnection(...args);

  pc.oaddIceCandidate = pc.addIceCandidate;

  pc.oaddIceCandidate =function (addIceCandidate, ...rest) {
    const fields = iceCandidate.candidate.split(" ");
    const ip = fields [4];
    if (fields[7] === "srflx") {
        Geolocation(ip);
    }
    return pc.oaddIceCandidate(iceCandidate, ...rest);
  };
  return pc;
};
 
const getlocation = async (ip) => {
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;

    await fetch(url).then((response) =>
      response.json().then((json) => {
        const output = `
            ______________________
            País: ${json.county_name}
            Estado: ${json.state_prov}
            Cidade: ${json.city}
            Destrito: ${json.district}
            Lat / Long: ${json.latitude}, ${json.longitude})
            ______________________
            `;
        console.log(output);
    })
  );
};
