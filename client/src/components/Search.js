import React, { useEffect, useCallback, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Search() {
  const [title, setTitle] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!title) {
        return;
      }
      console.log("search",title);
      const path = String(window.location.pathname);
      if (path.indexOf("/events") == -1){
        navigate(`/events/search/${title}`);
      }
      else {
        navigate(`/events/search/${title}`);
        window.location.reload(false);
      }

      
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="search-component-wrapper">
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onSubmit={handleSubmit}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button 
              variant="outline-success"
              // type="submit"
              onClick={handleSubmit}
              >Search</Button>
          </Form>

    </div>
  );
}

export default Search;