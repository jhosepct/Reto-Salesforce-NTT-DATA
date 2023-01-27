type PropsCell = {
  children: string | JSX.Element | JSX.Element[]
}

const TCell = ({ children }: PropsCell) => {
  return <td>{children}</td>;
};

export default TCell;
