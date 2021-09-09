import "./App.css";
import { ReactComponent as ReactBg } from "./assets/bg1.jpg";

const App = () => {
  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout backgroundImage={ReactBg} />
      <Layout backgroundColor="red" />
      <Layout backgroundImage={ReactBg} />
      <Footer title="THANKS FOR VISITING" descr="© 2021 #ReactMarathon." />
    </>
  );
};

export default App;
