import NProgress from "next-nprogress/component";
import React from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import Header from "./Header";

const Layout = ({ children, loggedInUser }) => (
  <React.Fragment>
    <Header loggedInUser={loggedInUser} />
    <NProgress color="#053F5C" />
    <ToastContainer />
    {children}
    <style jsx global>
      {`
        .padding-global-top {
          padding-top: 5rem;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .height-full-align-middle {
          height: 100vh;
          display: flex;
          align-items: center;
        }
        @media screen and (max-width: 576px) {
          .height-full-align-middle {
            height: 100vh;
            display: flex;
            align-items: start;
            padding-top: 70px;
          }
        }
      `}
    </style>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  loggedInUser: PropTypes.shape({
    ok: PropTypes.bool,
    error: PropTypes.string,
    data: PropTypes.object
  })
};

Layout.defaultProps = {
  loggedInUser: {
    ok: false,
    error: "Not Logged!",
    data: {
      id: null,
      email: "",
      nickname: "",
      profile: {
        profile_name: "",
        company: "",
        job_boolean: 0,
        image: ""
      }
    }
  }
};

export default Layout;
