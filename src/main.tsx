import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { Filter } from "./components/Filter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col bg-[#f4fbff] h-screen">
      <Header />
      <div className="flex-1 max-w-[1200px] w-full m-auto">
        <Filter title="teste propriedade" />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
