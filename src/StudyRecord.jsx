import { InputForm } from "./components/inputForm";
import { DataTable } from "./components/DataTable";
import { useState } from "react";
import { AddRecord } from "./components/AddRecord";
import { ErrorMessage } from "./components/ErrorMessage";
import { TotalTime } from "./components/TotalTime";

export const StudyRecord = () =>{
    const [title, setTitle] = useState("");
    const [time, setTime] = useState();
    const [records, setRecords] = useState([]);
    const [error, setError] = useState("");

    const onChangeTitle = (event) => setTitle(event.target.value);
    const onChangeTime = (event) => setTime(parseInt(event.target.value));

    const onClickAddRecord = () => {
        if (title === "" || time === "") {
            setError("入力されていない項目があります");
            return;
        }
        const newRecords = [...records, {title, time}];
        setRecords(newRecords);
        setTitle("");
        setTime(0);
        setError("");
    }

    return(
        <>
            <InputForm
                title={title}
                onChangeTitle={onChangeTitle}
                time={time}
                onChangeTime={onChangeTime}/>
            <DataTable records={records}/>
            <AddRecord onClick={onClickAddRecord}/>
            <ErrorMessage message={error}/>
            <TotalTime records={records} />
        </>
    );
};