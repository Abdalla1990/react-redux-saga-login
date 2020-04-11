import React from "react";

const ModulGrupForm = (props) => {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please provide a name.");
      return;
    }
    props.onSubmit(name);
  };
  return (
    <div>
      {error && <div>{error}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="field field-text">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
};

export default ModulGrupForm;
