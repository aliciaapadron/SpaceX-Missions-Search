import { LaunchItem } from './LaunchItem';
import { Loader } from './Loader';

export function LaunchList(props) {
  return (
    <>
      {props.rockets.length === 0 ? (
        <Loader></Loader>
      ) : (
        <section>
          {props.rockets.map((launch) => (
            <LaunchItem key={launch.id} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
