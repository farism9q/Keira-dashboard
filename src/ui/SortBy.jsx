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
      className="px-2 py-1 text-lg bg-stone-200 text-zinc-800 dark:text-stone-50 dark:bg-gray-700 rounded-md focus:outline-none"
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
