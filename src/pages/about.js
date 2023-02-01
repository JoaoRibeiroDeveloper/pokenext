import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function about(){
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quae, possimus, facilis fugiat reprehenderit repellat
                autem libero, aliquid alias soluta distinctio quia magnam vitae
                fuga consequatur voluptatem corrupti ratione neque.
            </p>
            <Image
                src="/image/imgencharizard.png"
                width="300"
                height="300"
                alt="Charizard"
            />
        </div>
    )
}