import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import DataCard from "../component/Card";
import { Container } from "react-bootstrap";

const Home = () => {

	const { store, actions } = useContext(Context);
	//console.log("Categories from store:", store.categories);


	return (
		<Container>
			{store.categories.map((category, idx) => (
				<div key={idx}>
					<h3 className="mt-4" >{actions.capitalizeFirstLetter(category)}</h3>
					<DataCard category={category} />
				</div>
			))}
		</Container>
	);
};

export default Home;