import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router";

const Details = () => {

    const { category, id } = useParams();
    const { store, actions } = useContext(Context);
    let item = null;
    let imageUrl = null;

    console.log(store.planets);

    if (category === 'people') {
        item = store.people.find(person => person.uid === id)
        imageUrl = `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`;
    } else if (category === 'planets') {
        item = store.planets.find(vehicle => vehicle.uid === id);
        imageUrl = `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`;
    } else if (category === 'vehicles') {
        item = store.planets.find(planet => planet.uid === id)
        imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`;
    }

    console.log('store data', store.data, 'id', id, 'item', item);

    return (
        <Container>
            <Card className="mt-4 bg-transparent border-info">
                <div className="row">
                    <div className="col-6">
                        <Card.Img className="card-img-2" src={imageUrl} />
                    </div>
                    <div className="col-6">
                        <Card.Body>
                            <Card.Title className="fs-1"><h3>{item.name}</h3></Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim justo at augue hendrerit sodales. Aliquam nibh ex, sodales nec justo in, consequat sagittis lorem. Maecenas in lorem nisl. Cras mi elit, laoreet vel vehicula non, pulvinar ut nibh. Mauris pretium eu ipsum et aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In nulla risus, fringilla eget odio auctor, molestie consectetur nibh. Cras enim purus, dapibus consectetur pulvinar non, tempus eget nulla.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
            {/* need to refactor code to make this more dynamic */}
            <div className="row">
                {category === 'people' && (<div className="col-2 fs-3">
                    <h3>Homeworld</h3>
                    <p>{store.planets.find(planet => planet.url === item.homeworld)?.name}</p>
                </div>)}
                {category === 'people' && (<div className="col-2 fs-3">
                    <h3>Birth Year</h3>
                    <p>{item.birth_year}</p>
                </div>)}
                {category === 'people' && (<div className="col-2 fs-3">
                    <h3>Eye Color</h3>
                    <p>{item.eye_color}</p>
                </div>)}
                {category === 'people' && (<div className="col-2 fs-3">
                    <h3>Gender</h3>
                    <p>{item.gender}</p>
                </div>)}
                {category === 'people' && (<div className="col-2 fs-3">
                    <h3>Height</h3>
                    <p>{item.height}</p>
                </div>)}
                {category === 'people' && (<div className="col-2 fs-3">
                    <h3>Skin Color</h3>
                    <p>{item.skin_color}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Climate</h3>
                    <p>{item.climate}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Terrain</h3>
                    <p>{item.terrain}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Gravity</h3>
                    <p>{item.gravity}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Orbital Period</h3>
                    <p>{item.orbital_period}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Rotation Period</h3>
                    <p>{item.rotation_period}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Population</h3>
                    <p>{item.population}</p>
                </div>)}
                {category === 'vehicles' && (<div className="col-2 fs-3">
                    <h3>Climate</h3>
                    <p>{item.climate}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Terrain</h3>
                    <p>{item.terrain}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Gravity</h3>
                    <p>{item.gravity}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Orbital Period</h3>
                    <p>{item.orbital_period}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Rotation Period</h3>
                    <p>{item.rotation_period}</p>
                </div>)}
                {category === 'planets' && (<div className="col-2 fs-3">
                    <h3>Population</h3>
                    <p>{item.population}</p>
                </div>)}
            </div>
        </Container>
    )
}

export default Details;