import React from "react";
import { TodoProvider } from '../TodoContext';
import NavBar from "../Navbar/NavBar"
import Home from "../Home/Home"
import Search from "../Search/Search"
import Editar from "../Editar/Editar"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="editar" element={<Editar />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </div>
  );
}
export default App;
