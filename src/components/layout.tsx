import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const isSignUpPage = router.pathname === "/sign-up";
  const isLoginPage = router.pathname === "/login";
  const isHomePage = router.pathname === "/";
  return (
    <div className="flex min-h-screen">
      <div className="relative flex basis-[80%] flex-col gap-6 p-6 pl-20 pt-8">
        <nav className="flex items-center justify-between">
          <p className="font-medium text-yellow-700">
            <span className="relative top-[0.6rem] text-xs font-extrabold uppercase after:absolute after:left-[25px] after:top-[6px] after:h-1 after:w-16 after:bg-yellow-700 after:content-['']">
              the
            </span>
            <span className="relative block text-3xl font-semibold uppercase after:absolute after:left-0 after:top-[2.2rem] after:h-1 after:w-[5.6rem] after:bg-yellow-700 after:content-['']">
              Kusp
            </span>
          </p>
          <div>
            {isSignUpPage && (
              <p className="text-sm text-secondary">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-primary">
                  Login
                </Link>
              </p>
            )}
            {isLoginPage && (
              <p className="text-sm text-secondary">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="font-medium text-primary">
                  Sign up
                </Link>
              </p>
            )}
            {isHomePage && null}
          </div>
        </nav>
        {children}
        <footer className="absolute bottom-4 flex gap-16 text-sm">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact us</a>
        </footer>
      </div>
      <div className="bg-layout-bg relative bg-cover bg-no-repeat">
        <Image
          src="/kusp-bg.jpg"
          alt="four smiling black men"
          width="2000"
          height="1596"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Layout;
