$(document).ready(function(){




$.get('https://www.reddit.com/r/aww/.json').done(function(responseBody) {
console.log("hello");

 responseBody.data.children.forEach(function(post){
   var title = post.data.title;
   var author =post.data.author;
   var img =post.data.preview.images;
   var number=post.data.num_comments;
   console.log(title, img, author, number);

  var titleElement = $("<h3>").text(title);
  var At = $("<h4>").text(author);
  var pic = $("<image src>").data(img);
  var No = $("<p>").text(number);
   $("body").append(img);
   $("body").append(No);
   $("body").append(titleElement);
   $("body").append(At);
 });





});



















});
