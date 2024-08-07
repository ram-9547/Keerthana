import urlShortener from "../assets/images/portfolio/urlShortener.png";
import Edgy from "../assets/images/portfolio/Edgy.jpeg";
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";

const projectsData = [
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Netspam: a network-based spam detection framework",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "https://restful-countries.vercel.app/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      `Netspam can find features’ importance even without ground truth and only relying on metapath definition and
        based on values calculated for each review. Netspam improves accuracy compared to state-of-the-art in terms of
        time complexity, which highly depends on the number of features used to identify a spam review, hence using
        features with more weight will result in detecting fake reviews more easily with less time complexity. In this
        project, Java is used as a scripting language and for developing the algorithms.
        Content Based algorithm: This algorithm is used to detect whether the message or the the comment given is
        spam or not. This is similar to item-based collaborative filtering.
        ",`
  },
  {
    id: "url-shortener",
    img: urlShortener,
    name: "Predictive Analysis of Student Academic Performance",
    stack: ["< HTML5 />", "< CSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://catherineisonline.github.io/url-shortening-api-frontendmentor/",
    source: "https://github.com/catherineisonline/url-shortening-api-frontendmentor",
    description:
    `This project enables us to predict the academic results of the students based on their previous performances,
      irrespective of the conduction of examinations. In this project Django is used as the scripting language. The
      main motto of this project is to help the educational institutions in the current pandemic situations where the
      educational institutions are unable to conduct examinations to the students due to the outbreak of Corona
      Virus.
      Visual Studio Code, XAMPP, SVM, and Linear Regression Algorithms are used`
  },
  {
    id: "bankist",
    img: Bankist,
    name: "E- Complaints Management System",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/catherineisonline/bankist",
    description:
    `E-Complaints is an online application that facilitates the user with registration. On login to the system, the user
      can complain about different atrocities in society. Users can register with the police and have counselling for
      their criminal nature. The council ling can also be done with the help of the system. The senior police personnel
      can track the investigations anywhere on any particular issue. This project is a web application 
      that enables the police department for quick progress in their work.`
  }
];

export { projectsData };
