import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import Button from "./../../../common/Button/Button";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from './../../../common/Header/Header';

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWx1a2FjaCIsImEiOiJ3US1JLXJnIn0.xrpBHCwvzsX76YlO-08kjg";
function HomePage() {
  const navigate= useNavigate();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const monument = [106.6282367, 10.7980555];
  const [lng, setLng] = useState(106.6282367);
  const [lat, setLat] = useState(10.7980555);
  const [zoom, setZoom] = useState(11);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    const popup = new mapboxgl.Popup({ offset: 25 }).setText("We are here");

    new mapboxgl.Marker({
      color: "#000",
    })
      .setLngLat([lng, lat])
      .addTo(map.current)
      .setPopup(popup);

    // create DOM element for the marker
    const el = document.createElement("div");
    el.id = "marker";
  },[lat,lng,zoom]);

  return (
    <>
    <div className="homepage z-10 bg-black text-white py-20">
      <div className=" intro relative -z-10 z-10 flex  w-full flex-col items-center bg-[url('/public/assets/homebackground.png')] bg-cover bg-no-repeat px-16 py-40 text-2xl text-white">
        <div className="z-10 mb-8 text-7xl font-bold">Fast React Pizza Co</div>
        <div className="max-w-4xl text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
          placerat dui. Vestibulum ut felis et lorem porta congue vitae nec
          turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
        </div>
        <img
          className="absolute bottom-0 -z-10 w-full object-cover"
          src="assets/pizzaintro.png"
        ></img>
      </div>
      <div className="about w-full py-20">
        <div className="mx-auto flex w-9/12 items-center justify-between gap-16">
          <div className="flex shrink grow basis-1/2 flex-col">
            <h2 className="title w-fit text-4xl">ABOUT US</h2>
            <div className="mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <Button className="btnOrder mr-auto mt-8">Read more</Button>
          </div>
          <div className="shrink grow basis-1/2">
            <img
              className="w-full object-cover"
              src="/assets/restaurant.png"
              alt="restaurant"
            ></img>
          </div>
        </div>
      </div>
      <div className="findus w-full py-20">
        <div className="mx-auto w-9/12 text-center">
          <h2 className="title text-4xl">Find Us</h2>
          <div className="mt-8 flex items-center justify-between gap-10">
            <div className="shrink grow basis-1/2">
              <div
                ref={mapContainer}
                className="map-custom map-container rounded-md"
              />
            </div>
            <div className="shrink grow basis-1/2 text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. ATTENDANCE Monday to Sunday 12:00pm - 8:00pm
              DELIVERY Monday - Sunday 12:00pm - 8:00pm
            </div>
          </div>
        </div>
      </div>
      <div className="ourmenu w-full py-20 text-center">
        <h2 className="title">Our Menu</h2>
        <div className="ml-auto mr-auto mt-8 w-9/12 text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="ml-auto mr-auto mt-8 flex w-9/12 flex-nowrap items-center justify-between gap-10 ">
          <div className="w-1/2 shrink grow basis-1/2 self-stretch">
            <img
              className="w-full object-cover"
              src="assets/menu1.png"
            ></img>
          </div>
          <div className="w-1/2 shrink grow basis-1/2 self-stretch">
            <img
              className="w-full object-cover"
              src="assets/menu1.png"
            ></img>
          </div>
        </div>
        <Button className="btnOrder ml-auto mr-auto mt-8">
          <Link to="/menu">Menu</Link>
        </Button>
      </div>
      <div className=" intro relative -z-10 z-10 flex  w-full flex-col items-center bg-[url('/public/assets/wood2.png')] bg-cover bg-no-repeat px-16 py-40 text-2xl text-white">
        <img
          className="absolute top-0 -z-10 w-full object-cover"
          src="/assets/pizzahalf.png"
        ></img>
        <h2 className=" m-auto inline-block text-8xl text-white">
          Fast React Pizza Co
        </h2>
      </div>
    </div>
    </>
  );
}

export default HomePage;
