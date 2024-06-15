import React from 'react'
import Computers from './computers/Computers'
import Others from './others/Others'
import All from './All'
import Computer from './computers/Computer'
import Other from './others/Other'
import OrderComputer from './Order/OrderComputer'
import OrderOthers from './Order/OrderOthers'
import { Routes,Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Pages() {
    const location= useLocation()

  return (
    <Routes location={location}>
      <Route path="/" element={<All/>} />
      <Route path="/computers" element={<Computers/>} />
      <Route path="/computer/:id" element={<Computer/>} />
      <Route path="/Other/:id" element={<Other/>} />
      <Route path="/others" element={<Others/>} />
      <Route path="/order/computer/:id" element={<OrderComputer/>} />
      <Route path="/order/others/:id" element={<OrderOthers/>} />

      

    </Routes>
  )
}
