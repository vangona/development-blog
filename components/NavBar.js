import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        관경이의 뽀짝한 개발 블로그
      </div>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>홈</a>
        </Link>
        <Link href="/algorithm">
          <a className={router.pathname === "/algorithm" ? "active" : ""}>자료구조와 알고리즘</a>
        </Link>
        <Link href="/javascript">
          <a className={router.pathname === "/javascript" ? "active" : ""}>JS</a>
        </Link>
        <Link href="/lectures">
          <a className={router.pathname === "/lectures" ? "active" : ""}>강의</a>
        </Link>
        <Link href="/development-env">
          <a className={router.pathname === "/development-env" ? "active" : ""}>개발 문화</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  )
}