import MapAnimations from "./MapAnimations";

const Map = () => {
    return (
        <MapAnimations>
            <iframe
                src="https://www.google.com/maps?q=30.0760836,31.3046830&z=17&output=embed"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Q-Line Print Location"
            />
        </MapAnimations>
    );
};

export default Map; 