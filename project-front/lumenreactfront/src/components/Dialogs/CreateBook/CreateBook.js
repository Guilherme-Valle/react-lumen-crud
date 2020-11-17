import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const CreateBook = (props) => {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Criar livro</DialogTitle>
        </Dialog>
    )
};

export default CreateBook;