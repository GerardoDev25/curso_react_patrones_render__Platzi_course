import './TodoList.css';

function TodoList({ error, loading, searchedTodos, onError, onLoading, onEmpty, render }) {
  return (
    <section className="TodoList-Container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos.length && onEmpty()}
      <ul>{searchedTodos.map(render)}</ul>
    </section>
  );
}

export { TodoList };
