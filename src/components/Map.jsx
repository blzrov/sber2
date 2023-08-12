import React, { useEffect } from "react";
import { load } from "@2gis/mapgl";
import { key2GIS } from "../helpers/api";

const Map = (props) => {
  useEffect(() => {
    let map;
    let mapgl;

    let isMarked = false;

    function handleClick(lngLat, id) {
      isMarked = true;
      const marker = new mapgl.Marker(map, {
        coordinates: lngLat,
      });
      marker.on("click", (e) => {
        if (props.onMarkerClick) {
          props.onMarkerClick(id);
        }
      });
    }

    load().then((mapglAPI) => {
      mapgl = mapglAPI;

      map = new mapglAPI.Map("map-container", {
        center: props.startMarker || [60.614842, 56.836161],
        zoom: props.startMarker ? 15 : 12,
        key: key2GIS,
      });

      map.emit = async (event, data) => {
        if (event === "click") {
          if (!isMarked && props.onPickMarker) {
            const response = await fetch(
              `https://catalog.api.2gis.com/3.0/items/geocode?lon=${data.lngLat[0]}&lat=${data.lngLat[1]}&fields=items.point&key=${key2GIS}`
            );
            const result = await response.json();
            props.onPickMarker(data.lngLat, result.result.items[0].address_name || result.result.items[0].name);
            handleClick(data.lngLat);
          }
        }
      };

      if (props.startMarker) {
        handleClick(props.startMarker);
      }

      if (props.events) {
        props.events.forEach((event) => {
          handleClick(event.geolocation, event.id);
        });
      }
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
