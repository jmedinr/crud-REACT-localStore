import React, { Suspense } from "react";
import { TodoProvider } from "../TodoContext";
import { Index } from "../Index/index";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <TodoProvider>
      <Index></Index>
    </TodoProvider>
  );
}

export default App;
