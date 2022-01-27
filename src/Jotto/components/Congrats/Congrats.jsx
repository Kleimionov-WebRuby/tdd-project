const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success && <span data-test="congrats-message">Well Done!!! You guess the word</span>}
    </div>
  );
};

export default Congrats;
