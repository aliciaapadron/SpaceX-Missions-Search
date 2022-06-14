import { Input } from '../applications/Input';
import { HiSearch } from 'react-icons/hi';
import { Icon } from '@chakra-ui/react';
export function FilterRocket(props) {
  return (
    <fieldset className="fieldset">
      <Icon as={HiSearch} color="gray.500" className="search" />
      <Input
        labelId="name"
        inputClassName="fieldset__input"
        inputType="search"
        inputName="name"
        id="name"
        inputValue={props.filterRocket}
        inputPlaceholder="Search by name"
        handleFunction={props.handleFilterRocket}
      />
    </fieldset>
  );
}
