import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/Api";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

function GamesDetail() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);

	let { id } = useParams();
	const url = BASE_URL + "/" + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}

	return (
		<Row className="detail">
      <Col md={6}>
        <h1>{detail.name}</h1>
      </Col>
			<Col md={6}>
				<Image className ="detail-image" src={detail.background_image}/>
			</Col>
			<Col>
				<p>{detail.description_raw}</p>
        <a href={detail.website}>Link to website</a>
			</Col>
		</Row>
	);
}

export default GamesDetail;
