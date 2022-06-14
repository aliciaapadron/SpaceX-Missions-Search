import { LaunchItem } from './LaunchItem';
import { v4 as uuidv4 } from 'uuid';
import { Loader } from './Loader';

export function LaunchList(props) {
  return (
    <>
      {props.rockets.length === 0 ? (
        <Loader></Loader>
      ) : (
        <section>
          {props.rockets.map((launch) => (
            <LaunchItem key={uuidv4()} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
