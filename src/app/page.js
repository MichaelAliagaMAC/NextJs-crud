import Image from "next/image";
import styles from "./page.module.css";
import Show from "@/components/Show";

export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">LISTA DE ESTUDIANTES</h1>
      </div>    
      <Show />
    </section>
  );
}
