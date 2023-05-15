import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./withUser";

const UserInfoWithLoader = withUser(UserInfo, "234");
const UserInfoWrapped = printProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWithLoader />
      <UserInfoWrapped a={1} b="Hello" c={{ name: "Kane" }} />
      <UserInfoForm />
    </>
  );
}

export default App;
