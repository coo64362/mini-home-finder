import {useState} from "react";
import {properties} from "../data/properties";
import PropertyCard from "./PropertyCard";

function PropertyList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minBeds, setMinBeds] = useState("");
    const [minBaths, setMinBaths] = useState("");

    const filteredProperties = properties.filter((property) => {
        const searchText = searchTerm.toLowerCase();

        const matchesSearch = 
            property.city.toLowerCase().includes(searchText) ||
            property.zip.includes(searchText);

        const matchesPrice = 
            maxPrice === "" || property.price <= Number(maxPrice);

        const matchesBeds = 
            minBeds === "" || property.beds >= Number(minBeds);

        const matchesBaths = 
            minBaths === "" || property.baths >= Number(minBaths);

        return matchesSearch && matchesPrice && matchesBeds && matchesBaths;
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

            <div className="filters">
                <input
                    type="number"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(event) => setMaxPrice(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Min beds"
                    value={minBeds}
                    onChange={(event) => setMinBeds(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Min Baths"
                    value={minBaths}
                    onChange={(event) => setMinBaths(event.target.value)}
                />
            </div>


            <div className="property-grid">
                {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property}/>
                ))}
            </div>
        </section>
    );
}

export default PropertyList;