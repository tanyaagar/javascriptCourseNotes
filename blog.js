function Blog(title , body , author ){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments=[],
    this.isLive = false
}

const blog = new Blog("title" , "content" , "Author")

console.log(blog)