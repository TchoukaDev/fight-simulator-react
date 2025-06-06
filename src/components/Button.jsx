export default function Button({
  value,
  classNameColors,
  onClickEvent,
  disabled,
}) {
  return (
    <button
      onClick={onClickEvent}
      className={`btn ${classNameColors}`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
