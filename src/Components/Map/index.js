/* eslint-disable no-lone-blocks */
/* eslint-disable import/no-webpack-loader-syntax */
import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import './styles.scss';
const styles = {
    width: "80%",
    height: "calc(100vh - 300px)",
    // position: "absolute"
};

const Map = ({ datas, data, clickedButton,
    flyCoordinate, setFlyCoordinate,
    selectedMapView, changedMapView, setChangedMapView, hoveredId, mapViewStyle }) => {
    const [lng, setLng] = useState(87.2819204534308);
    const [lat, setLat] = useState(26.816148518269014);
    const [zoom, setZoom] = useState(16);
    const [initialMapRender, setInitialMapRender] = useState(true)
    const [mapType, setMapType] = useState('General Map View')
    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    let hoveredWardId = hoveredId;
    const selectedStyle = selectedMapView === 'General Map View'
        ? 'mapbox://styles/nabanit/cl6ai7jt2000114od7pyefvzt'
        : 'mapbox://styles/nabanit/cl6cbna85000g14n3aj31u8m4'


    useEffect(() => {
        if (flyCoordinate.length && mapRef.current && mapRef.current.isStyleLoaded()) {

            mapRef.current.flyTo({
                center: flyCoordinate,
                essential: true,
                zoom: 24

            });
            setFlyCoordinate([])

        }
    }, [flyCoordinate])

    useEffect(() => {
        // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        mapboxgl.accessToken = 'pk.eyJ1IjoibmFiYW5pdCIsImEiOiJja2E4MXR3NDkwNGMxMzJzOWF4Zzk1cmRxIn0.PlAUDME-BUb9gV-DCutXzw'

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            // style: process.env.REACT_APP_MAPBOX_STYLE, // stylesheet location
            // style: process.env.REACT_APP_MAPBOX_STYLE,
            // style: selectedStyle,
            style: 'mapbox://styles/nabanit/cl6ai7jt2000114od7pyefvzt',
            center: [lng, lat],
            zoom: zoom,

        });
        mapRef.current = map;
        let nav = new mapboxgl.NavigationControl();

        map.addControl(nav, "bottom-right");

        map.on("style.load", () => {
            map.resize();
            map.addSource('hospital-list', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': data
                }
            });

            map.addLayer({
                'id': 'education',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#D67A0A',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "education"]
            });
            map.addLayer({
                'id': 'health',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#3A9964',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "health"]
            });
            map.addLayer({
                'id': 'finance',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#BC1D3D',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "finance"]
            });
            map.addLayer({
                'id': 'communication',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#3DADF8',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "communication"]
            });
            map.addLayer({
                'id': 'governance',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#f05620',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "governance"]
            });
            map.addLayer({
                'id': 'hotel',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#F7D002',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "hotel"]
            });
            map.addLayer({
                'id': 'culture',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#3A9964',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "culture"]
            });
            map.addLayer({
                'id': 'industry',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#D67A0A',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "industry"]
            });
            map.addLayer({
                'id': 'population',
                'type': 'circle',
                'source': 'hospital-list',
                'paint': {
                    'circle-radius': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        14,
                        8
                    ],
                    'circle-color': 'blue',
                    // 'circle-opacity': 0.67,
                    'circle-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        0.5,
                        1
                    ]
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "population"]
            });

            map.on('mouseover', 'hospital-point', function (e) {
                map.getCanvas().style.cursor = 'pointer';
            })

            let popup = new mapboxgl.Popup({
                closeButton: true,
                closeOnClick: true
            });
            map.on('click', 'education', function (e) {

                const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
                        <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
                        <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                        <div class=popup-heading ><strong>Image</strong></div>
                        <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                        </div></div>`
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
            map.on('click', 'health', function (e) {

                const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
                        <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
                        <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                        <div class=popup-heading ><strong>Image</strong></div>
                        <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                        </div></div>`
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
            map.on('click', 'finance', function (e) {

                const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
                        <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
                        <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                        <div class=popup-heading ><strong>Image</strong></div>
                        <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                        </div></div>`
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
            map.on('click', 'communication', function (e) {

                const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
                        <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
                        <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                        <div class=popup-heading ><strong>Image</strong></div>
                        <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                        </div></div>`
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
            map.on('click', 'governance', function (e) {

                const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
                        <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
                        <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                        <div class=popup-heading ><strong>Image</strong></div>
                        <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                        </div></div>`
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
            map.on('click', 'hotel', function (e) {

                const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
                        <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
                        <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                        <div class=popup-heading ><strong>Image</strong></div>
                        <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                        </div></div>`
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
            map.on('click', 'culture', function (e) {

                const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
                        <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
                        <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                        <div class=popup-heading ><strong>Image</strong></div>
                        <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                        </div></div>`
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
            map.on('click', 'industry', function (e) {

                const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
                        <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
                        <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
                        <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                        <div class=popup-heading ><strong>Image</strong></div>
                        <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                        </div></div>`
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
            map.on('mousemove', 'population', (e) => {

                if (hoveredWardId) {
                    mapRef.current.setFeatureState(
                        {
                            id: hoveredWardId,
                            source: 'hospital-list',


                        },
                        { hover: false },
                    );
                }
                hoveredWardId = e.features[0].id;

                map.setFeatureState(
                    {
                        id: hoveredWardId,
                        source: 'hospital-list',
                    },
                    { hover: true },
                );



            })

            map.on('mouseleave', 'population', () => {
                map.getCanvas().style.cursor = '';
                // popup.remove();
                if (hoveredWardId) {
                    map.setFeatureState(
                        {
                            source: 'hospital-list',
                            id: hoveredWardId,
                        },
                        { hover: false },

                    );
                }
                hoveredWardId = undefined;
            });
            map.on('click', 'population', function (e) {
                const popupOverall = `<div class=main-div><div class=image-rent-status ><div class="rent-status">on rent</div><img src=${e.features[0].properties.houseImage} alt="house pic"/></div>
                <div class=popup-heading >
                <div class=owner-name><strong>${e.features[0].properties.name}'s Residence</strong></div>
                <div class=owner-address>${e.features[0].properties.address}</div>
                <div class=owner-detail>
                <div><strong class=house-member-info>House No: </strong>15</div>
                <div><strong class=house-member-info>Storeys: </strong>04</div>
                <div><strong class=house-member-info>Total Members: </strong>14</div>
                </div>
                
                </div>
                           
                   <div class=data-container>         
                <div class=popup-Data>
                <div class=name-value >
                <p class=key>Contact:</p><p class=value>${e.features[0].properties.contact}</p></div>
                            <div class=popup-Data><div class=name-value ><p class=key>Owner Occupation:</p><p class=value>${e.features[0].properties.ownerOccupation}</p></div>
                            <div class=popup-Data><div class=name-value ><p class=key>Annual Income:</p><p class=value>${e.features[0].properties.annualIncome}</p></div> 
                            <div class=popup-Data><div class=name-value ><p class=key>Male Members:</p><p class=value>${e.features[0].properties.maleMembers}</p></div>
                            <div class=popup-Data><div class=name-value ><p class=key>Female Members:</p><p class=value>${e.features[0].properties.femaleMembers}</p></div>
                            <div class=popup-Data><div class=name-value ><p class=key>Other Members:</p><p class=value>${e.features[0].properties.otherMembers}</p></div>
                            <div>
                            ${JSON.parse(e.features[0].properties.rentInfo).length ? `<div class=popup-heading-tenant ><strong>Tenant Information</strong></div>` : ''}
                            ${JSON.parse(e.features[0].properties.rentInfo).length ? JSON.parse(e.features[0].properties.rentInfo).map((item) => (

                    `
                    <div>
                    <div class=rent-owner-name ><strong>${item.rentOwner}</strong></div>
                    <div class=owner-address>${item.address}</div>
                    <div class=popup-Data>
                    
                    <div class=popup-Data><div class=name-value ><p class=key>Contact :</p><p class=value>${item.contact}</p></div>
                                    <div class=popup-Data><div class=name-value ><p class=key>Occupation :</p><p class=value>${item.occupation}</p></div>
                                    <div class=popup-Data><div class=name-value ><p class=key>Male :</p><p class=value>${item.maleMembers}</p></div>
                                    <div class=popup-Data><div class=name-value ><p class=key>Female :</p><p class=value>${item.femaleMembers}</p></div>
                                    <div class=popup-Data><div class=name-value ><p class=key>Other :</p><p class=value>${item.otherMembers}</p></div>
                                    </div>
                                    `

                )) : ''
                    }
                            
                            </div ></div > `
                popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
            })
        });
        return () => {

            map.remove()
        }
        // if (!map) initializeMap({ setMap, mapContainer });
    }, [])

    useEffect(() => {

        if (mapRef.current && mapRef.current.isStyleLoaded()) {

            if (hoveredId) {
                mapRef.current.setPaintProperty('population', 'circle-opacity', ['match', ['id'], hoveredId, 0.5, 1])
                mapRef.current.setPaintProperty('population', 'circle-radius', ['match', ['id'], hoveredId, 14, 8])
                // mapRef.current.setPaintProperty('population', 'circle-color', ['match', ['id'], hoveredId, 'red', 'blue'])
            }

        }
        return () => {
            if (mapRef.current && mapRef.current.isStyleLoaded()) {
                mapRef.current.setPaintProperty('population', 'circle-opacity', [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    0.5,
                    1
                ])
                mapRef.current.setPaintProperty('population', 'circle-radius', [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    14,
                    8
                ])
            }
        }
    }, [hoveredId])

    useEffect(() => {
        if (mapRef.current && mapRef.current.isStyleLoaded()) {
            if (clickedButton === 1) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('education', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('population', 'visibility', 'visible');

            } else if (clickedButton === 2) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'none');
                mapRef.current.setLayoutProperty('education', 'visibility', 'none');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'none');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'none');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'none');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'none');
                mapRef.current.setLayoutProperty('population', 'visibility', 'visible');

            } else if (clickedButton === 3) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('education', 'visibility', 'none');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'none');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'none');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'none');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'none');
                mapRef.current.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 4) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'none');
                mapRef.current.setLayoutProperty('education', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'none');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'none');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'none');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'none');
                mapRef.current.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 5) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'none');
                mapRef.current.setLayoutProperty('education', 'visibility', 'none');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'none');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'none');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'none');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'none');
                mapRef.current.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 6) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'none');
                mapRef.current.setLayoutProperty('education', 'visibility', 'none');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'none');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'none');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'none');
                mapRef.current.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 7) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'none');
                mapRef.current.setLayoutProperty('education', 'visibility', 'none');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'none');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'none');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'none');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'none');
                mapRef.current.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 8) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'none');
                mapRef.current.setLayoutProperty('education', 'visibility', 'none');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'none');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'none');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'none');
                mapRef.current.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 9) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'none');
                mapRef.current.setLayoutProperty('education', 'visibility', 'none');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'none');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'none');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'none');
                mapRef.current.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 10) {
                mapRef.current.setLayoutProperty('health', 'visibility', 'none');
                mapRef.current.setLayoutProperty('education', 'visibility', 'none');
                mapRef.current.setLayoutProperty('finance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('communication', 'visibility', 'none');
                mapRef.current.setLayoutProperty('governance', 'visibility', 'none');
                mapRef.current.setLayoutProperty('hotel', 'visibility', 'none');
                mapRef.current.setLayoutProperty('culture', 'visibility', 'none');
                mapRef.current.setLayoutProperty('industry', 'visibility', 'visible');
                mapRef.current.setLayoutProperty('population', 'visibility', 'none');
            }
        }
    }, [clickedButton])
    // useEffect(() => {

    //     if (map) {
    //         setInitialMapRender(false)
    //     }


    // }, [map])
    const mapView = [
        {
            name: 'General Map View',
            style: 'mapbox://styles/nabanit/cl6ai7jt2000114od7pyefvzt'
        },
        {
            name: 'Satellite Map View',
            style: 'mapbox://styles/nabanit/cl6cbna85000g14n3aj31u8m4'
        }
    ]

    const changeStyle = (style) => {
        if (mapRef.current) {

            mapRef.current.setStyle(style)
        }
    }

    const handleSwitchMap = () => {
        if (mapType === 'General Map View') {
            const filteredData = mapView.find(item => item.name === 'Satellite Map View')
            setMapType('Satellite Map View')
            changeStyle(filteredData.style)

        } else {
            const filteredData = mapView.find(item => item.name === 'General Map View')
            setMapType('General Map View')
            changeStyle(filteredData.style)
        }
    }

    return (
        <>
            <div ref={mapContainer} className='map-main-style' >


            </div>
            <div style={{ position: 'absolute', bottom: '-325px', right: '50px', zIndex: 999 }} >
                {/* {mapView.map((item) => (
                    <button onClick={() => {
                        changeStyle(item.style)
                        setMapType(item.name)
                    }} >{item.name}</button>
                ))} */}
                <button type='button' onClick={handleSwitchMap} >
                    {mapType === 'General Map View' ? 'Satellite Map View' : 'General Map View'}
                </button>
            </div>
        </>
    )
}

export default Map;