// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $29.99/month. Cancel anytime.
          </h2>
          <p>
            At our travel website, we offer an exciting and convenient way for
            travelers to explore their dream destinations. Our pricing model is
            designed to provide you with the best value for your money while
            ensuring a seamless and enjoyable experience throughout your
            journey. For only <strong>$29.99 a month</strong> , you gain access
            to a comprehensive range of features and benefits:
            <br />
            <p>
              1) Interactive Map Selection: Choose your travel destination with
              ease by simply clicking on the interactive map. Our platform makes
              it simple to explore various locations worldwide, giving you the
              freedom to plan your adventures effortlessly.
            </p>
            <p>
              2) Personalized Itineraries: Tailor-made travel itineraries are at
              your fingertips. We curate unique experiences based on your
              preferences, interests, and budget, ensuring that each trip is a
              memorable one.
            </p>
            <p>
              3) Real-time Travel Updates: Stay informed with real-time updates
              on travel advisories, weather conditions, and any other critical
              information that may impact your trip. Our commitment to safety
              and convenience means you can make well-informed decisions at all
              times. Community and Reviews: Engage with fellow travelers, share
              your experiences, and read honest reviews of destinations and
              accommodations from our vibrant community. Get insider tips and
              recommendations to make the most of your travels.
            </p>
            <p>
              4)24/7 Customer Support: Our dedicated customer support team is
              available round-the-clock to assist you with any queries or
              concerns you may have during your travels. Rest assured, we've got
              your back wherever you go. Join us on this adventure of a lifetime
              for just $29.99 a month. Embark on your dream getaways and let us
              be your travel companion every step of the way.
            </p>
            4)24/7 Customer Support: Our dedicated customer support team is
            available round-the-clock to assist you with any queries or concerns
            you may have during your travels.
            <p>
              <br />
              Rest assured, we've got your back wherever you go. Join us on this
              adventure of a lifetime for just $29.99 a month. Embark on your
              dream getaways and let us be your travel companion every step of
              the way.
            </p>
          </p>
        </div>
        <img src="seanPivin.jpeg" alt="This is me in Hong-Kong" />
      </section>
    </main>
  );
}
