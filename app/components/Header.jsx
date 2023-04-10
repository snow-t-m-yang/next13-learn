import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="text-center space-y-7 p-7 bg-sky-700 text-white/70">
        <h1 className="text-3xl">Next 13</h1>
        <div className="flex justify-center gap-12 p-770">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about/team">team</Link>
          <Link href="/repos">repos</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
