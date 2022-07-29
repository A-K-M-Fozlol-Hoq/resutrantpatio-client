import React from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
const InboxDetails = (props) => {
  const { messageDetails, setShowTable } = props;
  return (
    <div className="mt-5">
      <div
        className="btn btn-primary text-center "
        style={{ width: '150px' }}
        onClick={() => setShowTable(true)}
      >
        <IoArrowBackCircleSharp
          style={{ fontSize: '20px', margin: '-3px 5px 0 0' }}
        />
        Back
      </div>
      <div className="text-center mt-2">
        <p>
          <b>Name:</b>
          {messageDetails.name}
        </p>
        <hr />
        <p>
          <b>Email:</b>
          {messageDetails.email}
        </p>
        <hr />
        <p>
          <b>Details:</b>
          {messageDetails.details}
        </p>
      </div>
    </div>
  );
};

export default InboxDetails;
