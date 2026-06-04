function PropertyCard({property}) {
    return (
        <article className="property-card">
            <img
                src={property.imageUrl}
                alt={property.title}
                className="property-image"
            />

            <div className="property-content">
                <h3>{property.title}</h3>

                <p className="propery-content">
                    {property.city}, {property.state} {property.zip}
                </p>

                <p className="property-price">${property.price.toLocaleString()}</p>

                <p className="property-details">
                    {property.beds} beds * {property.baths} baths *{" "}
                    {property.squareFeet.toLocaleString()} sq ft
                </p>

                <p>{property.description}</p>
            </div>
        </article>
    );
}

export default PropertyCard;

