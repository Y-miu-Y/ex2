import { DataRow } from "./DataRow";

export const DataTable = ({records}) => {

    return (
        <ul>
            {records.map((row) =>
                <li key={row.id}>
                    <DataRow record={row}/>
                </li>
            )}
        </ul>
    )
};