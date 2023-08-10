import React, { useEffect } from "react";
import { load } from "@2gis/mapgl";

const Map = () => {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [60.614842, 56.836161],
        zoom: 12,
        key: "56bb8749-bb8f-4d10-b59a-18b87c7214e1",
      });
      map.emit = (event, data) => {
        if (event === "click") {
          console.log(data.lngLat);
        }
      };
    });

    return () => map && map.destroy();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapWrapper />
    </div>
  );
};

const MapWrapper = React.memo(
  () => {
    return <div id="map-container" style={{ width: "100%", height: "100%" }}></div>;
  },
  () => true
);

export default Map;
