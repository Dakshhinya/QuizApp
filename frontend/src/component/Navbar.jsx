function Navbar({title,subtitle}) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <p className="font-bold text-3xl mt-2">{title}</p>
        <p className="flex justify-center font-grey mt-2">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
