import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header.tsx";
import { Filter } from "./components/Filter.tsx";
import { Card } from "./components/Card.tsx";
import { Footer } from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col bg-[#f4fbff] h-screen">
      <Header />
      <main className="flex-1 max-w-[1200px] w-full m-auto">
        <Filter
          title="Busque o conteúdo que deseja assitir hoje"
          placeholder="Curso de react"
        />
        <div className="bg-white rounded-md py-2 mt-4">
          <h2 className="text-[#00A2F7] text-[26px] font-bold text-center">
            Os cursos mais buscados
          </h2>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <Card
              text="Fundamentos de React.js"
              time="9h"
              image="./react.png"
            />
            <Card text="Fundamentos de Node.js" time="9h" image="./node.png" />
            <Card text="Fundamentos de Next.js" time="9h" image="./react.png" />
            <Card
              text="Fundamentos de Tailwind"
              time="9h"
              image="./react.png"
            />
            <Card
              text="Fundamentos de Tailwind"
              time="9h"
              image="./react.png"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </StrictMode>
);
