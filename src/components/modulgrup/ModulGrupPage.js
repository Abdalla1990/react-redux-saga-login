import React from "react";
import { connect } from "react-redux";
import { selectCurrentModulGrup } from "../../selectors/modulgrups";

const ModulGrupPage = ({ modulgrup }) => {
  return (
    <div>
      {modulgrup && (
        <div>
          <h2>{modulgrup.ad}</h2>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const modulgrup = selectCurrentModulGrup(
    state,
    Number(ownProps.match.params.id)
  );
  return {
    modulgrup,
  };
}

export default connect(mapStateToProps, null)(ModulGrupPage);
