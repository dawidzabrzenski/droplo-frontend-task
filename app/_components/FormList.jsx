import { useState } from "react";
import CreateForm from "./CreateForm";
import FormItem from "./FormItem";

function FormList({ createFormStatus, setCreateFormStatus }) {
  const [items, setItems] = useState([]);

  const handleAddItem = (item, parentId = null) => {
    if (parentId === null) {
      setNavigation([...navigation, item]);
    } else {
      setNavigation((prev) => addChild(parentId, item, prev));
    }
  };

  return (
    <div className="w-full flex flex-col gap-12">
      <CreateForm setCreateFormStatus={setCreateFormStatus} />
      <FormItem />
    </div>
  );
}

export default FormList;
