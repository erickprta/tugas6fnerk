import { useState } from "react";
import DataMovie from "../../utils/DataMovie";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
const Movies = (props) => {

    const { item } = props
    // state
    // const handleClick = () => {
    //     const movie = {
    //         id: 4,
    //         title: "BERSERK OF GLUTTONY",
    //         date: "11 JANUARI 2023",
    //         image: "https://www.themoviedb.org/t/p/w220_and_h330_face/wQMcq5YUjMfoIEqLRzrNQVt4ROl.jpg"
    //     }

    //     const movie2 = {
    //         id: 8,
    //         title: "JUJUTSU KAISEN",
    //         date: "15 MARET 2023",
    //         image: "https://www.themoviedb.org/t/p/w220_and_h330_face/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg"
    //     }
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__tittle}>Latest Movies</h2>
                <div className={styles.movies__container}>
                    {
                        item.map((data) => <Movie key={data.id} title={data.title} date={data.date} image={data.image}/>)
                    }
                  </div>
                  {/* <button onClick={handleClick}>Tambahkan Movie</button> */}
            </section>
        </div>
    )
}

export default Movies;