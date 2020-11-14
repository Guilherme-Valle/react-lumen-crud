import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Book = (props) => {
    return (
        <div>
            {props.book ? (
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">{props.book.title}</Typography>
                        <Typography component="p">{props.book.description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">Option</Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
};

export default Book;