import { supabaseClient } from "./supabaseClient";

export const addStudyRecord = async({title, time}) => {
  return await supabaseClient
    .from('study-record')
    .insert({title, time});
};
