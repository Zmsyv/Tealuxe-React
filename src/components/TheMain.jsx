import ClientSay from "./clients/ClientSay";
import Collection from "./main/Collection";
import Background from "./othersections/Background";
import Description from "./othersections/Description";
import KnowMore from "./othersections/KnowMore";
import Prioritise from "./ourpriortise/Prioritise";
import BlogMain from "./teablog/BlogMain";

function TheMain() {
  return (
    <main>
      <Background />
      <Description />
      <Collection />
      <ClientSay />
      <BlogMain />
      <KnowMore />
      <Prioritise />
    </main>
  );
}

export default TheMain;
