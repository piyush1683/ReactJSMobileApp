type greetProps = {
    name: string,
    age: number,
    nationality: string;
    };

function Greet(greetpr: greetProps) {
  return (
    <div className="Greet">
      Hello {greetpr.name}, You are an {greetpr.age} years old {greetpr.nationality} citizen.
    </div>
  );
}

export default Greet;