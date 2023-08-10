import React, { useEffect } from "react";
import { load } from "@2gis/mapgl";

const TestMap = () => {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [56.837823, 60.596273],
        zoom: 13,
        key: "56bb8749-bb8f-4d10-b59a-18b87c7214e1",
      });
    });

    // Удаляем карту при размонтировании компонента
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

export default TestMap;
