import React, { FormEventHandler, SyntheticEvent } from "react";

type Props = {
  handleSearchBarSubmit: FormEventHandler<HTMLFormElement>;
};

export default function Header({ handleSearchBarSubmit }: Props) {
  return (
    <header className="main-header">
      <section className="select-state-section">
        <h2>Welcome to Brewery Tours</h2>
        <form
          id="select-state-form"
          autoComplete="off"
          onSubmit={handleSearchBarSubmit}
        >
          <label htmlFor="select-state">Which state are you visiting?</label>
          <input id="select-state" name="select-state" type="text" />
        </form>
      </section>
    </header>
  );
}
