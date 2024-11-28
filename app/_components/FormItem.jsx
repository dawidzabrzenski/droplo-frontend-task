import CreateForm from "./CreateForm";

function FormItem() {
  return (
    <div className="rounded-md bg-bg-primary border border-border-primary flex flex-col w-full">
      <div className="flex justify-between items-center px-12 py-8 ">
        <div className=" space-y-2">
          <p className="font-semibold text-sm leading-5 text-text-primary">
            Promocje
          </p>
          <p className=" text-sm leading-5 text-text-tertiary">
            https://rc32141.recart.pl/promocje
          </p>
        </div>
        <div className="text-text-secondary font-semibold leading-5 shadow-sm text-sm">
          <button className="px-5 py-3 border border-border-primary rounded-l-md">
            Usuń
          </button>
          <button className="px-5 py-3 border-t border-b border-border-primary">
            Edytuj
          </button>
          <button className="px-5 py-3 border border-border-primary rounded-r-md">
            Dodaj pozycję menu
          </button>
        </div>
      </div>
      <div className="py-6 bg-bg-secondary w-full px-12">
        <CreateForm />
      </div>
      <div className="py-6 px-12 bg-bg-alt">
        <button className="py-[10px] px-[14px] border border-button-secondary-border rounded-md shadow-sm text-button-secondary-fg font-semibold text-sm">
          Dodaj pozycję menu
        </button>
      </div>
    </div>
  );
}

export default FormItem;
