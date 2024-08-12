import { supabaseClient } from "./supabaseClient";

export const deleteStudyRecord = async(key) => {
  return await supabaseClient
    .from('study-record')
    .delete()
    .eq('id', key);
};
