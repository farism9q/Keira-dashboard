import { Button } from "../components/ui/button";
import { useSearchParams } from "react-router-dom";

const Filter = ({ field, values }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterValue = searchParams.get(field) || values.at(0).value;

  function handleClick(val) {
    searchParams.set(field, `${val.value}`);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-1 bg-stone-200 dark:bg-gray-700 p-1 rounded-lg">
      {values.map(val => (
        <Button
          onClick={() => handleClick(val)}
          className={`text-zinc-600 dark:text-zinc-100 hover:bg-blue-500 hover:text-zinc-200 ${
            currentFilterValue === val.value.toString()
              ? "bg-blue-500 text-zinc-200"
              : "bg-stone-200 dark:bg-gray-700"
          }`}
          role="button"
          key={val.value}
        >
          <span className="uppercase">{val.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default Filter;
