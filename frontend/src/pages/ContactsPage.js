import DataTable from "../DataTable/DataTable";
import { useState, useContext } from "react";
import ContactsContext from "../store/website-context";
import ModalEdit from "../componenets/ModalEdit";

function ContactsPage() {
  const contactContext = useContext(ContactsContext);
  const [showModal, setModal] = useState(false);
  const [itemId, setId] = useState(false);

  const handleShow = (id) => {
    setModal(true);
    setId(id);
  };
  const handleClose = () => setModal(false);

  if (contactContext.contacts.length === null) {
    return <h3>Content Loading...</h3>;
  } else {
    return (
      <div>
        <h1> Contact Log </h1>
        <DataTable show={handleShow} data={contactContext.contacts} />
        {showModal ? (
          <ModalEdit id={itemId} show={handleShow} onHide={handleClose} />
        ) : null}
      </div>
    );
  }
}

export default ContactsPage;
