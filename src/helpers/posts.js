export const removeTextTags = (post) => post.content.rendered.replace(/(<([^>]+)>)/gi, '');
