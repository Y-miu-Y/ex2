import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Title} from "./components/title";
import { StudyRecord } from './StudyRecord';
import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

console.log(supabaseClient);

const studyRecordClient = async () => {
  const { data, error } = await supabaseClient
    .from('study-record')
    .select("*")
  return data;
};

console.log(studyRecordClient);

// ----------------------------------------------------------
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Title />
    <StudyRecord />
  </StrictMode>
);
