import Image from "next/image";
import styles from '@/styles/Card.module.css';
import Link from "next/link";

export default function Card({pokemon}) {
    const img = pokemon.id <= 4 ? `/image/poke${pokemon.id}.jpeg` : "/image/padrao.png" ;
    return (
        <div className={styles.card}>
            <Image 
                src={img}
                width="120"
                height="120"
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
                Detalhes
            </Link>
        </div>
    )
}