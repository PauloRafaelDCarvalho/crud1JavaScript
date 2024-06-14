//CRUD

//Atribuindo uma constante e suas funções
const newFacebook = {
    users: [
        {
            username: 'paulorafael',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'paulorafael',
            content: 'Meu primeiro post',
        }
    ],
};

//CREATE

//Declarando uma function e atribuindo um retorno"()"
function createPost (dados) {
    newFacebook.posts.push({
        id: newFacebook.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
createPost({ owner: 'paulorafael', content: 'Segundo post' });
createPost({ owner: 'paulorafael', content: 'Terceiro post' });

//READ

//Declarando nova function pegando const p/ retornar dentro do post
function takePosts() {
    return newFacebook.posts;
}
console.log(takePosts())

//UPDATE

/*Declarando nova function p/ atualizar, encontrando function anterior
p/ encontrar post de mesmo id a ser atualizado*/
function updateContentPost (id, newContent) {
        const postUpdate = takePosts().find((post) => {
        return post.id === id;
    });
    console.log (postUpdate)
    postUpdate.content = newContent
}
updateContentPost(1, 'newContentPost')
console.log(takePosts())

//DELETE

//
function deletePost(id) {
    const listPostsUpdate = takePosts().filter((postActually) => {
        return postActually.id !== id;
    })
    newFacebook.posts = listPostsUpdate;
}

deletePost(1);
deletePost(2);
deletePost(3);
console.log(takePosts());

