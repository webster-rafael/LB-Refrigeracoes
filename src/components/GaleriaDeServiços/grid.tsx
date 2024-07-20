interface Props {
  img: string;
}
const Grid = ({ img }: Props) => {
  return (
    <div className="w-full h-[500px]">
      <img
        className="w-full h-full rounded-md shadow-md shadow-zinc-500"
        src={img}
        alt=""
      />
    </div>
  );
};

export default Grid;
