import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Dr. Sarfaraz, the central figure in the Blood Bank Inventory Project, is a highly regarded medical professional with a rich background in the field of healthcare. With a career spanning over two decades, Dr. Sarfaraz has made significant contributions to the medical community, particularly in the area of blood banking and transfusion medicine. His expertise, combined with a deep sense of compassion, has earned him a reputation as a dedicated healthcare provider and a visionary leader in the field.
          </p>
          <p>
          One of Dr. Sarfaraz's greatest achievements has been his pioneering work in enhancing the efficiency of blood banks and ensuring the availability of safe and high-quality blood products. He has been instrumental in developing protocols for blood collection, testing, storage, and distribution, all aimed at minimizing risks and maximizing the benefits of transfusion therapy. His efforts have not only saved countless lives but have also set new standards for blood banking across the healthcare industry.
</p>
<p>
The Blood Bank Inventory Project, designed and led by Dr. Sarfaraz, is a testament to his commitment to improving healthcare systems. This project, developed using the MERN stack (MongoDB, Express.js, React, and Node.js), addresses a critical need in the healthcare industry by streamlining the management of blood bank resources. Dr. Sarfaraz's vision for this project is to ensure the efficient allocation and utilization of blood products, ultimately benefiting patients in need and reducing waste.
</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
