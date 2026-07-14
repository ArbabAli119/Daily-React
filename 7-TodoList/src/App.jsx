import { useState } from "react";
import "./App.css";
import AppName from "./Components/AppName";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">14/07/2026</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-6">Buy Chicken</div>
          <div class="col-4">13/07/2026</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
