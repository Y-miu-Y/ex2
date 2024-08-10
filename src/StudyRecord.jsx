import { InputForm } from "./components/inputForm";
import { DataTable } from "./components/DataTable";
import { useEffect, useState } from "react";
import { AddRecord } from "./components/AddRecord";
import { ErrorMessage } from "./components/ErrorMessage";
import { TotalTime } from "./components/TotalTime";
import { supabaseClient } from "./utils/supabaseClient";
import { LoadingView } from "./LoadingView";
import { Title } from "./components/Title";

export const StudyRecord = () =>{
    const [title, setTitle] = useState("");
    const [time, setTime] = useState();
    const [records, setRecords] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const onChangeTitle = (event) => setTitle(event.target.value);
    const onChangeTime = (event) => setTime(parseInt(event.target.value));

    const onClickAddRecord = () => {
        if (title === "" || time === "") {
            setError("入力されていない項目があります");
            return;
        }
        const insertRecord = async() => {
            return await supabaseClient
            .from('study-record')
            .insert({title, time});
        };
        insertRecord();
        
        const newRecords = [...records, {title, time}];
        setRecords(newRecords);
        setTitle("");
        setTime(0);
        setError("");
    }

    const onClickDeleteRecord = (uniqueKey) => {
        const deleteRecord = async(key) => {
            return await supabaseClient
                .from('study-record')
                .delete()
                .eq('id', key);
        };
        deleteRecord(uniqueKey);

        const newRecords = records.filter((rec) => rec.id !== uniqueKey);
        setRecords(newRecords);
        setError("");
    }

    useEffect(() => {
        const getRecords = async() => {
            return await supabaseClient
            .from('study-record')
            .select();
        }
        getRecords()
        .then((res) => {
            setRecords(res.data)
        }).finally(() => {
            setIsLoading(false);
        });
    },[]);

    if(isLoading){
        return(
            <div className="container">
                <LoadingView />
            </div>
        );
    } else {
        return(
            <div className="container">
                <Title />
                <InputForm
                    title={title}
                    onChangeTitle={onChangeTitle}
                    time={time}
                    onChangeTime={onChangeTime}/>
                <DataTable records={records} onClickDelete={onClickDeleteRecord}/>
                <AddRecord onClick={onClickAddRecord}/>
                <TotalTime records={records} />
                <ErrorMessage message={error}/>
            </div>
        );
    }
};