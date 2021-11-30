import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken =
  'pk.eyJ1IjoiamF5c2VhbjEwMDEiLCJhIjoiY2t3ZXlld2xtMDljYzJwbXViOTR2ZnJtMCJ9.IRBDhiDcLdcSCroBDzQ-TA'

const MapBox = () => {
  const mapContainerRef = useRef(null)

  const [lng, setLng] = useState(-87.65)
  const [lat, setLat] = useState(41.84)
  const [zoom, setZoom] = useState(10)

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })

    // map.on('click', function(){

    // })

    map.on('load', function () {
      // Add a GeoJSON source with multiple points
      map.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: geoJson.features
        }
      })
      // Add a symbol layer
      map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-radius': 12,
          'circle-stroke-width': 3,
          'circle-color': 'red',
          'circle-stroke-color': 'white',
          'circle-opacity': 0.7
        }
      })
    })

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

    // direction box
    const directions = new Directions({ accessToken: mapboxgl.accessToken })
    map.addControl(directions, 'top-left')

    map.on('moveend', () => {
      setLng(map.getCenter().lng.toFixed(4))
      setLat(map.getCenter().lat.toFixed(4))
      setZoom(12)
    })

    map.on('click', (e) => {
      map.flyTo({
        center: [e?.lngLat?.lng.toFixed(4), e?.lngLat?.lat?.toFixed(4)],
        zoom: 12,
        speed: 0.2
      })
      setLng(e?.lngLat?.lng?.toFixed(4))
      setLat(e?.lngLat?.lat?.toFixed(4))
      setZoom(12)
    })

    // Clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  )
}

export default MapBox
