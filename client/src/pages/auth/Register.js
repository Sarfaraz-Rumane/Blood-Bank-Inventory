import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="form-banner ">
          </div>
          <div className="form-container">
          <div className="form-white-bg">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
