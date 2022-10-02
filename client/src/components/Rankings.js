import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function Rankings({list}) {


  return (
    <ListGroup as="ol" numbered>
      {list.map(user =>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{`${user.first_name} ${user.last_name}`}</div>
            {user.organization}
          </div>
          <Badge bg="primary" pill>
            {user.total_points}
          </Badge>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default Rankings;