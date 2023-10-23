import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DataCard = ({ category }) => {

    const { store, actions } = useContext(Context);

    console.log(store.favorites.includes(0))

    //console.log("Data for category:", category, store[category]);

    return (
        <>
            <div className="d-flex flex-row flex-nowrap overflow-auto">
                {category && store[category].map((item, idx) => (
                    <Card className="mt-3 bg-transparent border-info" key={idx}>
                        <Card.Body className="p-0">
                            <Card.Img variant="top" className="m-0 card-img" src={`https://starwars-visualguide.com/assets/img/${category === 'people' ? 'characters' : category}/${item.uid}.jpg`} alt="Card image cap" />
                            <Card.Title className="m-2">{item.name}</Card.Title>
                            {category === 'people' && (
                                <>
                                    <Card.Text className="m-2">Gender: {item.gender}</Card.Text>
                                    <Card.Text className="m-2">Hair Color: {item.hair_color}</Card.Text>
                                    <Card.Text className="m-2">Eye Color: {item.eye_color}</Card.Text>
                                </>
                            )}
                            {category === 'planets' && (
                                <>
                                    <Card.Text className="m-2">Population: {item.population}</Card.Text>
                                    <Card.Text className="m-2">Terrain: {item.climate}</Card.Text>
                                </>
                            )}
                            {category === 'vehicles' && (
                                <>
                                    <Card.Text className="m-2">Model: {item.model}</Card.Text>
                                    <Card.Text className="m-2">Manufacturer: {item.manufacturer}</Card.Text>
                                </>
                            )}
                            <Link to={`/details/${category}/${item.uid}`}>
                                <Button variant="outline-primary m-3">Learn More!</Button>
                            </Link>
                            <Button variant="outline-warning m-3" className="float-end" onClick={() => actions.addFavorite(category, idx)}><FontAwesomeIcon className="float-end" icon={store.favorites.find(fav => fav.name === item.name) ? faSolidHeart : faRegularHeart} /></Button>
                        </Card.Body>
                    </Card>
                ))}

            </div>
        </>
    )

}

export default DataCard;