const Reveal = ({ children, width = "100%" }) => {
  return (
    <div style={{ width }}>
      {children}
    </div>
  );
};

export default Reveal;