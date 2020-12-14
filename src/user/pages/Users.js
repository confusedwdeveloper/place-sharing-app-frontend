import UsersList from "../components/UsersList";

export default function Users(props) {
  const USERS = [
    {
      id: "u1",
      name: "John Doe",
      image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
      places: 7,
    },
  ];

  return <UsersList items={USERS} />;
}
