import logo from "../assets/icon.avif";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Investment Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
