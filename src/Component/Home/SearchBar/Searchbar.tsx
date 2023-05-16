import styles from './Searchbar.module.css';

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search..." className={styles.searchInput} />
      <button type="submit" className={styles.searchButton}>
        <i className="fa fa-search"></i>SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
