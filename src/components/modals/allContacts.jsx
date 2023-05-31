import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ShowAllContacts = ({ isOpen, onClose, data, openAllContacts, openUsContacts }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEven = () => {
    if (isChecked) {
      return data.filter((data) => data.id % 2 === 0);
    }
    return data;
  };

  const filterData = handleEven();

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Phone</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((contact, i) => (
              <tr key={i}>
                <td>{contact.id}</td>
                <td>{contact.phone}</td>
                <td>{contact.country.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <label>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            Only even
          </label>
        </div>
        <Button variant="primary" onClick={openAllContacts} style={{ backgroundColor: "#46139f" }}>
          All Contacts
        </Button>
        <Button onClick={openUsContacts} style={{ backgroundColor: "#ff7f50" }}>
          US contacts
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowAllContacts;
