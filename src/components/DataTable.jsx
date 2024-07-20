export const DataTable = ({records}) => {
    const styleTime = {
        padding: "5px",
    }

    return (
        <div>
            {records.map((record) =>
                <>
                    <span>{record.title}</span>
                    <span style={styleTime}>{record.time}時間</span>
                    <br/>
                </>
            )}
        </div>
    )
};