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
    const [book, setState] = React.useState(
        {
            date_publish: null,
            title: "Example",
            description: "Description of the book",
            author: "Alvaro Calderón"
        });

    const handleDateChange = date => {
        setState(prevState => ({
            ...prevState,
            date_publish: new Date(date).toISOString().slice(0, 10)
        }));
    };

    const handleInputChange =  e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Criar livro</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Preencha as informações acerca do livro que deseja adicionar.
                </DialogContentText>
                <TextField autoFocus margin="dense" id="title" label="Título" type="text" name="title" fullWidth value={book.title}
                onChange={handleInputChange}/>
                <TextField margin="dense" id="description" label="Descrição" multiline rows={4} name="description" fullWidth value={book.description}
                           onChange={handleInputChange}/>
                <TextField margin="dense" id="author" label="Autor" type="text" name="author" fullWidth value={book.author}
                           onChange={handleInputChange}/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        variant="inline"
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="Data de publicação"
                        value={book.date_publish}
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
                <Button onClick={() => props.handleSubmit(book)} color="primary">
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default CreateBook;