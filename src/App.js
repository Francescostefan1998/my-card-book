import "./App.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBook from "./components/MyBook";
import BookList from "./components/BookList";
import FilterBookList from "./components/FilterBookList";
function App() {
  return (
    <div className="App">
      <WarningSign textalert="Attention, failed loading" />
      <MyBadge classn="color-badge" text="my-badge" />
      <FilterBookList />
      <BookList />
    </div>
  );
}

export default App;
