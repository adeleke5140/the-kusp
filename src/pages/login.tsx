import Link from "next/link";
import Layout from "~/components/layout";

const LoginPage = () => {
  return (
    <Layout>
      <div className="flex flex-col px-10 pt-32">
        <section className="mb-8 flex flex-col gap-1">
          <h1 className="text-3xl font-medium">Welcome</h1>
          <p className="text-secondary">
            Please enter your details to enter your account
          </p>
        </section>
        <form
          className="flex flex-col gap-4 pr-40"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="block text-sm">
              Username or email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your username of email address"
              className="rounded-lg border-2 border-gray-200 px-3 py-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="rounded-lg border-2 border-gray-200 px-3 py-3"
            />
          </div>

          <Link
            href="/"
            className="block w-max text-sm font-medium text-primary"
          >
            Forgot password?
          </Link>
          <button className="mt-4 rounded-lg bg-primary py-3 font-medium text-white">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
