export const DataRow = ({ record }) => {
    const styleTime = {
        padding: "5px",
    }
    
    return(
        <>
            <span>{record.title}</span>
            <span style={styleTime}>{record.time}時間</span>
            <button onClick={null}>削除</button>
            <br/>
        </>
    );
};