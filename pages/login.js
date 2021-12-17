import { getProviders, getSession, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify"
      />
      {Object.values(providers).map((provider) => {
        return (
          <div className="" key={provider.name}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-green-500 p-4 rounded-3xl"
            >
              Login with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Login;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      providers,
    },
  };
}
