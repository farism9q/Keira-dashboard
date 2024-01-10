const UserAvatar = () => {
  return (
    <div className="flex gap-[0.6rem] items-center">
      <img
        src="/default-user.jpg"
        alt="avatar"
        className="rounded-full w-10 h-10"
      />
      <span>FARIS</span>
    </div>
  );
};

export default UserAvatar;
