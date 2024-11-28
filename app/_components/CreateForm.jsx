import { useForm } from "react-hook-form";

function CreateForm({ setCreateFormStatus }) {
  const { register } = useForm();

  return (
    <form className="flex flex-col w-full px-4 py-4 gap-2">
      <div className="flex flex-col gap-1">
        <label className="text-text-secondary leading-5 font-[500] text-sm">
          Nazwa
        </label>
        <input
          className="py-2 px-2 border border-border-primary rounded-md shadow-sm placeholder:text-text-placeholder  "
          placeholder="np. Promocje"
          type="text"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </div>

      <div className="flex flex-col relative gap-1 ">
        <label className="text-text-secondary leading-5 font-[500] text-sm">
          Link
        </label>
        <input
          className="py-2 px-4 pl-10 border border-border-primary rounded-md shadow-sm placeholder:text-text-placeholder "
          placeholder="Wklej lub wyszukaj"
          type="text"
          {...register("name", {
            required: "This field is required",
          })}
        />
        <img
          src="icons/search-lg.svg"
          className="absolute left-3 top-1/2 py-1 text-gray-500"
        />
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => setCreateFormStatus(false)}
          className="py-[10px] px-[14px] border border-button-secondary-border rounded-md shadow-sm text-button-secondary-fg font-semibold text-sm"
        >
          Anuluj
        </button>
        <button className="py-[10px] px-[14px] border border-button-secondary-color-border rounded-md shadow-sm text-button-secondary-color-fg font-semibold text-sm">
          Dodaj
        </button>
      </div>
    </form>
  );
}

export default CreateForm;
