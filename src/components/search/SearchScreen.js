import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesbyName } from "../selectors/getHeroesbyName";
import { useMemo } from "react";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {filter = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: filter,
    });

    const {searchText} = formValues;
    const heroesFiltered =  useMemo( () => getHeroesbyName(filter), [filter]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?filter=${searchText}`);
    }

    return (
        <>
            <h1>Hola desde SearchScreen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-2"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (filter === '')
                        ? <div className="alert alert-info">Buscar un heroe</div>
                        : (heroesFiltered.length === 0) && <div className="alert alert-danger">No hay resultados: {filter}</div>
                    }

                    {
                        heroesFiltered.map( heroe => (
                            <HeroCard 
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
