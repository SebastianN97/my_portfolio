import React from "react";
import { UndrawAddUser } from "react-undraw-illustrations";

const Contact = () => {
  return (
    <div className="ui main container">
      <div class="column">
      <img src="https://www.benify.com/app/uploads/contact_top_image.jpg" alt="contact" width="800" height="400"/>
      </div>

      <div id="contact-box" class="ui stackable two column grid">
        <div class="column">
          <div class="ui list">
            <div class="item">
              <i class="marker icon"></i>
              <div class="content">Gothenburg, Sweden</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui list">
            <div class="item">
              <i class="mail icon"></i>
              <div class="content">
                <a href="mailto:sebbe132132@gmail.com">sebbe132132@gmail.com</a>
              </div>
            </div>



            <div class="item">
              <i class="linkify icon"></i>
              <div class="content">
                <a href="https://www.linkedin.com/in/sebastian-niewiadomski-8a65421b7/">
                  linkedin.com/SebastianNiewiadomski
                </a>
              </div>
            </div>
            <div class="item">
              <i class="linkify icon"></i>
              <div class="content">
                <a href="">github.com/SebastianN97</a>
              </div>
            </div>



          </div>
        </div>

        <div class="column">
        <div class="item">
              <i class="linkify icon"></i>
              <div class="content">
                <a href="https://www.linkedin.com/in/sebastian-niewiadomski-8a65421b7/">
                  linkedin.com/SebastianNiewiadomski
                </a>
              </div>
            </div>
        </div>



      </div>
    </div>
  );
};

export default Contact;
