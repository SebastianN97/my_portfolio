import React from "react";
import { UndrawAddUser } from "react-undraw-illustrations";

const Contact = () => {
  return (
    <div id="contact-main" className="ui main container">
      <div class="column">
        <img
          id="contact-img"
          src="https://www.benify.com/app/uploads/contact_top_image.jpg"
          alt="contact"
          width="800"
          height="400"
        />
      </div>

      <div>
        <h1>Contact Information</h1>
      </div>

      <div id="contact-box" class="ui stackable two column grid">
        <div class="column">
          <div class="ui list">
            <div class="item">
              <i class="user icon"></i>
              <div class="content">Sebastian Niewiadomski</div>
            </div>
            <div class="item">
              <i class="phone icon"></i>
              <div class="content">076 911 5199</div>
            </div>
            <div class="item">
              <i class="mail icon"></i>
              <div class="content">
                <a href="mailto:sebbe132132@gmail.com">sebbe132132@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="ui list">
            <div class="item">
              <i class="marker icon"></i>
              <div class="content">Gothenburg, Sweden</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
