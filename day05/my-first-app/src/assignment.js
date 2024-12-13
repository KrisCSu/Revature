const PostAndComments = ({post, comments}) =>{

    return (
        <div>
            <h3>{post.title}</h3>
            <ol>
                {comments.map((comment, index) => (
                    <li key={index}> {comment} </li>
                ))}
            </ol>
        </div>
    )
}

export default PostAndComments;