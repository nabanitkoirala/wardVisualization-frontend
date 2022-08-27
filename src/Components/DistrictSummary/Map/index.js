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
    selectedMapView, changedMapView, setChangedMapView }) => {
    const [lng, setLng] = useState(87.2819204534308);
    const [lat, setLat] = useState(26.816148518269014);
    const [zoom, setZoom] = useState(16);
    const [initialMapRender, setInitialMapRender] = useState(true)
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    const selectedStyle = selectedMapView === 'General Map View'
        ? 'mapbox://styles/nabanit/cl6ai7jt2000114od7pyefvzt'
        : 'mapbox://styles/nabanit/cl6cbna85000g14n3aj31u8m4'

    useEffect(() => {

        mapboxgl.accessToken = 'pk.eyJ1IjoibmFiYW5pdCIsImEiOiJja2E4MXR3NDkwNGMxMzJzOWF4Zzk1cmRxIn0.PlAUDME-BUb9gV-DCutXzw'
        const initializeMap = ({ setMap, mapContainer }) => {

            const map = new mapboxgl.Map({
                container: mapContainer.current,
                // style: process.env.REACT_APP_MAPBOX_STYLE, // stylesheet location
                // style: process.env.REACT_APP_MAPBOX_STYLE,
                style: selectedStyle,
                center: [lng, lat],
                zoom: zoom,

            });

            let nav = new mapboxgl.NavigationControl();

            map.addControl(nav, "bottom-right");

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        }
        if (changedMapView) {

            if (map.getLayer("education")) {
                map.removeLayer("education");
            }
            if (map.getLayer("health")) {
                map.removeLayer("health");
            }
            if (map.getLayer("finance")) {
                map.removeLayer("finance");
            }
            if (map.getLayer("communication")) {
                map.removeLayer("communication");
            }
            if (map.getLayer("governance")) {
                map.removeLayer("governance");
            }
            if (map.getLayer("hotel")) {
                map.removeLayer("hotel");
            }
            if (map.getLayer("culture")) {
                map.removeLayer("culture");
            }
            if (map.getLayer("industry")) {
                map.removeLayer("industry");
            }
            if (map.getLayer("population")) {
                map.removeLayer("population");
            }
            if (map.getSource("hospital-list")) {
                map.removeSource("hospital-list");
            }
            initializeMap({
                setMap,
                mapContainer
            })
            setChangedMapView(false)
        }


        //         map.addLayer({
        //             'id': 'education',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': '#D67A0A',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "education"]
        //         });
        //         map.addLayer({
        //             'id': 'health',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': '#3A9964',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "health"]
        //         });
        //         map.addLayer({
        //             'id': 'finance',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': '#BC1D3D',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "finance"]
        //         });
        //         map.addLayer({
        //             'id': 'communication',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': '#3DADF8',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "communication"]
        //         });
        //         map.addLayer({
        //             'id': 'governance',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': '#f05620',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "governance"]
        //         });
        //         map.addLayer({
        //             'id': 'hotel',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': 'F7D002',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "hotel"]
        //         });
        //         map.addLayer({
        //             'id': 'culture',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': '#3A9964',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "culture"]
        //         });
        //         map.addLayer({
        //             'id': 'industry',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': '#D67A0A',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "industry"]
        //         });
        //         map.addLayer({
        //             'id': 'population',
        //             'type': 'circle',
        //             'source': 'hospital-list',
        //             'paint': {
        //                 'circle-radius': 8,
        //                 'circle-color': '#F7D002',
        //                 'circle-opacity': 0.67
        //             },
        //             // 'filter': ['==', '$type', 'Point']
        //             filter: ["==", "type", "population"]
        //         });
        //         map.on('mouseover', 'hospital-point', function (e) {
        //             map.getCanvas().style.cursor = 'pointer';
        //         })
        //         if (initialMapRender) {
        //             let popup = new mapboxgl.Popup({
        //                 closeButton: true,
        //                 closeOnClick: true
        //             });
        //             map.on('click', 'education', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-heading ><strong>Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //             map.on('click', 'health', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-heading ><strong>Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //             map.on('click', 'finance', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-heading ><strong>Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //             map.on('click', 'communication', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-heading ><strong>Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //             map.on('click', 'governance', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-heading ><strong>Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //             map.on('click', 'hotel', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-heading ><strong>Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //             map.on('click', 'culture', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-heading ><strong>Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //             map.on('click', 'industry', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>${e.features[0].properties.name}</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact Number:</p><p>${e.features[0].properties.contactNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-heading ><strong>Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //             map.on('click', 'population', function (e) {
        //                 console.log("clicked", e.features[0])
        //                 console.log("clicked", e)
        //                 const popupOverall = `<div class=main-div><div class=popup-heading ><strong>Information</strong></div>
        //                 <div class=popup-Data><div class=name-value ><p><b>Household Information</b></p></div>
        //                 <div class=popup-Data><div class=name-value ><p>House Number:</p><p>${e.features[0].properties.houseNumber}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Owner Name:</p><p>${e.features[0].properties.name}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>storey:</p><p>${e.features[0].properties.storey}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Owner Occupation:</p><p>${e.features[0].properties.ownerOccupation}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Annual Income:</p><p>${e.features[0].properties.annualIncome}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Contact:</p><p>${e.features[0].properties.contact}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Total Members:</p><p>${e.features[0].properties.totalMembers}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Male Members:</p><p>${e.features[0].properties.maleMembers}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Female Members:</p><p>${e.features[0].properties.femaleMembers}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>Other Members:</p><p>${e.features[0].properties.otherMembers}</p></div>
        //                 <div class=popup-Data><div class=name-value ><p>onRent:</p><p>${e.features[0].properties.onRent}</p></div>
        //                 ${JSON.parse(e.features[0].properties.rentInfo).length ? `<div class=popup-heading ><strong>Rent Information</strong></div>` : ''}
        // ${JSON.parse(e.features[0].properties.rentInfo).length ? JSON.parse(e.features[0].properties.rentInfo).map((item) => (
        //                     // console.log("This map rent", item)

        //                     `<div class=popup-Data><div class=name-value ><p>Rent Owner :</p><p>${item.rentOwner}</p></div>
        //                         <div class=popup-Data><div class=name-value ><p>Occupation :</p><p>${item.occupation}</p></div>
        //                         <div class=popup-Data><div class=name-value ><p>Contact :</p><p>${item.contact}</p></div>
        //                         <div class=popup-Data><div class=name-value ><p>Address :</p><p>${item.address}</p></div>
        //                         <div class=popup-Data><div class=name-value ><p>Total Members :</p><p>${item.totalMembers}</p></div>
        //                         <div class=popup-Data><div class=name-value ><p>Male :</p><p>${item.maleMembers}</p></div>
        //                         <div class=popup-Data><div class=name-value ><p>Female :</p><p>${item.femaleMembers}</p></div>
        //                         <div class=popup-Data><div class=name-value ><p>Other :</p><p>${item.otherMembers}</p></div>`

        //                 )) : ''}
        //                 <div class=popup-heading ><strong>House Image</strong></div>
        //                 <img src=${e.features[0].properties.houseImage} alt="house pic"/>
        //                 </div></div>`
        //                 popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
        //             })
        //         }

    }, [changedMapView])
    useEffect(() => {
        if (flyCoordinate.length) {
            map.flyTo({
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
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                // style: process.env.REACT_APP_MAPBOX_STYLE, // stylesheet location
                // style: process.env.REACT_APP_MAPBOX_STYLE,
                // style: selectedStyle,
                style: selectedStyle,
                center: [lng, lat],
                zoom: zoom,

            });
            let nav = new mapboxgl.NavigationControl();

            map.addControl(nav, "bottom-right");

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        }
        if (!map) {
            initializeMap({
                setMap,
                mapContainer
            })

        } else {
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
                    'circle-radius': 8,
                    'circle-color': '#F7D002',
                    'circle-opacity': 0.67
                },
                // 'filter': ['==', '$type', 'Point']
                filter: ["==", "type", "population"]
            });
            map.on('mouseover', 'hospital-point', function (e) {
                map.getCanvas().style.cursor = 'pointer';
            })
            if (initialMapRender) {
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
                map.on('click', 'population', function (e) {

                    const popupOverall = `<div class=main-div><div class=popup-heading ><strong>Information</strong></div>
                    <div class=popup-Data><div class=name-value ><p><b>Household Information</b></p></div>
                    <div class=popup-Data><div class=name-value ><p>House Number:</p><p>${e.features[0].properties.houseNumber}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Owner Name:</p><p>${e.features[0].properties.name}</p></div>
                    <div class=popup-Data><div class=name-value ><p>storey:</p><p>${e.features[0].properties.storey}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Owner Occupation:</p><p>${e.features[0].properties.ownerOccupation}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Annual Income:</p><p>${e.features[0].properties.annualIncome}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Contact:</p><p>${e.features[0].properties.contact}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Address:</p><p>${e.features[0].properties.address}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Total Members:</p><p>${e.features[0].properties.totalMembers}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Male Members:</p><p>${e.features[0].properties.maleMembers}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Female Members:</p><p>${e.features[0].properties.femaleMembers}</p></div>
                    <div class=popup-Data><div class=name-value ><p>Other Members:</p><p>${e.features[0].properties.otherMembers}</p></div>
                    <div class=popup-Data><div class=name-value ><p>onRent:</p><p>${e.features[0].properties.onRent}</p></div>
                    ${JSON.parse(e.features[0].properties.rentInfo).length ? `<div class=popup-heading ><strong>Rent Information</strong></div>` : ''}
                    ${JSON.parse(e.features[0].properties.rentInfo).length ? JSON.parse(e.features[0].properties.rentInfo).map((item) => (
                        // console.log("This map rent", item)

                        `<div class=popup-Data><div class=name-value ><p>Rent Owner :</p><p>${item.rentOwner}</p></div>
                            <div class=popup-Data><div class=name-value ><p>Occupation :</p><p>${item.occupation}</p></div>
                            <div class=popup-Data><div class=name-value ><p>Contact :</p><p>${item.contact}</p></div>
                            <div class=popup-Data><div class=name-value ><p>Address :</p><p>${item.address}</p></div>
                            <div class=popup-Data><div class=name-value ><p>Total Members :</p><p>${item.totalMembers}</p></div>
                            <div class=popup-Data><div class=name-value ><p>Male :</p><p>${item.maleMembers}</p></div>
                            <div class=popup-Data><div class=name-value ><p>Female :</p><p>${item.femaleMembers}</p></div>
                            <div class=popup-Data><div class=name-value ><p>Other :</p><p>${item.otherMembers}</p></div>`

                    )) : ''}
                    <div class=popup-heading ><strong>House Image</strong></div>
                    <img src=${e.features[0].properties.houseImage} alt="house pic"/>
                    </div></div>`
                    popup.setLngLat([e.lngLat.lng, e.lngLat.lat]).setHTML(popupOverall).addTo(map);
                })
            }
        }

        // if (!map) initializeMap({ setMap, mapContainer });
    }, [map])
    useEffect(() => {
        if (map) {
            if (clickedButton === 1) {
                map.setLayoutProperty('health', 'visibility', 'visible');
                map.setLayoutProperty('education', 'visibility', 'visible');
                map.setLayoutProperty('finance', 'visibility', 'visible');
                map.setLayoutProperty('communication', 'visibility', 'visible');
                map.setLayoutProperty('governance', 'visibility', 'visible');
                map.setLayoutProperty('hotel', 'visibility', 'visible');
                map.setLayoutProperty('culture', 'visibility', 'visible');
                map.setLayoutProperty('industry', 'visibility', 'visible');
                map.setLayoutProperty('population', 'visibility', 'visible');

            } else if (clickedButton === 2) {
                map.setLayoutProperty('health', 'visibility', 'none');
                map.setLayoutProperty('education', 'visibility', 'none');
                map.setLayoutProperty('finance', 'visibility', 'none');
                map.setLayoutProperty('communication', 'visibility', 'none');
                map.setLayoutProperty('governance', 'visibility', 'none');
                map.setLayoutProperty('hotel', 'visibility', 'none');
                map.setLayoutProperty('culture', 'visibility', 'none');
                map.setLayoutProperty('industry', 'visibility', 'none');
                map.setLayoutProperty('population', 'visibility', 'visible');

            } else if (clickedButton === 3) {
                map.setLayoutProperty('health', 'visibility', 'visible');
                map.setLayoutProperty('education', 'visibility', 'none');
                map.setLayoutProperty('finance', 'visibility', 'none');
                map.setLayoutProperty('communication', 'visibility', 'none');
                map.setLayoutProperty('governance', 'visibility', 'none');
                map.setLayoutProperty('hotel', 'visibility', 'none');
                map.setLayoutProperty('culture', 'visibility', 'none');
                map.setLayoutProperty('industry', 'visibility', 'none');
                map.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 4) {
                map.setLayoutProperty('health', 'visibility', 'none');
                map.setLayoutProperty('education', 'visibility', 'visible');
                map.setLayoutProperty('finance', 'visibility', 'none');
                map.setLayoutProperty('communication', 'visibility', 'none');
                map.setLayoutProperty('governance', 'visibility', 'none');
                map.setLayoutProperty('hotel', 'visibility', 'none');
                map.setLayoutProperty('culture', 'visibility', 'none');
                map.setLayoutProperty('industry', 'visibility', 'none');
                map.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 5) {
                map.setLayoutProperty('health', 'visibility', 'none');
                map.setLayoutProperty('education', 'visibility', 'none');
                map.setLayoutProperty('finance', 'visibility', 'visible');
                map.setLayoutProperty('communication', 'visibility', 'none');
                map.setLayoutProperty('governance', 'visibility', 'none');
                map.setLayoutProperty('hotel', 'visibility', 'none');
                map.setLayoutProperty('culture', 'visibility', 'none');
                map.setLayoutProperty('industry', 'visibility', 'none');
                map.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 6) {
                map.setLayoutProperty('health', 'visibility', 'none');
                map.setLayoutProperty('education', 'visibility', 'none');
                map.setLayoutProperty('finance', 'visibility', 'none');
                map.setLayoutProperty('communication', 'visibility', 'visible');
                map.setLayoutProperty('governance', 'visibility', 'none');
                map.setLayoutProperty('hotel', 'visibility', 'none');
                map.setLayoutProperty('culture', 'visibility', 'none');
                map.setLayoutProperty('industry', 'visibility', 'none');
                map.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 7) {
                map.setLayoutProperty('health', 'visibility', 'none');
                map.setLayoutProperty('education', 'visibility', 'none');
                map.setLayoutProperty('finance', 'visibility', 'none');
                map.setLayoutProperty('communication', 'visibility', 'none');
                map.setLayoutProperty('governance', 'visibility', 'visible');
                map.setLayoutProperty('hotel', 'visibility', 'none');
                map.setLayoutProperty('culture', 'visibility', 'none');
                map.setLayoutProperty('industry', 'visibility', 'none');
                map.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 8) {
                map.setLayoutProperty('health', 'visibility', 'none');
                map.setLayoutProperty('education', 'visibility', 'none');
                map.setLayoutProperty('finance', 'visibility', 'none');
                map.setLayoutProperty('communication', 'visibility', 'none');
                map.setLayoutProperty('governance', 'visibility', 'none');
                map.setLayoutProperty('hotel', 'visibility', 'visible');
                map.setLayoutProperty('culture', 'visibility', 'none');
                map.setLayoutProperty('industry', 'visibility', 'none');
                map.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 9) {
                map.setLayoutProperty('health', 'visibility', 'none');
                map.setLayoutProperty('education', 'visibility', 'none');
                map.setLayoutProperty('finance', 'visibility', 'none');
                map.setLayoutProperty('communication', 'visibility', 'none');
                map.setLayoutProperty('governance', 'visibility', 'none');
                map.setLayoutProperty('hotel', 'visibility', 'none');
                map.setLayoutProperty('culture', 'visibility', 'visible');
                map.setLayoutProperty('industry', 'visibility', 'none');
                map.setLayoutProperty('population', 'visibility', 'none');
            } else if (clickedButton === 10) {
                map.setLayoutProperty('health', 'visibility', 'none');
                map.setLayoutProperty('education', 'visibility', 'none');
                map.setLayoutProperty('finance', 'visibility', 'none');
                map.setLayoutProperty('communication', 'visibility', 'none');
                map.setLayoutProperty('governance', 'visibility', 'none');
                map.setLayoutProperty('hotel', 'visibility', 'none');
                map.setLayoutProperty('culture', 'visibility', 'none');
                map.setLayoutProperty('industry', 'visibility', 'visible');
                map.setLayoutProperty('population', 'visibility', 'none');
            }
        }
    }, [clickedButton, map])
    useEffect(() => {

        if (map) {
            setInitialMapRender(false)
        }


    }, [map])
    return (
        <div ref={el => (mapContainer.current = el)} className='map-main-style' />
    )
}

export default Map;