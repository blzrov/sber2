import React, { useEffect, useRef } from "react";
import { load } from "@2gis/mapgl";
import { key2GIS } from "../helpers/api";

const Map = () => {
  let mapRef = useRef();
  let mapAPIRef = useRef();

  useEffect(() => {
    let isMarked = false;
    function handleClick(lngLat) {
      console.log(isMarked);
      isMarked = true;
      new mapAPIRef.Marker(mapRef, {
        coordinates: lngLat,
      });
    }

    load().then((mapglAPI) => {
      let map;
      map = new mapglAPI.Map("map-container", {
        center: [60.614842, 56.836161],
        zoom: 12,
        key: key2GIS,
      });
      map.emit = (event, data) => {
        if (event === "click") {
          if (!isMarked) {
            handleClick(data.lngLat);
          }
        }
      };
      mapRef = map;
      mapAPIRef = mapglAPI;
    });
    // return () => map && map.destroy();
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
