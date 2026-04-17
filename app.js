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

  clearForm();

  interestedUsers: []
});



let postFeed = document.getElementById("postFeed");

function renderPosts() {
  postFeed.innerHTML = "";

  let posts = currentTab === "need" ? needPosts : offerPosts;

  posts.forEach(function (post, index) {
    let postDiv = document.createElement("div");
    postDiv.className = "post-card";

    postDiv.innerHTML = `
      <div class="post-title">${post.title}</div>
      <div>${post.details}</div>
      <div class="post-price">₹${post.price}</div>

      ${
        currentTab === "need"
          ? `<button onclick="markInterested(${index})">I CAN DO THIS</button>`
          : ""
      }

      <div>
        ${(post.interestedUsers || []).length > 0 
          ? (post.interestedUsers.map(user => `<div>👤 ${user}</div>`).join(""))
          : "<div style='font-size:12px;color:gray;'>No one yet</div>"
        }
      </div>
    `;

    postFeed.appendChild(postDiv);
  });
}


function clearForm() {
  document.getElementById("postTitle").value = "";
  document.getElementById("postDetails").value = "";
  document.getElementById("postPrice").value = "";
}

//interests
function markInterested(index) {
  let name = prompt("Enter your name");

  if (!name) return;

  let posts = currentTab === "need" ? needPosts : offerPosts;

  // safety check
  if (!posts[index].interestedUsers) {
    posts[index].interestedUsers = [];
  }

  posts[index].interestedUsers.push(name);

  renderPosts();
}