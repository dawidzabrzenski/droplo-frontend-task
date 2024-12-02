import { useState } from "react";
import CreateForm from "./CreateForm";

function FormItem({ item, onAddChild, onRemoveItem }) {
  const [isAddingChild, setIsAddingChild] = useState(false);

  const handleRemoveClick = () => {
    onRemoveItem(item.id, item.parentId || null);
  };

  return (
    <div className="rounded-md bg-bg-primary border border-border-primary flex flex-col w-full">
      <div className="flex justify-between items-center px-12 py-4 ">
        <div className="space-y-2">
          <p className="font-semibold text-sm leading-5 text-text-primary">
            {item.name || "Brak nazwy"}
          </p>
          <p className="text-sm leading-5 text-text-tertiary">
            {item.url || "Brak linku"}
          </p>
        </div>
        <div className="text-text-secondary font-semibold leading-5 shadow-sm text-sm">
          <button
            className="px-5 py-3 border border-border-primary rounded-l-md"
            onClick={handleRemoveClick}
          >
            Usuń
          </button>
          <button className="px-5 py-3 border-t border-b border-border-primary">
            Edytuj
          </button>
          <button
            className="px-5 py-3 border border-border-primary rounded-r-md"
            onClick={() => setIsAddingChild(true)}
          >
            Dodaj pozycję menu
          </button>
        </div>
      </div>

      {isAddingChild && (
        <div className="pl-6">
          <CreateForm
            parentId={item.id}
            onSubmit={(newChild) => {
              setIsAddingChild(false);
              onAddChild(newChild, item.id);
            }}
            onCancel={() => setIsAddingChild(false)}
          />
        </div>
      )}

      {item.children && item.children.length > 0 && (
        <div className="pl-8">
          {item.children.map((child) => (
            <FormItem
              key={child.id}
              item={child}
              onAddChild={onAddChild}
              onRemoveItem={onRemoveItem} // Przekazanie funkcji do dzieci
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FormItem;
