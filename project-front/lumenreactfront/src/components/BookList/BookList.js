import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Book from './Book/Book';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateBook from '../Dialogs/CreateBook/CreateBook';

class BookList extends Component {
    state = {
        books: [],
        modalOpened: false,
        selectedBook: null
    };

    componentDidMount() {
        this.getBooks();
    };

    getBooks() {
        axios.get('http://localhost:8000/api/v1/books')
            .then(res => {
                this.setState({books: res.data});
            })
    };

    deleteBookHandler(id) {
        axios.delete(`http://localhost:8000/api/v1/book/${id}`)
            .then(() => {
                this.getBooks();
            })
    };

    editBookHandler(book) {
        this.setState({selectedBook: book, modalOpened: true});
    }

    addButtonHandler = () => {
        this.setState({modalOpened: true});
    };

    closeModalHandler = () => {
        this.setState({modalOpened: false, selectedBook: null});
    };

    submitModalHandler = (book) => {
        if (book.id === null) {
            axios.post('http://localhost:8000/api/v1/book', {...book})
                .then(res => {
                    if (res) {
                        this.getBooks();
                        this.setState({modalOpened: false});
                    }
                })
        } else {
            axios.put(`http://localhost:8000/api/v1/book/${book.id}`, {...book})
                .then(res => {
                    if (res) {
                        this.getBooks();
                        this.setState({modalOpened: false});
                    }
                })
        }
    };

    render() {
        return (
            <div>
                {this.state.books ?
                    (
                        <Grid container spacing={10} style={{padding: 24}}>
                            {this.state.books.map(currentBook => (
                                <Grid item xs={12} sm={6} lg={4} xl={3} key={currentBook.id}>
                                    <Book book={currentBook}
                                          delete={() => this.deleteBookHandler(currentBook.id)}
                                          edit={() => this.editBookHandler(currentBook)}/>
                                </Grid>
                            ))}
                        </Grid>
                    ) : 'No books founded'}
                <Fab color="primary" aria-label="add" onClick={this.addButtonHandler}>
                    <AddIcon/>
                </Fab>
                <CreateBook open={this.state.modalOpened} handleClose={this.closeModalHandler}
                            handleSubmit={this.submitModalHandler} selectedBook={this.state.selectedBook}
                />
            </div>
        )
    }
}

export default BookList;