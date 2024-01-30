const UserEmptyCars = ({ userName }) => {
  return (
    <div className="flex justify-center items-center text-red-500 text-2xl h-full">
      {userName} has no cars registered in the app
    </div>
  );
};

export default UserEmptyCars;
