import { useForm } from "react-hook-form";

function CreateForm({
  onSubmit,
  parentId = null,
  onCancel,
  setCreateFormStatus,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    const newItem = {
      id: Date.now(),
      name: data.name,
      url: data.url || null,
      children: [],
    };
    onSubmit(newItem);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex bg-bg-primary flex-col w-full px-4 py-4 gap-2 rounded-md border-border-primary border"
    >
      <div className="flex flex-col gap-1 ">
        <label className="text-text-secondary leading-5 font-[500] text-sm">
          Nazwa
        </label>
        <input
          className="py-2 px-2 border border-border-primary rounded-md shadow-sm placeholder:text-text-placeholder"
          placeholder="np. Promocje"
          type="text"
          {...register("name", { required: "Pole Nazwa jest wymagane" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col relative gap-1">
        <label className="text-text-secondary leading-5 font-[500] text-sm">
          Link
        </label>
        <input
          className="py-2 px-4 pl-10 border border-border-primary rounded-md shadow-sm placeholder:text-text-placeholder"
          placeholder="Wklej lub wyszukaj"
          type="text"
          {...register("link")}
        />
        <img
          src="icons/search-lg.svg"
          className="absolute left-3 top-1/2 transform text-gray-500"
          alt="Search icon"
        />
      </div>

      <div className="flex gap-2 mt-3">
        <button
          type="button"
          onClick={() => {
            if (!parentId) {
              setCreateFormStatus(false);
            } else {
              onCancel();
            }
          }}
          className={`py-[10px] px-[14px] border border-button-secondary-border rounded-md shadow-sm text-button-secondary-fg font-semibold text-sm`}
        >
          Anuluj
        </button>
        <button
          type="submit"
          className="py-[10px] px-[14px] border border-button-secondary-color-border rounded-md shadow-sm text-button-secondary-color-fg font-semibold text-sm"
        >
          Dodaj
        </button>
      </div>
    </form>
  );
}

export default CreateForm;
