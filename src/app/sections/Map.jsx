import MapAnimations from "./MapAnimations";

const Map = () => {
    return (
        <MapAnimations>
            <iframe
                src="https://www.google.com/maps?q=30.10047,31.37354&z=17&output=embed"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Archangel Michael Church - Sheraton"
            />
        </MapAnimations>
    );
};

export default Map; 