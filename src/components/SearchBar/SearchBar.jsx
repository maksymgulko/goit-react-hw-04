import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.search.value;

    if (form.elements.search.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header className={s.bar}>
      <form onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.searchButton} aria-label="Search">
            <FaSearch size={20} />
          </button>
        </div>
      </form>
    </header>
  );
};
export default SearchBar;
