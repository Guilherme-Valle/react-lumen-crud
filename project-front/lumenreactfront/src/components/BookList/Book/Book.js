import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'

const Book = (props) => {
    return (
        <div>
            {props.book ? (
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">{props.book.title}</Typography>
                        <Typography component="p">{props.book.description}</Typography>
                        <Typography component="p">Author: {props.book.author}</Typography>
                        <Typography component="p">Date publish:
                            {props.book.date_publish !== null ?  ' ' + new Date(props.book.date_publish).toISOString().slice(0, 10) : ''}</Typography>

                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="delete" onClick={props.delete}>
                            <DeleteIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
};

export default Book;