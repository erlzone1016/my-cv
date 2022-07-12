/**
 *
 * @param {string} str
 * @param {string[]} params
 * @param {string} placeholder
 */
function addParamsToString(str, params, placeholder = "\\?") {
  let index = 0;
  const regEx = new RegExp(`${placeholder}`, "gi");
  const result = str.replace(regEx, function (e) {
    e = params[index];
    index += 1;
    return e;
  });

  return result;
}

/**
 *
 * @param {Date} date
 */
function formatDate(date) {
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
}

const data = {
  title: "ERLSON DAVID E.ESCALANTE",
  owner: {
    firstName: "ERLSON DAVID",
    middleName: "ELUNA",
    lastName: "ESCALANTE",
    email: "erlzone1@gmail.com",
    phoneNumber: "+63 976 003 7116",
  },
  aboutMe: [
    "Hi, I'm Erlson. I love using JavaScript in every application I create. Building a cross-platform application is super easy. I heard that you are looking for a React / NodeJS developer. I would like to grab the opportunity to be part of your team. I promise that I will do my best.",
  ],
  experiences: [
    {
      text: `<strong>Backend Developer</strong> at <a href="https://www.logicbaseinteractive.com/">Logicbase Interactive</a>. <span class="lt">(? - ?)</span>`,
      params: [
        formatDate(new Date("2022-05-23")),
        formatDate(new Date()) + " {Present}",
      ],
    },
    {
      text: `<strong>Frontend Developer</strong> at Split Second Software Services Corporation. We are using <strong>VueJS</strong> for our frontend. <span class="lt">(? - ?)</span>`,
      params: [
        formatDate(new Date("2021-06-07")),
        formatDate(new Date("2022-05-20")),
      ],
    },
    {
      text: `<strong>Full stack NodeJS / ReactJS Developer</strong> at JSRE Developers. <span class="lt">(? - ?)</span>`,
      params: [
        formatDate(new Date("2018-02-01")),
        formatDate(new Date("2021-03-01")),
      ],
    },
    {
      text: `<strong>Mobile App Developer</strong> at Split Second Software Services Corporation using HTML, JavaScript, CSS and Cordova library. <span class="lt">(? - ?)</span>`,
      params: [
        formatDate(new Date("2017-03-01")),
        formatDate(new Date("2018-01-01")),
      ],
    },
  ],


  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "StencilJS",
    "VueJS",
    "Nodejs",
    "Express",
    "EJS",
    "Knex.js",
    "Sequelize",
    "ElectronJS"
  ],
  education: [],
};

(function () {
  //append experiences
  const expCon = document.querySelector("#exp");
  expCon.innerHTML = data.experiences
    .map((item) => {
      return `<li>${addParamsToString(item.text, item.params)}</li>`;
    })
    .join("\n");
    
  
  // append skills
  const skillsCon = document.querySelector("#skills");
  skillsCon.innerHTML = data.skills.join(", ") + ".";
})();
