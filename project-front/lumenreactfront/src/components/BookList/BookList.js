import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Book from './Book/Book';
import axios from 'axios';

class BookList extends Component {
    state = {
        books: []
    };

    componentDidMount(){
        axios.get('http://localhost:8000/api/v1/books')
            .then(res => {
                this.setState({books: res.data});
            })
    }

    render(){
        return (
            <div>
                {this.state.books ?
                    (
                        <Grid container spacing={10} style={{padding: 24}}>
                            {this.state.books.map(currentBook => (
                                <Grid item xs={12} sm={6} lg={4} xl={3} key={currentBook.id}>
                                    <Book book={currentBook} />
                                </Grid>
                            ))}
                        </Grid>
                    ) : 'No books founded'}
            </div>
        )
    }
}

export default BookList;