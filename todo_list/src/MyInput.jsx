


const MyInput = (props) => {
  const { inputRef, ...rest } = props; // Destructure props to extract `inputRef`
  return <input {...rest} ref={inputRef} />; // Use `inputRef` as the ref for the input
};

export default MyInput;
