import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StudyRecord } from './StudyRecord';

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <StudyRecord />
  </StrictMode>
);
