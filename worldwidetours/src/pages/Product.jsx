import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img src="Rotem&the boys.jpg" alt="My Life :)" />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Welcome to World Wide! We are passionate travel enthusiasts
            committed to transforming the way you explore the world. Our
            platform was born out of a shared love for wanderlust and the desire
            to make travel planning a delightful experience for everyone.
          </p>
          <p>
            At World Wide, we believe that travel is more than just visiting new
            places. It's about immersing yourself in diverse cultures, creating
            unforgettable memories, and discovering the hidden gems that make
            every journey unique.
          </p>
          <p>
            Our team of experienced full-stack developers, specializing in the
            MERN stack, has meticulously crafted this platform to be your
            ultimate travel companion. With a user-friendly interface and
            cutting-edge technology, we aim to simplify the way you plan, book,
            and experience your vacations.
          </p>
          <p>
            Whether you're an intrepid adventurer seeking thrilling escapades or
            a laid-back explorer looking for tranquil retreats, we have
            something special in store for you. Discover new destinations on our
            interactive map, personalize your travel itineraries, and connect
            with like-minded travelers who share your passion for discovery.
          </p>
          <p>
            With safety, convenience, and exceptional customer service at the
            heart of our mission, we strive to be your trusted partner in every
            travel endeavor. Our affordable pricing model ensures that embarking
            on your dream vacations is no longer a distant dream.
          </p>
          <p>
            <strong>
              Thank you for joining us on this exciting journey. Let's explore
              the world together, one destination at a time!
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}
