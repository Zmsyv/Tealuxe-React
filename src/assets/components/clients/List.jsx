import ListItem from "./ListItem";

let authorData = [
  {
    says: "As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit.",
    author: "Alice",
  },
  {
    says: "This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional.",
    author: "Mad-Hatter",
  },
  {
    says: "If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed.",
    author: "Dormouse",
  },
  {
    says: "I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience.",
    author: "March Hare",
  },
];

function List() {
  return (
    <div className="list-types-content">
      {authorData.map((author) => (
        <ListItem item={author} />
      ))}
    </div>
  );
}

export default List;
