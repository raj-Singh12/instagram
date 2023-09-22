export default function MiniProfile() {
  return (
    <>
      <div className="flex items-center justify-between mt-14 ml-10">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          alt="user-image"
          className="h-16 rounded-full border p-[2px] cursor-pointer"
        />
        <div className="flex-1 ml-4">
            <h2 className="font-bold">Codewithhand</h2>
            <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm">Sign out</button>
      </div>
    </>
  );
}
