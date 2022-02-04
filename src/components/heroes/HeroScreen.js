import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../selectors/getHeroesById";

export const HeroScreen = () => {

    const {heroeId} = useParams();
    const navigate = useNavigate()

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;

    if(!hero) {
        return <Navigate to={'/'}/>
    }

    const imgPath = `/assets/heroes/${id}.jpg`;

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={imgPath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>
                
                <button className="btn btn-outline-info" onClick={handleReturn}>Regresar</button>
            </div>
        </div>
    )
}
