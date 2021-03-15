import React, { Fragment, useState } from "react";

const EditDoctors = ({ doctor }) => {
  const [doctor_name, setName] = useState(doctor.doctor_name);

  const updateName = async (e) => {
      e.preventDefault();
    try {
      const body = { doctor_name };
      const response = await fetch(
        `http://localhost:5000/doctors/${doctor.doctor_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };


return (
    <Fragment>
         <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${doctor.doctor_id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${doctor.doctor_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Doctor</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setName(doctor.doctor_name)
                  
                }
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={doctor_name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateName(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
);

};

export default EditDoctors;
