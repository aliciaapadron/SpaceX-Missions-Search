export const ResetButton = (props) => {
  const handleResetBtn = (e) => {
    e.preventDefault();
    props.resetInputs();
  };
  return (
    <>
      <div className="resetbtn">
        <button
          title="Reset"
          className="resetbtn__btn"
          onClick={handleResetBtn}
        >
          Reset
        </button>
      </div>
    </>
  );
};
