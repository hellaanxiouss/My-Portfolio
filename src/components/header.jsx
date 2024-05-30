function Header() {
  return (
    <div
      className="sticky top-0 left-0 w-full bg-[rgb(16,16,16)] flex justify-between p-5"
      style={{ zIndex: 9999 }}
    >
      <div className="hover:text-primary text-xl font-bold">Tirth</div>
      <ul className="flex  gap-5">
        <li className="hover:text-primary transition-all">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-primary transition-all">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-primary transition-all">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-primary transition-all">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
