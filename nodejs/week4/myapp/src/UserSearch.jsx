import { UseUserContext } from "./UserProvider";

function UserSearch() {
  const UserContext = UseUserContext();

  return (
    <div>
      <input onChange={UserContext.queryChange} placeholder='search for user'/>
      {UserContext.users.length > 0 ? (
        UserContext.users.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        })
      ) : (
        <div>No item </div>
      )}
      {UserContext.loading && <div>loading...</div>}
      {UserContext.error && <div>{UserContext.error}</div>}
    </div>
  );
}

export default UserSearch;
