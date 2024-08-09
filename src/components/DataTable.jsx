import { Table } from "react-bootstrap";
import { DataRow } from "./DataRow";

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
            <tbody>
                {records.map((row) =>
                    <DataRow key={row.id} record={row} onClickDelete={onClickDelete}/>
                )}
            </tbody>
        </Table>
    )
};
