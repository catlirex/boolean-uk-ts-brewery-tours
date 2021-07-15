import React, { useState } from "react";
import { Brewery } from "../App";
import BookingForm from "../components/BookingForm";

type Props = {
  brewery: Brewery;
};

export default function BreweryCard({ brewery }: Props) {
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false);

  const toggleForm = () => setShowBookingForm(!showBookingForm);

  return (
    <li>
      <h2>{brewery.name}</h2>
      <div className="type">{brewery.brewery_type}</div>
      <section className="address">
        <h3>Address:</h3>
        <p>{brewery.street}</p>
        <p>
          <strong>
            {brewery.state}, {brewery.postal_code}
          </strong>
        </p>
      </section>
      <section className="phone">
        <h3>Phone:</h3>
        <p>{brewery.phone}</p>
      </section>
      <section className="booking">
        <button onClick={toggleForm}>Book a tour</button>
      </section>
      <section className="link">
        {brewery.website_url ? (
          <a href={brewery.website_url} target="_blank">
            Visit Website
          </a>
        ) : null}
      </section>
      {showBookingForm ? <BookingForm /> : null}
    </li>
  );
}
