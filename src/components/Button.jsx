export default function Button({
  type = "button",
  value,
  classNameColors,
  onClickEvent,
  disabled,
}) {
  return (
    <button
      type={type}
      onClick={onClickEvent}
      className={`btn ${classNameColors}`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
