'use client';

import MotionDiv from "../app/MotionDiv";

const Map = () => (
    <div className="w-full py-12 bg-gray-50">
        <MotionDiv
            className="text-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground dark:from-foreground dark:to-muted-foreground transition-all duration-1000">
                Our Location
            </h2>
        </MotionDiv>
        <div className="w-full flex justify-center">
            <iframe
                src="https://www.google.com/maps?q=30.10047,31.37354&z=17&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Archangel Michael Church - Sheraton"
            ></iframe>
        </div>
        <div className="mt-4 text-center text-gray-600">
            <p>8 Khaled Ibn Al Walid, Sheraton Al Matar, El Nozha, Cairo Governorate 4471141, Egypt</p>
        </div>
    </div>
);

export default Map; 