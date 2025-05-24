export default function Button() {
  return (
    <button onClick={handleClick}>
      This is a button and it is clickable!
    </button>
  );
}

function handleClick() {
  alert("Button clicked!");
}