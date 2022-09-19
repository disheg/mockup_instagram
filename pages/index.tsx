import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import Auth from "./auth/index";
import { setUserData } from "../redux/slices/user";
import { wrapper } from "../redux/store";
import { UserApi } from "../utils/api";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return <div>hello</div>;
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
