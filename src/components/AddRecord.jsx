import { Button } from "react-bootstrap";

export const AddRecord = ({onClick}) => {

    return (
        <>
            <div>
                <Button onClick={onClick} variant="primary">登録</Button>  
            </div>
        </>
    )
};