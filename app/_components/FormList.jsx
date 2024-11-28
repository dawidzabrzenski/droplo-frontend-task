import { useState } from "react";
import CreateForm from "./CreateForm";
import FormItem from "./FormItem";

function FormList({ createFormStatus, setCreateFormStatus }) {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem, parentId = null) => {
    if (parentId === null) {
      setItems((prevItems) => [...prevItems, newItem]);
    } else {
      const addChild = (items, parentId, child) => {
        return items.map((el) => {
          if (el.id === parentId) {
            return {
              ...el,
              children: [...el.children, child],
            };
          }
          if (el.children) {
            return {
              ...el,
              children: addChild(el.children, parentId, child),
            };
          }
          return el;
        });
      };

      setItems((prevItems) => addChild(prevItems, parentId, newItem));
    }
  };

  return (
    <div className="w-full flex flex-col gap-12">
      {createFormStatus && (
        <CreateForm
          setCreateFormStatus={setCreateFormStatus}
          onSubmit={(newItem) => handleAddItem(newItem)}
        />
      )}

      {items.length > 0 &&
        items.map((item) => (
          <FormItem key={item.id} item={item} onAddChild={handleAddItem} />
        ))}
    </div>
  );
}

export default FormList;
