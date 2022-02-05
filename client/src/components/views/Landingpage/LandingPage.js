import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL, IMAGE_BASE_URL } from "../../../config";
import MainImage from "./MainImage";
import GridCards from "../commons/GridCards";
import { Row } from "antd";
// import { Form, Input, Button, Checkbox } from 'antd';
function LandingPage() {
    const [Movies, setMovies] = useState([]);
    const [MainMovie, setMainMovie] = useState();

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=ko&page=1`;
        axios.get(endPoint).then((res) => {
            console.log(res.data.results);
            setMovies(res.data.results);
            setMainMovie(res.data.results[0]);
        });
    }, []);
    // useEffect(
    //     (e) => {
    //         console.log(MainMovie.backdrop_path);
    //     },
    //     [MainMovie],
    // );

    return (
        <div style={{ width: "100%", margin: "0" }}>
            {/* Main Image */}
            {MainMovie && (
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280/${MainMovie.backdrop_path}`}
                    MainMovie={MainMovie}
                />
            )}

            <div style={{ width: "85%", margin: "1rem auto" }}>
                <h2>Movies by latest</h2>
                <hr />

                {/* Movie gird Cards */}
                <Row gutter={[16, 16]}>
                    {Movies &&
                        Movies.map((movie, idx) => {
                            console.log(movie);
                            return (
                                <React.Fragment key={idx}>
                                    <GridCards
                                        image={
                                            movie.poster_path
                                                ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                                                : null
                                        }
                                        movieId={movie.id}
                                        movieName={movie.title}
                                    />
                                </React.Fragment>
                            );
                        })}
                </Row>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button>Load More</button>
            </div>
        </div>
    );
}

export default LandingPage;

// const navigate = useNavigate();
// useEffect(() => {
//     axios.get("/api/hello").then((res) => {
//         console.log(res.data);
//     });
// }, []);

// const onClickHandler = () => {
//     axios.get("/api/users/logout").then((res) => {
//         console.log(res.data);
//         if (res.data.success) {
//             navigate("/login");
//         } else {
//             alert("비 로그인 상태");
//             navigate("/login");
//         }
//     });
// };

{
    /* <div
style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
}}
>
<h2>LandingPage</h2>
<button onClick={onClickHandler}>logout</button>
</div> */
}
