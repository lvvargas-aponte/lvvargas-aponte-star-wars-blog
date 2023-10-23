import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router";
import DetailItem from "./DetailItem";

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
        item = store.planets.find(planet => planet.uid === id);
        imageUrl = `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`;
    } else if (category === 'vehicles') {
        item = store.vehicles.find(vehicle => vehicle.uid === id)
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
            <div className="row">
                {category === 'people' && (
                    <>
                        <DetailItem label="Homeworld" value={store.planets.find(planet => planet.url === item.homeworld)?.name} />
                        <DetailItem label="Birth Year" value={item.birth_year} />
                        <DetailItem label="Eye Color" value={item.eye_color} />
                        <DetailItem label="Gender" value={item.gender} />
                        <DetailItem label="Height" value={item.height} />
                        <DetailItem label="Skin Color" value={item.skin_color} />
                    </>)}
                {category === 'planets' && (
                    <>
                        <DetailItem label="Climate" value={item.climate} />
                        <DetailItem label="Terrain" value={item.terrain} />
                        <DetailItem label="Gravity" value={item.gravity} />
                        <DetailItem label="Orbital Period" value={item.orbital_period} />
                        <DetailItem label="Rotation Period" value={item.rotation_period} />
                        <DetailItem label="Population" value={item.population} />
                    </>)}
                {category === 'vehicles' && (
                    <>
                        <DetailItem label="Model" value={item.model} />
                        <DetailItem label="Vehicle Class" value={item.vehicle_class} />
                        <DetailItem label="Manufacturer" value={item.manufacturer} />
                        <DetailItem label="Cost in Credits" value={item.cost_in_credits} />
                        <DetailItem label="Crew" value={item.crew} />
                        <DetailItem label="Passengers" value={item.passengers} />
                    </>)}
            </div>
        </Container>
    )
}

export default Details;