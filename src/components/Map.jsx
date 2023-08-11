import React, { useEffect } from "react";
import { load } from "@2gis/mapgl";
import { key2GIS } from "../helpers/api";

const Map = () => {
  useEffect(() => {
    let map;
    let mapgl;

    let isMarked = false;

    function handleClick(lngLat) {
      isMarked = true;
      new mapgl.Marker(map, {
        coordinates: lngLat,
      });
    }

    load().then((mapglAPI) => {
      mapgl = mapglAPI;

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