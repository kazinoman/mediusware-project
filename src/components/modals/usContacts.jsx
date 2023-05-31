import React from "react";
import { Button, Modal } from "react-bootstrap";

const ShowUsContacts = ({ isOpen, onClose, data, openAllContacts, openUsContacts }) => {
  const modalClass = isOpen ? "modal fade show" : "modal fade";

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Phone</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {data.map((contact, i) => (
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
        <Button variant="secondary" onClick={openAllContacts} style={{ backgroundColor: "#46139f" }}>
          All Contacts
        </Button>
        <Button variant="secondary" onClick={openUsContacts} style={{ backgroundColor: "#ff7f50" }}>
          US Contacts
        </Button>
        <Button variant="secondary" onClick={onClose} style={{ color: "#000", backgroundColor: "#fff", border: "1px solid #46139f" }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowUsContacts;
