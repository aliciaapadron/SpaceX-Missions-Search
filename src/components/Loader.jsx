import '../styles/components/loader.scss';

export function Loader() {
  return (
    <>
      <div className="moon">
        <img
          src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png"
          className="loader"
        />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
