import TeaListItem from "./TeaListItem";

let teaData = [
  { name: "Black", src: "./src/assets/images/black.svg" },
  { name: "Green", src: "./src/assets/images/green.svg" },
  { name: "White", src: "./src/assets/images/white.svg" },
  { name: "Puerh", src: "./src/assets/images/puerh.svg" },
  { name: "Oo-long", src: "./src/assets/images/oolong.svg" },
];

function TeaList() {
  return (
    <div className="types-content">
      {teaData.map((tea, index) => (
        <TeaListItem item={tea} key={index} />
      ))}

    </div>
  );
}

export default TeaList;
