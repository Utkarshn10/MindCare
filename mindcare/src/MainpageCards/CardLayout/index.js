import React, {Component} from "react";
import blog from "../assets/blogs.jpg";
import therapy from "../assets/therapies.jpg";
import game from "../assets/games.jpg";
import assessment from "../assets/assessment.jpg";
import tracker from "../assets/medtrack.jpg";
import doctors from "../assets/doctors.jpg";
import CardUi from "../CardUi/CardUi";
import "./style.css";

class CardLayout extends Component {
  render() {
    return (
      <div className="manincont">
        <div>
          <h1 className="fea1">Features</h1>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <CardUi
                imgsrc={assessment}
                title="Assessments"
                description="Take Free Assessment to check anxiety level."
              ></CardUi>
            </div>

            <div className="col-md-6">
              <CardUi
                imgsrc={tracker}
                title="Self Tracker"
                description="Tracker for amazing new Habits !!"
              ></CardUi>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {/* <div className="col-md-4">
              <CardUi
                imgsrc={blog}
                title="Blogs"
                description="Reading makes you feel you better. Boost your mental health with lifestyle tips."
              ></CardUi>
            </div> */}
            {/* <div className="col-md-4">
              <CardUi
                imgsrc={tracker}
                title="Self Tracker"
                description="Do you often forget about therapies and medications. We will remind you!"
              ></CardUi>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CardLayout;
