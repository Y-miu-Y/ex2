export const DataRow = ({ record, onClickDelete }) => {
    const styleTime = {
        padding: "5px",
    }
    
    return(
        <>
            <span>{record.title}</span>
            <span style={styleTime}>{record.time}時間</span>
            <button onClick={() => onClickDelete(record.id)}>削除</button>
            <br/>
        </>
    );
};