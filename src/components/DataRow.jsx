import Button from 'react-bootstrap/Button';

export const DataRow = ({ record, onClickDelete }) => {
    const styleTime = {
        padding: "5px",
    }
    
    return(
        <tr id={record.id}>
            <td>{record.title}</td>
            <td style={styleTime}>{record.time}時間</td>
            <td>
                <Button onClick={() => onClickDelete(record.id)} variant="outline-secondary">削除</Button>
            </td>
        </tr>
    );
};