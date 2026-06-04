import {properties} from "../data/properties";
import PropertyCard from "./PropertyCard";

function PropertyList() {
    return (
        <section id="listings" className="section">
            <h2>Property Listings</h2>
            <p>Browse available properties below.</p>

            <div className="property-grid">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property}/>
                ))}
            </div>
        </section>
    );
}

export default PropertyList;