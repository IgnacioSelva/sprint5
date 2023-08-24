import { useState } from "react";
import "../App.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const validateEmail = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      setShowError(true);
    } else {
      setShowError(false);

    }
  };

  return (
    <>
      <div>
        <section className="section1">
          <div className="content1">
            <img
              className="imgHeader"
              src="images/illustration-intro.png"
              alt=""
            />
            <h2 className="title">
              All your files in one secure location, accessible anywhere
            </h2>
            <p className="text">
              Fylo stores all your mos important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family , and co-workers
            </p>
            <button className="button">Get Started</button>
          </div>

          <div className="curvy-bg"></div>
        </section>
      </div>

      <section className="section2">
        <div className="content2">
          <div className="flexBoy">
            <img src="/public/icons/icon-access-anywhere.svg" alt="" />

            <h2>Access your files, anywhere</h2>
            <p>
              The ability to use a smartphone, tablet, or computer to accces
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="flexBoy">
            <img src="/public/icons/icon-security.svg" alt="" />
            <h2>Security you can trust</h2>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="flexBoy">
            <img src="/public/icons/icon-collaboration.svg" alt="" />

            <h2>Real-time collaboration</h2>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachements required.
            </p>
          </div>
          <div className="flexBoy">
            <img src="/public/icons/icon-any-file.svg" alt="" />
            <h2>Store any type of file</h2>
            <p>
              Whether youre sharing holiday photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="content3">
          <span>
            <img src="images/illustration-stay-productive.png" alt="" />
          </span>
          <span>
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you cever for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends , family and
              colleagues for live colaboration.No email attachments requiered
            </p>
            <div className="link-ctn">
              <a className="link1" href="">
                See how Fylo Works
              </a>
              <img src="icons/icon-arrow.svg" alt="" />
            </div>
          </span>
        </div>
      </section>

      <section className="section4">
        <div className="cardSection">
          <article className="card">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div>
              <span>
                <img
                  className="imgSizeArticle"
                  src="/images/profile-1.jpg"
                  alt=""
                />
              </span>
              <span className="person-details">
                <h5>Satish Patel</h5>
                <p>Founder & CEO, Huddle</p>
              </span>
            </div>
          </article>
          <article className="card">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div>
              <span>
                <img
                  className="imgSizeArticle"
                  src="/images/profile-2.jpg"
                  alt=""
                />
              </span>
              <span className="person-details">
                <h5>Bruce McKenzie</h5>
                <p>Founder & CEO, Huddle</p>
              </span>
            </div>
          </article>
          <article className="card">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine
            </p>
            <div>
              <span>
                <img
                  className="imgSizeArticle"
                  src="/images/profile-3.jpg"
                  alt=""
                />
              </span>
              <span className="person-details">
                <h5>Iva Boyd</h5>
                <p>Founder & CEO, Huddle</p>
              </span>
            </div>
          </article>
        </div>
      </section>

       <section className="section5">
      <div className="content5">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you
        </p>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={validateEmail}>Get Started For Free</button>
        </div>
        {showError && (
          <p className="error-message" >
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
      <footer>
        <div className="footer-logo">
          <img src="../../public/icons/logo.svg" alt="" className="logo-f" />
          <span className="ubication">
            <img src="../../public/icons/icon-location.svg" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius id
              animi temporibus eveniet totam vero incidunt numquam error sint
              quia.
            </p>
          </span>
        </div>
        <div className="contact">
          <span>
            <img src="../../public/icons/icon-phone.svg" alt="" />
            <p>+1-543-123-4567</p>
          </span>
          <span>
            <img src="../../public/icons/icon-email.svg" alt="" />
            <p>example@fylo.com</p>
          </span>
        </div>
        <div className="links">
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>
        <div className="links">
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className="social">
          <img src="../../public/icons/facebook.svg" alt="" />
          <img src="../../public/icons/twitter.svg" alt="" />
          <img src="../../public/icons/instagram.svg" alt="" />
        </div>
      </footer>
    </>
  );
}
