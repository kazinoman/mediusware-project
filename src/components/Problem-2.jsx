import React, { memo, useEffect, useState } from "react";
import { getAllContacts, getUsContacts } from "../api";
import ShowAllContacts from "./modals/allContacts";
import ShowUsContacts from "./modals/usContacts";

const Problem2 = () => {
  const [contacts, setContacts] = useState({ all: [], us: [] });
  const [openAllContactsModal, setOpenAllContactsModal] = useState(false);
  const [openUsContactsModal, setOpenUsContactsModal] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      const promises = [getAllContacts(), getUsContacts()];
      const [all, us] = await Promise.all(promises);

      setContacts({ all: all || [], us: us || [] });
    };

    fetchContacts();
  }, []);

  const handleCloseAllModal = () => {
    setOpenAllContactsModal(false);
    setOpenUsContactsModal(false);
  };

  const handleCloseModal2 = () => {
    setOpenAllContactsModal(false);
    setOpenUsContactsModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => {
              setOpenAllContactsModal(true);
              setOpenUsContactsModal(false);
            }}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => {
              setOpenAllContactsModal(false);
              setOpenUsContactsModal(true);
            }}
          >
            US Contacts
          </button>
        </div>
      </div>
      <ShowAllContacts
        isOpen={openAllContactsModal}
        onClose={handleCloseAllModal}
        data={contacts.all}
        openAllContacts={() => {
          setOpenAllContactsModal(true);
          setOpenUsContactsModal(false);
        }}
        openUsContacts={() => {
          setOpenAllContactsModal(false);
          setOpenUsContactsModal(true);
        }}
      />
      <ShowUsContacts
        isOpen={openUsContactsModal}
        onClose={handleCloseAllModal}
        data={contacts.us}
        openAllContacts={() => {
          setOpenAllContactsModal(true);
          setOpenUsContactsModal(false);
        }}
        openUsContacts={() => {
          setOpenAllContactsModal(false);
          setOpenUsContactsModal(true);
        }}
      />
    </div>
  );
};

export default memo(Problem2);
