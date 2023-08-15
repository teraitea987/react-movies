import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const form = useRef();
    const [searchValue, setSeachValue] = useState("code");
    const submitForm = (e) => {
        e.preventDefault();
        setSeachValue(e.target.search.value);
    };
    const getData = () => {
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=0fbe789be83b8d38c4a982fecae5ad09&query=${searchValue}&language=fr-FR`
            )
            .then((res) => setMoviesData(res.data.results));
    };
    useEffect(() => {
        getData()
    }, [searchValue]);
    return (
        <div className="content">
            <div className="searchbar">
                <div className="searchbar-content">
                    <form ref={form} onSubmit={submitForm}>
                        <input name="search" type="text" />
                        <input type="submit" value="rechercher" />
                    </form>
                </div>
                <div className="top-flop">
                    <button className="button top">Top <span>⬆️</span></button>
                    <button className="button flop">Flop <span>⬇️</span></button>
                </div>
            </div>
            <div className="resultats">
                <div className="cards">
                    {moviesData.slice(0, 12).map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Form;
