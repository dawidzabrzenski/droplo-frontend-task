import CreateForm from "./CreateForm";

function FormList({ createFormStatus, setCreateFormStatus }) {
  return (
    <div className="w-full bg-bg-primary rounded-md">
      {createFormStatus && (
        <CreateForm setCreateFormStatus={setCreateFormStatus} />
      )}
    </div>
  );
}

export default FormList;
