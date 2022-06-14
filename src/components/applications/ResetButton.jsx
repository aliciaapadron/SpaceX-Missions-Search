export const ResetButton = (props) => {
  const handleResetBtn = (e) => {
    e.preventDefault();
    props.resetInputs();
  };
  return (
    <>
      <div className="divbtn">
        <button title="Reset" className="divbtn__btn" onClick={handleResetBtn}>
          Reset
        </button>
      </div>
    </>
  );
};
