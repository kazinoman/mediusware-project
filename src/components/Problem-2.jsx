import React, { memo, useEffect, useState } from "react";
import { getAllContacts, getUsContacts } from "../api";
import ShowAllContacts from "./modals/allContacts";
import ShowUsContacts from "./modals/usContacts";

const Problem2 = () => {
  const [contacts, setContacts] = useState({ all: [], us: [] });
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      const promises = [getAllContacts(), getUsContacts()];
      const [all, us] = await Promise.all(promises);

      setContacts({ all: all || [], us: us || [] });
    };

    fetchContacts();
  }, []);

  const handleCloseModal1 = () => {
    setModal1(false);
    setModal2(false);
  };

  const handleCloseModal2 = () => {
    setModal1(false);
    setModal2(false);
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
              setModal1(true);
              setModal2(false);
            }}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => {
              setModal1(false);
              setModal2(true);
            }}
          >
            US Contacts
          </button>
        </div>
      </div>
      <ShowAllContacts
        isOpen={modal1}
        onClose={handleCloseModal1}
        data={contacts.all}
        openAllContacts={() => {
          setModal1(true);
          setModal2(false);
        }}
        openUsContacts={() => {
          setModal1(false);
          setModal2(true);
        }}
      />
      <ShowUsContacts
        isOpen={modal2}
        onClose={handleCloseModal2}
        data={contacts.us}
        openAllContacts={() => {
          setModal1(true);
          setModal2(false);
        }}
        openUsContacts={() => {
          setModal1(false);
          setModal2(true);
        }}
      />
    </div>
  );
};

export default memo(Problem2);
