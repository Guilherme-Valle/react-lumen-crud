import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';


const CreateBook = (props) => {
    const handleDateChange = (date) => {
      let date_publish = date;
    };
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Criar livro</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Preencha as informações acerca do livro que deseja adicionar.
                </DialogContentText>
                <TextField autoFocus margin="dense" id="title" label="Título" type="text" fullWidth value={props.title}/>
                <TextField margin="dense" id="description" label="Descrição" multiline rows={4} fullWidth value={props.description}/>
                <TextField margin="dense" id="author" label="Autor" type="text" fullWidth value={props.author}/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Data de publicação"
                        value={props.date_publish}
                        onChange={handleDateChange}
                        fullWidth
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={props.handleClose} color="primary">
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default CreateBook;