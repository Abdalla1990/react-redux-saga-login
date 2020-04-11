import React from "react";
import { connect } from "react-redux";
import navigateTo from "../../services/navigation";
import { UPDATE_MODULGRUP } from "../../actions/modulgrup/actionTypes";
import { selectCurrentModulGrup } from "../../selectors/modulgrups";
import ModulGrupForm from "./ModulGrupForm";

const EditModulGrupPage = (props) => {
  const handleSubmit = (payload) => {
    const { id } = props.post;
    payload = { ...payload, id };
    props.updateModulGrup(payload);
    navigateTo("/admin/modulgrups");
  };
  return (
    <div>
      <h2>Edit Modul Grup</h2>
      {props.modulgrup && (
        <ModulGrupForm modulgrup={props.modulgrup} onSubmit={handleSubmit} />
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

function mapDispatchtoProps(dispatch) {
  return {
    updateModulGrup: (payload) => dispatch({ type: UPDATE_MODULGRUP, payload }),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(EditModulGrupPage);
