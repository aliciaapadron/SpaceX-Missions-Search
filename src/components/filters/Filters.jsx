import { FilterRocket } from './FilterRocket';
import { ResetButton } from '../applications/ResetButton';

export function Filters(props) {
  return (
    <section>
      <form className="form" onSubmit={props.handleSubmit}>
        <FilterRocket
          handleFilterRocket={props.handleFilterRocket}
          filterRocket={props.filterRocket}
        />
        <ResetButton resetInputs={props.resetInputs} />
      </form>
    </section>
  );
}
