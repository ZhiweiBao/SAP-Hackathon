import React, { useEffect, useCallback, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Search() {
  const [geoData, setGeoData] = useState(null);
  let navigate = useNavigate();


  return (
    <div className="search-component-wrapper">
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

    </div>
  );
}

export default Search;