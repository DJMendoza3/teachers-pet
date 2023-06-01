import { useAppSelector } from "redux/hooks";

import apple_logo from "assets/images/apple-logo.png";

export default function TopbarNav() {
  const windowWidth = useAppSelector((state) => state.window.width);


    function NavScroll(id: string): void {
        const elmnt = document.getElementById(id);
        elmnt && elmnt.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <nav className="flex bg-primary w-full h-12 items-center drop-shadow-lg fixed justify-center gap-20">
      <div className="flex w-60">
        <img src={apple_logo} alt="" className="h-12" />
        <h1>Teachers Pet</h1>
      </div>
      {windowWidth > 768 ? (
        <ul className="flex gap-10 text-center">
          <li><button onClick={() => NavScroll('features')} className="w-32">Features</button></li>
          <li><button onClick={() => NavScroll('guide')} className="w-32">Product Guide</button></li>
          <li><button onClick={() => NavScroll('pricing')} className="w-32">Pricing</button></li>
          <li><button onClick={() => NavScroll('templates')} className="w-32">Templates</button></li>
          <li><button onClick={() => NavScroll('FAQ')} className="w-32">FAQ</button></li>
        </ul>
      ) : null}
      <div className="w-60">
        <button>Sign Up</button>
      </div>
    </nav>
  );
}
