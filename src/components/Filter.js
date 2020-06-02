import React, { useContext, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { Context } from "../store";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const { dispatch } = useContext(Context);

  const handleChange = (e) => {
    const filter = e.target.value;
    setFilter(filter);

    dispatch({
      type: "filterCards",
      filter,
    });
  };

  return (
    <FormGroup>
      <Input
        type="text"
        name="filter"
        id="filter"
        placeholder="Filter by Name"
        value={filter}
        onChange={handleChange}
      />
    </FormGroup>
  );
};

export default Filter;
