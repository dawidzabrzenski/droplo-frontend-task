import { useState } from "react";
import CreateForm from "./CreateForm";

function FormItem({ item, onAddChild }) {
  console.log(item);
  const [isAddingChild, setIsAddingChild] = useState(false);

  const handleAddChildClick = () => {
    setIsAddingChild(true);
  };

  return (
    <div className="rounded-md bg-bg-primary border border-border-primary flex flex-col w-full">
      <div className="flex justify-between items-center px-12 py-8 ">
        <div className="space-y-2">
          <p className="font-semibold text-sm leading-5 text-text-primary">
            {item.name}
          </p>
          <p className="text-sm leading-5 text-text-tertiary">
            {item.url || "Brak linku"}
          </p>
        </div>
        <div className="text-text-secondary font-semibold leading-5 shadow-sm text-sm">
          <button className="px-5 py-3 border border-border-primary rounded-l-md">
            Usuń
          </button>
          <button className="px-5 py-3 border-t border-b border-border-primary">
            Edytuj
          </button>
          <button
            className="px-5 py-3 border border-border-primary rounded-r-md"
            onClick={handleAddChildClick}
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
        <div className="pl-8 space-y-4">
          {item.children.map((child) => (
            <FormItem key={child.id} item={child} onAddChild={onAddChild} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FormItem;
