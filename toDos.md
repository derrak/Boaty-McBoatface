sort posts based on voteCount in postList
add up/down vote buttons to post in postList that in/decriment post's voteCount
  look into adding those buttons to Post.js

https://www.reuters.com/article/us-britain-royals-attenborough/uk-royals-give-boaty-mcboatface-polar-ship-its-official-name-idUSKBN1WB20B

  https://elections.ulstercountyny.gov/i-voted-sticker-contest/

  editFormCompositionFunction 
  const blankChecker = function (originalPost) {
  console.log("ogPost: ",originalPost)
  let editedComment = "";
  return function(value) {
    console.log("value:", value);
    if (value === undefined){
      // console.log("editedValue:",editedPost.value);
      editedComment = originalPost.value;
      console.log("editedPost",editedComment);
    return editedComment
  }
  else {
    return value;
  }
  }
}

blankChecker(props.post)(event.target.comment.value)