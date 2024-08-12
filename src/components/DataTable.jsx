import { Table, Button } from "react-bootstrap";

export const DataTable = ({records, onClickDelete}) => {

    return (
        <Table hover striped bordered>
            <thead>
                <tr>
                    <th>学習内容</th>
                    <th>学習時間</th>
                    <th>削除</th>
                </tr>
            </thead>
            <tbody data-testid="recordTable">
                {records.map((row) =>
                    <tr id={row.id} key={row.id}>
                        <td>{row.title}</td>
                        <td>{row.time}時間</td>
                        <td>
                            <Button onClick={() => onClickDelete(row.id)} variant="outline-secondary">削除</Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
};
