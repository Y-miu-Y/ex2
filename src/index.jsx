import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StudyRecord } from './StudyRecord';

const root = createRoot(document.getElementById("root"));

console.log(process.env.TESTENV_HELLO);

root.render(
  <StrictMode>
    <StudyRecord />
  </StrictMode>
);
