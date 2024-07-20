export const TotalTime = ({records})=> {
    const total = records.reduce((accumulator, currentValue) => accumulator + currentValue.time, 0);

    return(
        <div>
            <span>合計時間:</span>
            <span>{total}</span>
            <span> / 1000 (h)</span>
        </div>
    );
};