import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';

function Isue(props) {
    return (
        <div className="container">
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href={props.links}>
                🔨 {props.name }
                </ListGroup.Item>   
            </ListGroup>
        </div>
    )
}

export default Isue;