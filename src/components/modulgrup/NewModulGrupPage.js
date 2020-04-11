import React from "react";
import { connect } from "react-redux";
import navigateTo from "../../services/navigation";
import { CREATE_MODULGRUP } from "../../actions/modulgrup/actionTypes";
import ModulGrupForm from "./ModulGrupForm";

const NewModulGrupPage = (props) => {
  const handleSubmit = (payload) => {
    props.createModulGrup(payload);
    navigateTo("/admin/posts");
  };
  return (
    <div>
      <h2>Create new modul grup</h2>
      <ModulGrupForm onSubmit={handleSubmit} />
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    createModulGrup: (payload) => dispatch({ type: CREATE_MODULGRUP, payload }),
  };
}

export default connect(null, mapDispatchToProps)(NewModulGrupPage);
