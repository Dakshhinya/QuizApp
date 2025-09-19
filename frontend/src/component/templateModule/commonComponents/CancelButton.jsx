import { Button } from "@mui/material";
function CancelButton(){


    return (
      <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <Button variant="contained" color="secondary" onClick={oncancel}>
         Cancel
        </Button>
      </div>
    </div>
    )
}

export default CancelButton;