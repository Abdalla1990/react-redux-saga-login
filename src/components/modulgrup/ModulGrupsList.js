import React from "react";
import { Link } from "react-router-dom";

const ModulGrupsList = (props) => {
  const {
    loading,
    modulgrups,
    url,
    onEditModulGrup,
    onDeleteModulGrup,
  } = props;

  if (loading) return <p>Loading...</p>;
  if (modulgrups.length === 0) return <div>No Modul Grups.</div>;

  return (
    <ul>
      {modulgrups.map((modulgrup) => (
        <li key={modulgrup.id}>
          <Link to={`${url}/${modulgrup.id}`}>{modulgrup.title}</Link>
          <button
            className="btn"
            onClick={() => onEditModulGrup(modulgrup.id)}
            title="Edit"
          >
            <i className="fa fa-pencil-square-o" />
          </button>
          <button
            className="btn"
            onClick={() => onDeleteModulGrup(modulgrup.id)}
            title="Delete"
          >
            <i className="fa fa-trash-o" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ModulGrupsList;
