import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import SignIn from "../components/SignIn";
import { setUserData } from "../redux/slices/user";
import { wrapper } from "../redux/store";
import { UserApi } from "../utils/api";

const Home: NextPage = () => {
  return <SignIn />;
};

export default Home;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const { authToken } = parseCookies(ctx);
      const userData = await UserApi.getMe(authToken);
      store.dispatch(setUserData(userData));
      console.log(userData);
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });
