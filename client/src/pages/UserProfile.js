import React, {useState, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {FaTree, FaUser} from "react-icons/fa";
import "./css/Profile.css";
import {Row, Col, Form, Button} from "react-bootstrap";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {fetchEventByID, fetchEventsByUserID, fetchUserByEmail} from "../api/API";

function UserProfile() {
  const {user, isAuthenticated, loginWithRedirect} = useAuth0();
  const [description, setDescription] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [events, setEvents] = useState([])

  // GET user description data from db.
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect({appState: {returnTo: window.location.pathname}})
      return;
    }
    fetchUserByEmail(user.email).then((data) => {
      console.log(data[0])
      setUserProfile(data[0]);
      fetchEventsByUserID(data[0]._id).then((data) => {
        setEvents(data)
        console.log(data)
      })
    })

  }, [user]);

  // handle the submission of the form
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await fetch(`/api/users/update/profile/${user.sub}`, {
    //     method: "POST",
    //     headers: {"Content-type": "application/json"},
    //     body: JSON.stringify({
    //       description: description,
    //       avatar_name: userProfile,
    //     }),
    //   });
    //   if (!response.ok) {
    //     throw Error("Request failed");
    //   }
    //   refreshPage();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // GET user nick name data from db.
  useEffect(() => {
    async function fetchUserName() {
      // try {
      //   const response = await fetch(`/api/users/${user.sub}`);
      //   if (!response.ok) {
      //     throw Error("Fetch failed");
      //   }
      //   const data = await response.json();
      //   setUserName(data.avatar_name);
      // } catch (err) {
      //   console.log("catch ", err);
      // }
    }

    fetchUserName();
  }, [user]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="profile-wrapper" id="UserProfile-Page">
      <Row className="justify-content-md-center">
        <Col className="profile-Img " xs="12" md="4" lg="3">
          <Row>
            <img
              src={user?.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </Row>
          <Row>
            <Row>
              <div className="profile-header-icon">
                <FaUser/>
                Username
              </div>
            </Row>
            <Row>{user?.nickname}</Row>
          </Row>

          <Row>
            <Row>
              <div className="profile-header-icon">
                <FaTree color="green"/>
                Green Point
              </div>
            </Row>
            <Row>110</Row>
          </Row>
          <Row>Badges:
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/" + "Augustchallenge.png"}
                alt="Challenge Badge"
                className="card-img"
              ></img>
            </div>

          </Row>
        </Col>

        <Col className="profile-form" xs={12} md={8} lg={9}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={{span: 5}}>
                <Form.Group>
                  <medium>
                    <Form.Label>Nickname</Form.Label>
                  </medium>
                  <Form.Control
                    type="username"
                    placeholder="username"
                    value={userProfile?.first_name}
                    onChange={(e) => setUserProfile(e.target.value)}
                  ></Form.Control>
                  <Form.Text className="text-muted">
                    Edit your nickname here
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={{span: 5}}>
                <medium>
                  <Form.Label>Email</Form.Label>
                </medium>
                <Form.Control placeholder={user?.email} disabled/>
              </Col>
            </Row>
            <Row>
              <Col md={{span: 5}}>
                <medium>
                  <Form.Label>Time Zone</Form.Label>
                </medium>
                <Form.Control
                  placeholder={user?.["https://localhost:5000/timezone"]}
                  disabled
                />
              </Col>

              <Col md={{span: 5}}>
                <medium>
                  <Form.Label>Country</Form.Label>
                </medium>
                <Form.Control
                  placeholder={user?.["https://localhost:5000/country"]}
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col md={{span: 10}}>
                <Form.Label>About Me</Form.Label>
                <Form.Control
                  type="aboutMe"
                  placeholder="Tell us more about you"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Tell us more about you! Edit your description here.
                </Form.Text>
              </Col>
            </Row>
            <Row className="profile-btn">
              <Col md={{span: 5}}>
                <Button
                  type="button"
                  variant="secondary"
                  style={{width: "50%"}}
                  onClick={refreshPage}
                >
                  Cancel
                </Button>
              </Col>
              <Col md={{span: 5}}>
                <Button type="submit" variant="danger" style={{width: "50%"}}>
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-md-center" style={{margin:"auto",width:"90%"}}>
        <CalendarHeatmap
          startDate={'2021-10-02'}
          endDate={Date.now()}
          values={
            events.map(event => ({date: event.date, count: event.points}))
          }
        />
      </Row>
      <br/>

    </div>
  );
}

export default UserProfile;
