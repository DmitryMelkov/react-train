interface ExampleProps {
  descr: string;
}

const Example: React.FC<ExampleProps> = ({ descr }) => {
  return (
    <>
      <p>{descr}</p>
    </>
  );
};

export default Example;
 