// Write your Color component here
// eslint-disable-next-line react/prop-types
//Color Componenet
// eslint-disable-next-line react/prop-types
export const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};
