import React from 'react';
import Input from './Input';

const Search = React.forwardRef((props: any, ref: any) => (
  <>
    <input
      type={'text'}
      maxLength={25}
      name="search"
      ref={ref}
      className={'text-black rounded-md p-2'}
      onChange={props.onChange}
      placeholder="Search"
    />
  </>
));

export default Search;
