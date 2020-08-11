export const reorder = (todos, actionId, order) => {
    const old_index = todos.findIndex(({ id }) => id === actionId);
    const new_index = order === 'up' ? old_index - 1 : old_index + 1;
    let reorderTodos = [...todos];

    if (new_index >= reorderTodos.length) {
        var k = new_index - reorderTodos.length + 1;
        while (k--) {
            reorderTodos.push(undefined);
        }
    }
    reorderTodos.splice(new_index, 0, reorderTodos.splice(old_index, 1)[0]);
    return reorderTodos;
}

export const compare = (a, b) => {
    const textA = a.text.toUpperCase();
    const textB = b.text.toUpperCase();
  
    let comparison = 0;
    if (textA > textB) {
      comparison = 1;
    } else if (textA < textB) {
      comparison = -1;
    }
    return comparison;
}