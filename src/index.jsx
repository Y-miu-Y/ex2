import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Title} from "./components/title";
import { StudyRecord } from './StudyRecord';

const root = createRoot(document.getElementById("root"));


root.render(
  <StrictMode>
    <Title />
    <StudyRecord />
  </StrictMode>
);
