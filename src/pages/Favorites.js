import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
const Favorites = () => {
    const [listData, setListData] = useState([]);
    useEffect(() => {
        let moviesId = window.localStorage.movies
            ? window.localStorage.movies.split(",")
            : [];

        for (let i = 0; i < moviesId.length; i++) {
            axios
                .get(
                    `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=0fbe789be83b8d38c4a982fecae5ad09&language=fr-FR`
                )
                .then((res) => setListData((listData) => [...listData, res.data]));

        }
    }, []);
    return (
        <div className="favorites">
            <Header />
            <h2>
                Coup de coeur <span>&#10084;&#65039;</span>
            </h2>
            <div className="resultats">
                <div className="cards">
                    {listData.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
