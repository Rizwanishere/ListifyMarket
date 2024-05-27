function UserItem({user}) {
    return(
        <div className="m-4 p-2">
            <img width="100" height="100" className="rounded-full" src={user.avatar_url}/>
            <h3 className="ml-4">{user.login}</h3>
        </div>
    );
};

export default UserItem;