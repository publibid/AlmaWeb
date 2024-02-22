// Things.js
import React from 'react';
import './things.scss';

function Things() {
  return (
    <div className="listcontainer">
      <div className="things">
        <h2 className="listheading">Beliefs at Alma</h2>
        <div className="list">
          <ul>
            <strong>Automation for Efficiency:</strong> Alma is committed to liberating healthcare professionals from manual tasks through efficient automation.
          </ul>
          <ul>
            <strong>AI-Driven Transformation:</strong> Going beyond mere product features, we view AI as the transformative force steering healthcare towards intelligent solutions.
          </ul>
          <ul>
            <strong>Empowering Relationships:</strong> Alma values strong connections, reflected in Wellness Insight-delivering profound insights for informed childcare.
          </ul>
        </div>
      </div>
      <div className="things">
        <h2 className="listheading">Actions Define Us</h2>
        <div className="list">
          <ul>
            <strong>Seamless Integration:</strong> Alma integrates effortlessly with legacy systems, ensuring a smooth transition to advanced healthcare technology.
          </ul>
          <ul>
            <strong>AI-Enhanced Care:</strong> Going beyond automation, Alma leverages AI to empower healthcare professionals with intelligent insights.
          </ul>
          <ul>
            <strong>Customer-Centric Support:</strong> Alma offers free consultancy, assisting parents with policy understanding, answering questions, and aiding claims conveniently.
          </ul>
        </div>
      </div>
      <div className="things">
        <h2 className="listheading">Why Alma?</h2>
        <div className="list">
          <ul>
            <strong>Passionate Commitment:</strong> Join Alma's fervent commitment to revolutionize healthcare administration.
          </ul>
          <ul>
            <strong>Challenging Opportunities:</strong> Alma presents opportunities to tackle significant healthcare challenges, driving a transformative journey.
          </ul>
          <ul>
            <strong>Cutting-Edge Technology:</strong> We work at the frontier of healthcare technology to bring a meaningful change to the world.
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Things;
