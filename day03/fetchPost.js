function fetchPost(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const ul = document.getElementById("posts");
    const list = document.createElement("div");

    fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            let posts = data;

            posts.map(function(post){
                let li = document.createElement("li");
                let title = document.createElement("h3");
                let body = document.createElement('span');

                title.innerHTML = `${post.title}`;
                body.innerHTML = `${post.body}`;

                li.appendChild(title);
                li.appendChild(body);

                list.append(li);
            });
            ul.appendChild(list);
        })
}