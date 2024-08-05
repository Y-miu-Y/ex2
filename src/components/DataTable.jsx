import { DataRow } from "./DataRow";

export const DataTable = ({records, onClickDelete}) => {

    return (
        <ul>
            {records.map((row) =>
                <li key={row.id}>
                    <DataRow record={row} onClick={onClickDelete}/>
                </li>
            )}
        </ul>
    )
};