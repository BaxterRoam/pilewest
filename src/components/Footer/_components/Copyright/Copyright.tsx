import "./Copyright.scss";

export default function Copyright() {
  return (
    <div className="footer__copyright">
      <p>© {new Date().getFullYear()} PILEWEST. All rights reserved.</p>
    </div>
  );
}
