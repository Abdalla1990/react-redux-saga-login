export function selectModulGrups(state) {
  return state.modulgrups;
}

export function selectCurrentModulGrup(state, id) {
  const items = state.modulgrups.items;
  return items.find((item) => item.id === id);
}
