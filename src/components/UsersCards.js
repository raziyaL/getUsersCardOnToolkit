import React, {useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

function UsersCards({users}) {
    console.log(users)

    return (
        <div>
            <Link to={`/users/${users.id}`} key={users.id}>
                <Card style={{width: "400px", height:"200px"}}>
                    <Card.Body>
                        <Card.Title>{users.name}</Card.Title>
                        <Card.Text>{users.username}</Card.Text>
                        <Button variant="primary">get user's info</Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export default UsersCards;