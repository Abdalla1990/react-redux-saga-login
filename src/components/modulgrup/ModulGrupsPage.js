import React from "react";
import { connect } from "react-redux";

import {
  FETCH_MODULGRUPS,
  DELETE_MODULGRUP,
} from "../../actions/modulgrup/actionTypes";

import { selectModulGrups } from "../../selectors/modulgrups";
import navigateTo from "../../services/navigation";
import ModulGrupsHeading from "./ModulGrupsHeading";
import ModulGrupsList from "./ModulGrupsList";

const ModulGrupsPage = (props) => {
  React.useEffect(() => {
    props.fetchModulGrups();
  });

  const handleDeleteModulGrup = (id) => {
    if (window.confirm("Do you really want to delete this modul grup?")) {
      props.deleteModulGrup(id);
    }
  };

  const handleNewModulGrup = () => {
    const { url } = props.match;
    navigateTo(`${url}/new`);
  };

  const handleEditModulGrup = (id) => {
    const { url } = props.match;
    navigateTo(`${url}/edit`);
  };

  const handleReloadModulGrups = () => {
    props.fetchModulGrups();
  };

  const { items: modulgrups, loading } = props.modulgrups;
  const { url } = props.match;
  return (
    <div>
      <ModulGrupsHeading
        loading={loading}
        modulgrups={modulgrups}
        onNewModulGrup={handleNewModulGrup}
        onReloadModulGrups={handleReloadModulGrups}
      />
      <ModulGrupsList
        loading={loading}
        modulgrups={modulgrups}
        url={url}
        onEditModulGrup={handleEditModulGrup}
        onDeleteModulGrup={handleDeleteModulGrup}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  modulgrups: selectModulGrups(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteModulGrup: (id) => dispatch({ type: DELETE_MODULGRUP, id }),
  fetchModulGrups: () => dispatch({ type: FETCH_MODULGRUPS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModulGrupsPage);
