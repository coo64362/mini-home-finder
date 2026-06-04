import {useState} from "react";
import {properties} from "../data/properties";
import PropertyCard from "./PropertyCard";

function PropertyList() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProperties = properties.filter((property) => {
        const searchText = searchTerm.toLowerCase();

        return (
            property.city.toLowerCase().includes(searchText) ||
            property.zip.includes(searchText)
        );
    });
    return (
        <section id="listings" className="section">
            <h2>Property Listings</h2>
            <p>Browse available properties below.</p>

            <input
                type="text"
                placeholder="Search by city or ZIP"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />


            <div className="property-grid">
                {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property}/>
                ))}
            </div>
        </section>
    );
}

export default PropertyList;