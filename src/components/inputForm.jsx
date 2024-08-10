import { useState } from "react";

export const InputForm = ({title, onChangeTitle, time, onChangeTime}) =>{

    return (
        <>
            <div>
                <span>学習内容</span>
                <input type="text" name="title" id="title" value={title} onChange={onChangeTitle}/>
            </div>
            <div>
                <span>学習時間</span>
                <input type="number" name="time" id="time" value={time} onChange={onChangeTime}/>時間
            </div>
            <div>
                <span>入力されている学習内容：</span><span>{title}</span><br/>
                <span>入力されている時間：</span><span>{time}</span>
            </div>
        </>
    );
};