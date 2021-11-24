import React, { useState, useRef, useCallback } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  'pk.eyJ1IjoiaGVucmlxdWVub2JyZSIsImEiOiJja3dkZ3c2YmoydzdhMzBvMGRtdWVnd3J2In0.xdCkUviv0yGpX-t8EL7ZKQ'

const MapBox = () => {
  const [viewport, setViewport] = useState({
    latitude: -16.6906,
    longitude: -43.8054,
    zoom: 8
  })
  const mapRef = useRef()
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  )

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 }

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides
    })
  }, [])

  return (
    <div style={{ height: '100%' }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </MapGL>
    </div>
  )
}

export default MapBox
