import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import * as S from './styles'

mapboxgl.accessToken =
  'pk.eyJ1IjoiamF5c2VhbjEwMDEiLCJhIjoiY2t3ZXlld2xtMDljYzJwbXViOTR2ZnJtMCJ9.IRBDhiDcLdcSCroBDzQ-TA'

const MapBox = () => {
  const mapContainerRef = useRef(null)

  const [lng, setLng] = useState(-43.8647)
  const [lat, setLat] = useState(-16.737)
  const [zoom, setZoom] = useState(10)
  const [distance, setDistance] = useState(0)

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

    /* map.on('load', function () {
      // Add a GeoJSON source with multiple points
      map.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: geoJson.features
        }
      }) */
    // Add a symbol layer
    /* map.addLayer({
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
      }) */
    /* }) */

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

    // direction box
    const directions = new Directions({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      language: 'pt-BR',
      placeholderOrigin: 'Ponto de partida',
      placeholderDestination: 'Destino'
    })

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

    directions.on('route', (route) => {
      setDistance(route.route[0].distance / 1000)
    })

    // Clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <S.MapContainer>
      <S.Map ref={mapContainerRef} />
      <h3>Total KM = {distance}</h3>
    </S.MapContainer>
  )
}

export default MapBox
