import React, { useEffect, useState } from 'react';
import InboxTable from './InboxTable';
import InboxDetails from './InboxDetails';
const Inbox = () => {
  const [showTable, setShowTable] = useState(true);
  const [messages, setMessages] = useState([]);
  const [messageDetails, setMessageDetails] = useState('');
  useEffect(() => {
    fetch('https://glacial-inlet-84709.herokuapp.com/contactUs/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container mt-5">
      {showTable ? (
        <InboxTable
          setShowTable={setShowTable}
          setMessageDetails={setMessageDetails}
          messages={messages}
        ></InboxTable>
      ) : (
        <InboxDetails
          setShowTable={setShowTable}
          messageDetails={messageDetails}
        ></InboxDetails>
      )}
    </div>
  );
};

export default Inbox;
