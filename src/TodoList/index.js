import './TodoList.css';

function TodoList({
  children,
  error,
  loading,
  searchedTodos,
  totalTodos,
  onError,
  onLoading,
  onEmpty,
  render,
  onSearchResults,
  searchValue,
}) {
  const renderFun = children || render;

  return (
    <section className="TodoList-Container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmpty()}
      {!!totalTodos && !searchedTodos.length && onSearchResults(searchValue)}
      <ul>{!loading && !error && searchedTodos.map(renderFun)}</ul>
    </section>
  );
}

export { TodoList };
