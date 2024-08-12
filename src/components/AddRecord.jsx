import { Button } from "react-bootstrap";

export const AddRecord = ({onClick}) => {

    return (
        <>
            <div>
                <Button data-testid="buttonAddRecord" onClick={onClick} variant="primary">登録</Button>  
            </div>
        </>
    )
};