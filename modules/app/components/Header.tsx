import Link from "next/link";
import { Button } from "./Button";

export function Header() {
  return (
    <div>
      <header>
        <Link href="/#home">
          <strong className="logo">
            <img src="Tron.png" alt="Tron logo" width={0}/>
          </strong>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <li>
              <Link href="/develop">Developers</Link>
            </li>
          </ul>
        </nav>
        <a
          title="Apply"
          href="https://forms.gle/CRiYL7WMVadzBqNBA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Apply now</Button>
        </a>
      </header>
      <style jsx>{`
        header {
          align-items: center;
          background: var(--page-background-color);
          background: rgba(0, 9, 16, 0.8);
          backdrop-filter: blur(4px);
          border: 1px solid #de492d;
          color: var(--text-main-color);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 16px 24px;
          top: 8px;
          position: fixed;
          width: 100%;
          max-width: 720px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        header nav ul {
          display: flex;
        }

        header nav ul li {
          list-style: none;
          padding: 0 16px;
        }

        .logo {
          cursor: pointer;
          display: inline-flex;
        }
        .logo img {
          width: 120px;
        }

        .logo img path {
          fill: #fff;
        }

        @media all and (max-width: 650px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
