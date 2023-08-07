import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div >
          <div className="form-banner">
            {/* <img src="./assets/images/2706868.jpg" alt="loginImage" /> */}
          </div>
          <div className="form-container">
          <div className="form-white-bg">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;