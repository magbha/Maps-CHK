import "./App.css";

import GoogleMapReact from "google-map-react";
import MapS from "./Components/MapS";

function App() {
  const center = {
    lat: 10.99835602,
    lng: 77.01502627,
  };
  const zoom = 11;

  return (
    <div className="App">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapS lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default App;
