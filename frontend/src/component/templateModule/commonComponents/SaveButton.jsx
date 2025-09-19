import { Button } from "@mui/material";
function SaveButton(){

    const handleSave =()=>{
        
    }


    return (
      <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <Button variant="contained" color="secondary" onClick={handleSave}>
       Save
        </Button>
      </div>
    </div>
    )
}

export default SaveButton;