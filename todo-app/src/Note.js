import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Note(){
  return (
    <form>
      <div style={{padding:"10px","max-height":"10vh"}}>
      <TextField
        id="date"
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        style={{
          width:"30vh"
        }}
      />
       <TextField id="standard-basic" label="Title" style={{width:"60vh"}}/>
      </div>
      <div style={{width:"100vh",height:"50vh"}}>
        <TextField
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={15}
          variant="outlined"
          style={{width:"90vh",height:"50vh",left:"10px"}}
        />
      </div>
      <div style={{padding:"10px",height:"5vh"}}>
      <Button variant="contained" color="primary">
        Save
      </Button>
      </div>
    </form>
  );
}
