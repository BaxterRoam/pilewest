import "./Divider.scss";

export function Divider() {
  return (
    <svg className="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 64" preserveAspectRatio="none">
      <path className="top-left" d="M 128 32 L 144 0 L 0 0 L 0 32 Z" />
      <path className="top-right" d="M 128 32 L 144 0 L 512 0 L 512 32 Z" />
      <path className="bottom-left" d="M 128 32 L 112 64 L 0 64 L 0 32 Z" />
      <path className="bottom-right" d="M 128 32 L 112 64 L 512 64 L 512 32 Z" />
    </svg>
  );
}
