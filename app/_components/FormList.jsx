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
              children: [...el.children, { ...child, parentId }],
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

  // Funkcja usuwania elementu
  const handleRemoveItem = (id, parentId = null) => {
    if (parentId === null) {
      // Usuwanie elementu głównego
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      // Usuwanie elementu z dzieci
      const removeChild = (items, parentId, childId) => {
        return items.map((el) => {
          if (el.id === parentId) {
            return {
              ...el,
              children: el.children.filter((child) => child.id !== childId),
            };
          }
          if (el.children) {
            return {
              ...el,
              children: removeChild(el.children, parentId, childId),
            };
          }
          return el;
        });
      };

      setItems((prevItems) => removeChild(prevItems, parentId, id));
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

      {items.length > 0 ? (
        items.map((item) => (
          <FormItem
            key={item.id}
            item={item}
            onAddChild={handleAddItem}
            onRemoveItem={handleRemoveItem} // Przekazanie funkcji do FormItem
          />
        ))
      ) : (
        <div>Brak elementów w menu.</div>
      )}
    </div>
  );
}

export default FormList;
