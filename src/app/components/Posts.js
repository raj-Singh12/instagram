import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "3",
      username: "codewithraaz",
      userImg:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      img: "https://images.unsplash.com/photo-1693729600526-2ce45d1d53cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
      caption: "Nice Picture 3",
    },
    {
      id: "1",
      username: "codewithraaz",
      userImg:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      img: "https://images.unsplash.com/photo-1694190941111-90065ded19d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      caption: "Nice Picture",
    },
    {
      id: "2",
      username: "codewithraaz",
      userImg:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      img: "https://images.unsplash.com/photo-1682687220363-35e4621ed990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      caption: "Nice Picture 2",
    },
  ];

  return (
    <>
      <div className="">
        {posts.map((post) => (
          <Post 
            key={post.id} 
            id={post.id} 
            username={post.username} 
            userImg={post.userImg} 
            mainImg={post.img} 
            caption={post.caption}
          />
        ))}
      </div>
    </>
  );
}
