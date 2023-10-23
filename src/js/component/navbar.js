import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, DropdownButton, Dropdown, Navbar, Container, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const BlogNavbar = () => {

	const { store, actions } = useContext(Context);

	console.log(store.favorites);

	return (
		<Navbar expand="lg" className="navbar">
			<Container>
				<Navbar.Brand><Link to="/">
					<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fstar_wars_logo%2Fstar_wars_logo_PNG20.png&f=1&nofb=1&ipt=e42ead6afe11b92fa98328484531e9c716b778dec66b550be02b21d34fb25dd4&ipo=images' alt='Star Wars logo' />
				</Link></Navbar.Brand>
				<Button className="d-flex">
					<DropdownButton title="Favorites" id="bg-nested-dropdown">
						{store.favorites.map((item, idx) => {
							return <Dropdown.Item key={idx}>{item.name}<FontAwesomeIcon className="float-end" onClick={() => actions.removeFavorite(idx)} icon={faTrash} /></Dropdown.Item>
						})}
					</DropdownButton>
					<Badge className="float-end mt-2" bg="secondary">{store.favorites.length}</Badge>
				</Button>
			</Container>
		</Navbar>
	);
};
