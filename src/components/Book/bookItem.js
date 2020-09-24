import React from 'react';
import {Col} from "react-bootstrap";

const BookItem = ({book}) => {
    return (
        <Col>
            {book.author + "      " + book.title + "      "+ book.publishedAt}
        </Col>
    );
};

export default (BookItem);