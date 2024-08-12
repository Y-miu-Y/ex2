import { InputForm } from "./components/inputForm";
import { DataTable } from "./components/DataTable";
import { useEffect, useState } from "react";
import { AddRecord } from "./components/AddRecord";
import { ErrorMessage } from "./components/ErrorMessage";
import { TotalTime } from "./components/TotalTime";
import { LoadingView } from "./LoadingView";
import { Title } from "./components/Title";
import { getStudyRecords } from "./utils/getStudyRecords";
import { deleteStudyRecord } from "./utils/deleteStudyRecord";
import { addStudyRecord } from "./utils/addStudyRecord";

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

        addStudyRecord({title, time});
        
        const newRecords = [...records, {title, time}];
        setRecords(newRecords);
        setTitle("");
        setTime(0);
        setError("");
    }

    const onClickDeleteRecord = (uniqueKey) => {
        deleteStudyRecord(uniqueKey);
        const newRecords = records.filter((rec) => rec.id !== uniqueKey);
        setRecords(newRecords);
        setError("");
    }

    useEffect(() => {
        getStudyRecords().then(({data, error})=>{
            setRecords(data);
            if(error) console.error(error);
        }).finally(()=>{
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