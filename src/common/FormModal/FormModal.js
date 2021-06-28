import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import SimpleTabs from "../Tab/SimpleTabs"

export default function FormModal(props) {


  const handleClose = () => {
    props.modalClose()
  };

  return (
    <div>
     
      <Dialog
        open={props.modalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{padding:0}}
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <SimpleTabs />
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
