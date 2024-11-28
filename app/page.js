"use client";

import "@/app/_styles/globals.css";
import { useState } from "react";

import EmptyMenu from "./_components/EmptyMenu";
import FormList from "./_components/FormList";

function Home() {
  const [createFormStatus, setCreateFormStatus] = useState(false);

  return (
    <main className="w-full h-screen bg-[#f5f5f5] flex flex-col items-center py-6 px-4 gap-6">
      <EmptyMenu setCreateFormStatus={setCreateFormStatus} />
      <FormList
        createFormStatus={createFormStatus}
        setCreateFormStatus={setCreateFormStatus}
      />
    </main>
  );
}

export default Home;
