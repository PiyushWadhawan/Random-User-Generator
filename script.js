const body = document.querySelector("body");
const btn = document.querySelector("#generate");
const img = document.querySelector("img");
const p = document.querySelectorAll("p");

const genUser = () => {
  document.querySelector(".spinner").style.display = "block";
  const arr = [];
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      arr.push(
        data.results[0].name.first.concat(` ${data.results[0].name.last}`)
      );
      arr.push(data.results[0].email);
      arr.push(data.results[0].phone);
      arr.push(
        data.results[0].location.city.concat(
          ` ${data.results[0].location.state}`
        )
      );
      arr.push(data.results[0].dob.age);
      p.forEach((item, index) => {
        item.lastChild.textContent = arr[index];
      });
      img.src = `${data.results[0].picture.medium}`;
      if (data.results[0].gender === "male") {
        body.style.backgroundColor = "#7ec3e6";
      } else {
        body.style.backgroundColor = "pink";
      }
      document.querySelector(".spinner").style.display = "none";
    });
};

btn.addEventListener("click", genUser);
