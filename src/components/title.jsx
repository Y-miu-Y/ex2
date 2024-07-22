import { createClient } from '@supabase/supabase-js'

export const Title = () =>{

    const supabaseClient = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
    );
     
    console.log(supabaseClient);

    const studyRecordClient = async() => await supabaseClient.from('study-record').select();

    console.log(studyRecordClient);

    return (
        <>
            <h1>学習記録一覧</h1>
        </>
    );
};