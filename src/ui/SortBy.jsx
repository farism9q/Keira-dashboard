import { useSearchParams } from "react-router-dom";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortByValue = searchParams.get("sortBy") || options.at(0).value;

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      className="px-2 py-1 text-lg dark:text-stone-800 dark:bg-blue-50 rounded-md focus:outline-none focus:ring focus:ring-stone-800"
      onChange={handleChange}
      value={currentSortByValue}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SortBy;
