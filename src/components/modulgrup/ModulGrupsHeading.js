import React from "react";

const ModulGrupsHeading = ({
  loading,
  modulgrups,
  onNewModulGrup,
  onReloadModulGrups,
}) => {
  return (
    <div>
      <div>
        <h2>Modul Grups</h2>
        <button className="btn" onClick={onNewModulGrup} disabled={loading}>
          New Modul Grup
        </button>
        <button
          className="btn"
          onClick={onReloadModulGrups}
          disabled={loading || modulgrups.length === 0}
        >
          Reload Modul Grups
        </button>
      </div>
    </div>
  );
};

export default ModulGrupsHeading;
