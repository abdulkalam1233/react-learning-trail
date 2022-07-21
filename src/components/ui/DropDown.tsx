import React from 'react';

function DropDown(props: {
  defaultValue: string | number;
  data: Array<string | number>;
  onChange: (year: string | number) => void;
}) {
  return (
    <select
      name="cars"
      id="cars"
      className="rounded-md p-2"
      defaultValue={props.defaultValue}
      onChange={(e: any) => {
        props.onChange(e.target.value);
      }}
    >
      {props.data.map((item: string | number) => {
        return (
          <option key={item} value={item} className="capitalize">
            {item}
          </option>
        );
      })}
    </select>
  );
}

export default DropDown;
