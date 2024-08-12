import { supabaseClient } from "./supabaseClient";

export const getStudyRecords = async() => {
  const { data, error } = await supabaseClient
    .from('study-record')
    .select();
  return { data, error };
};