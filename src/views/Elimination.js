import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ClippedDrawer from "../components/Drawer";

export default function Elimination() {
  return (
    <>
      <ClippedDrawer />
      <h2>elimination</h2>
      <Outlet />
    </>
  );
}
