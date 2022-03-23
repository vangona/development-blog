import Link from "next/link";
import { useRouter } from "next/router";

export default function PcNavBar() {
  const router = useRouter();

  return (
    <nav>
      <h1>
        관경이의 뽀짝한 개발 블로그 Pc
      </h1>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>홈</a>
        </Link>
        <Link href="/board/algorithm">
          <a className={router.pathname === "/board/algorithm" ? "active" : ""}>알고리즘</a>
        </Link>
        <div className="dropdown-btn">
          언어
          <ul>
            <li>
              <Link href="/board/language/html">
                <a className={router.pathname === "/board/language/html" ? "active" : ""}>HTML</a>
              </Link>
            </li>
            <li>
              <Link href="/board/language/css">
                <a className={router.pathname === "/board/language/css" ? "active" : ""}>CSS</a>
              </Link>
            </li>
            <li>
              <Link href="/board/language/javascript">
                <a className={router.pathname === "/board/language/javascript" ? "active" : ""}>JS</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-btn">
          강의
          <ul>
            <li>
              <Link href="/board/lectures/opentutorials">
                <a className={router.pathname === "/board/lectures/opentutorials" ? "active" : ""}>생활코딩</a>
              </Link>
            </li>
            <li>
              <Link href="/board/lectures/nomadcoder">
                <a className={router.pathname === "/board/lectures/nomadcoder" ? "active" : ""}>노마드코더</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/board/development-env">
          <a className={router.pathname === "/board/development-env" ? "active" : ""}>코딩과 인문학</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          font-family: "SsurroundAir";
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 20px;
          margin-bottom: 30px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a, .dropdown-btn {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 20px;
        }
        a, .dropdown-btn:hover {
          cursor: pointer;
        }
        .dropdown-btn:hover ul {
          display: flex;
        }
        ul {
          display: none;
          position: absolute;
          background-color: white;
          margin: 0;
          padding: 10px;
          flex-direction: column;
          transform: translateX(-10px) translateY(20px);
          border-radius: 10px;
        }
        ul:hover {
          cursor: pointer;
        }
        ul li {
          transition: all 0.2s ease-in;
          color: gray;
          font-size: 14px;
        }
        ul li:hover {
          color: black;
        }
      `}</style>
    </nav>
  )
}