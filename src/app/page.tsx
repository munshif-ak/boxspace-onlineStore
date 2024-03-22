'use client'
import "../styles/GetStarted.css";
import "../styles/CarouselSlide.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselSlide from "./components/CarouselSlide";
import { Button } from "@mui/material";


export default function GetStarted() {
  return (
    <div className="on-boarding">
      <CarouselSlide/>
      <Button href="/login" className="getStarted-button" variant="contained">Get Started</Button>
    </div>
  );
}
