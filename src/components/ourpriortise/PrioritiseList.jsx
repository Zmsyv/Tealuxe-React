import PrioritiseListItem from "./PrioritiseListItem";

let prioritiseData = [
  {
    head: "Single garden teas",
    body: "Complete transparency",
    src: "/src/assets/images/icon6.svg",
  },
  {
    head: "Only Loose leaf tea",
    body: "Best Drinking Experience",
    src: "/src/assets/images/icon7.svg",
  },
  {
    head: "Customer support",
    body: "No bots, no automated replies",
    src: "/src/assets/images/icon8.svg",
  },
  {
    head: "Fast shipping",
    body: "Save, Convenient, Reliable",
    src: "/src/assets/images/icon9.svg",
  },
];

function PrioritiseList() {
  return (
    <div className="priortise-functionality">
      {prioritiseData.map((prioritise, index) => (
        <PrioritiseListItem item={prioritise} key={index} />
      ))}
    </div>
  );
}

export default PrioritiseList;
