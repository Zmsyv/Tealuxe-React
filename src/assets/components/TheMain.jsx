import ClientSay from "./clients/ClientSay";
import Collection from "./main/Collection";
import Background from "./othersections/Background";
import Description from "./othersections/Description";
import KnowMore from "./othersections/KnowMore";
import Prioritise from "./ourpriortise/Prioritise";

function TheMain() {
  return (
    <>
      <Background />
      <Description />
      <Collection />
      <ClientSay />
      {/* <BlogMain /> */}
      <KnowMore />
      <Prioritise />
    </>
  );
}

export default TheMain;
