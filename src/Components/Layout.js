import {  GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Home from "./Home";
import Membership from "./Membership";
import { Route, Routes } from "react-router-dom";
import Reservation from "./Reservation";
import Tournaments from "./Tournaments";
import Chat from "./Chat";
import Coaching from "./Coaching";
import Gallery from "./Gallery";

export default function Layout() {
  return (
    <div className="home">
      <SimpleGrid gridTemplateColumns={"repeat(6,1fr)"}>
        <GridItem colSpan={6}>
          <Navbar />
        </GridItem>
        <GridItem colSpan={6}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/reservation" element={<Reservation />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/community" element={<Chat />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </GridItem>
      </SimpleGrid>
    </div>
  );
}
