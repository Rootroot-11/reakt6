import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import {Route} from "react-router-dom";
import MovieDetails from "../Movie_Details/MovieDetails";

export default function Movies() {
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)

    let { users } = useSelector(({rootReducer}) => rootReducer);
    let { genres } = useSelector(({genresReducer}) => genresReducer);
    const dispatch = useDispatch();


    return (

        <div className="Movies">

            {
                users.map(value => <Movie key={value.id} value={value}/>)
            }
            {  <Route exact path={/:id`} component={MovieDetails}/>}

                </div>
    );
}