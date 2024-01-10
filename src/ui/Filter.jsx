import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Filter = ({ field, values }) => {
  const navigate = useNavigate();

  function handleClick() {}

  return (
    <div>
      {values.map(val => (
        <Button key={val}>{val}</Button>
      ))}
    </div>
  );
};

export default Filter;
