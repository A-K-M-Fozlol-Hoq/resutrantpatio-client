import React from 'react';

const InboxTable = (props) => {
  const { messages, setMessageDetails, setShowTable } = props;
  const deleteMessage = (id) => {
    fetch(
      `https://glacial-inlet-84709.herokuapp.com/contactUs/deleteById/${id}`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'form was removed successfully!') {
          alert('Message removed successfully');
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to remove client! Please try again');
        window.location.reload();
      });
  };
  return (
    <table className="table table-striped" style={{ border: '1px solid #000' }}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Details</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message, index) => (
          <tr key={message._id}>
            <th scope="row">{index + 1}</th>
            <td
              style={{ cursor: 'pointer' }}
              onClick={() => {
                // eslint-disable-next-line no-unused-expressions
                setMessageDetails(message);
                setShowTable(false);
              }}
            >
              {message.name.length > 15
                ? `${message.name.slice(0, 15)}...`
                : `${message.name}`}
            </td>
            <td
              style={{ cursor: 'pointer' }}
              onClick={() => {
                // eslint-disable-next-line no-unused-expressions
                setMessageDetails(message);
                setShowTable(false);
              }}
            >
              {message.email.length > 15
                ? `${message.email.slice(0, 15)}...`
                : `${message.email}`}
            </td>
            <td
              style={{ cursor: 'pointer' }}
              onClick={() => {
                // eslint-disable-next-line no-unused-expressions
                setMessageDetails(message), setShowTable(false);
              }}
            >
              {message.details.length > 15
                ? `${message.details.slice(0, 15)}...`
                : `${message.details}`}
            </td>
            <td>
              <div
                className="btn btn-danger"
                onClick={() => deleteMessage(message._id)}
              >
                Delete
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InboxTable;
