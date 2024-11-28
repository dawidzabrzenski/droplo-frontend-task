function EmptyMenu({ setCreateFormStatus }) {
  return (
    <section className="w-full bg-bg-secondary rounded-md border border-border-secondary py-6 px-4 flex flex-col items-center gap-6">
      <div className="flex-col items-center flex gap-1">
        <h2 className="text-text-primary font-semibold leading-6">
          Menu jest puste
        </h2>
        <p className="font-normal text-text-tertiary">
          W tym menu nie ma jeszcze żadnych liknów
        </p>
      </div>
      <button
        onClick={() => setCreateFormStatus(true)}
        className="rounded-md border border-button-primary-border bg-button-primary-bg py-[10px] px-[14px] text-button-primary-fg flex items-center gap-2"
      >
        <img src="/icons/plus-circle.svg" alt="plus icon" />
        Dodaj pozycję menu
      </button>
    </section>
  );
}

export default EmptyMenu;
