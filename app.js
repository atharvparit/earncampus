let currentTab = "need";

let needPosts = [];
let offerPosts = [];

let needTabBtn = document.getElementById("needTab");
let offerTabBtn = document.getElementById("offerTab");
let feedHeading = document.getElementById("feedHeading");

needTabBtn.addEventListener("click", function () {
  currentTab = "need";
  switchTab();
});

offerTabBtn.addEventListener("click", function () {
  currentTab = "offer";
  switchTab();
});

function switchTab() {
  needTabBtn.classList.toggle("active-tab", currentTab === "need");
  offerTabBtn.classList.toggle("active-tab", currentTab === "offer");

  feedHeading.innerText =
    currentTab === "need" ? "I NEED POSTS" : "I OFFER POSTS";

    renderPosts();
}

let postBtn = document.getElementById("postBtn");

postBtn.addEventListener("click", function () {
  let title = document.getElementById("postTitle").value;
  let details = document.getElementById("postDetails").value;
  let price = document.getElementById("postPrice").value;

  if (title === "" || price === "") {
    alert("Fill title and price!");
    return;
  }

  let post = {
    title: title,
    details: details,
    price: price
  };

  if (currentTab === "need") {
    needPosts.push(post);
  } else {
    offerPosts.push(post);
  }

  renderPosts();
});



let postFeed = document.getElementById("postFeed");

function renderPosts() {
  postFeed.innerHTML = "";

  let posts = currentTab === "need" ? needPosts : offerPosts;

  posts.forEach(function (post) {
    let postDiv = document.createElement("div");
    postDiv.className = "post-card";

    postDiv.innerHTML = `
      <div class="post-title">${post.title}</div>
      <div>${post.details}</div>
      <div class="post-price">₹${post.price}</div>
    `;

    postFeed.appendChild(postDiv);
  });
}
