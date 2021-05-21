import React from "react";
import emailjs from "emailjs-com"

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_m678wr9', 'template_33qmd6f', e.target, 'user_a2DPL58sqzjdUj5GbITIg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  }
  return (
    <>
      <style type="text/css">
        {`
    section.contact-me {
    border-bottom: none;
}

#contact input {
    background-color: rgba(250,250,250,0.1);
    border: 1px solid rgba(250,250,250,1);
    border-radius: 0px;
    margin-bottom: 30px;
    color: #fff;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    width: 100%;
    padding-left: 15px;
}

#contact input:focus {
    outline: none;
    box-shadow: none;
}

#contact textarea {
    background-color: rgba(250,250,250,0.1);
    border: 1px solid rgba(250,250,250,1);
    border-radius: 0px;
    margin-bottom: 30px;
    color: #fff;
    font-size: 14px;
    height: 180px;
    max-height: 220px;
    line-height: 40px;
    width: 100%;
    padding-left: 15px;
}

#contact textarea:focus {
    outline: none;
    box-shadow: none;
}

button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #e1bee7e6;
    color: #38022f;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow:0 0 25px -3px rgb(146, 29, 84);
    
}

#contact {
    text-align: center;
}
`}
      </style>
      <section className="section contact-me" id="section5">
        <div className="container">
          <div className="section-heading">
            <h2>Contact Me</h2>
            <div className="line-dec"></div>
            <span>Feel Free to Contact Me</span>
          </div>
          <div className="row">
            <div className="right-content">
              <div className="container">
                <form id="contact"  onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your name..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Your email..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your message..."
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
