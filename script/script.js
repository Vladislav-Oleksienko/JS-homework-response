"use strict";

const container = document.querySelector(".tbody-table");

const response = fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
  .then((response) => response.json())
  .then((res) => res.map((post) => getPosts(post)));


const getPosts = (post) => {
  container.innerHTML += `
    <td class="table-id">${post.id}</td>
    <td>${post.title}</td>
    <td>
      <img src=${post.url} alt="img" class="main-imgs">
    </td>`;
};