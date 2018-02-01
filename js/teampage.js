const persons = [
  {
    name: "Maria Rioumine",
    photo: "images/maria-headshot.jpg",
    title: "Co-Founder and Chief Russian",
    bio:
      "<p>Maria is a co-founder at Agora, where she brings many years of expertise in tech, finance and operations together.</p><p> She was formerly the Chief of Staff to Joe Lonsdale (founder of Palantir and OpenGov) and a member of the investment team at 8VC, a San Francisco based venture firm focused on transforming major industries through data-centric technologies. She is a co-founder of RCI, a stealth financial services software company.</p><p>Before joining 8VC, Maria worked at Goldman Sachs in the Investment Banking team in London where she focused on M&A and financing transactions in the consumer and healthcare industries. Maria was a part of AirAsia’s Business Development division in Indonesia and Malaysia. She also served as an advisor to a number of nonprofit organizations in Pakistan and Southeast Asia, focusing on education and women’s initiatives.</p><p> Maria graduated with a degree in Philosophy, Politics, and Economics from the University of Oxford, where she was also the President of the Oxford Union. Maria grew up in Russia and in Israel.</p>",
    social: {
      facebook: "#",
      twitter: "https://www.linkedin.com/in/maria-rioumine-801a1058/",
      linkedin: "#"
    }
  },
  {
    name: "Ryan Gibson",
    photo: "images/ryan-headshot.PNG",
    title: "Co-Founder and Head Canadian",
    bio:
      "<p>Ryan is a co-founder at Agora, where he brings many years of technology, management and product knowledge together.</p><p> He was formerly an engineer and program manager at Micrososft, working on the ambitious HoloLens project. Prior to Microsoft he worked on the investment team at 8VC, a San Francisco based venture firm focused on transforming major industries through data-centric technologies. Has also held various engineering positions at Google, Facebook and BlackBerry, working on projects ranging from rural internet infrastructure to advanced display technology research to new wireless technologies.</p><p> Ryan recieved his Bachelor's degree in Engineering with Distinction from the University of Waterloo. While at Waterloo, Ryan co-founded a hackathon and focused on building various projects, most notibly his work in agricultural technology, which achieved both the 'most innovative' and 'best engineering' awards at the Canadian Engineering Competition. He was born and raised in Canada.</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/ryanjgibson/"
    }
  },
];

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className == "person-details"
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add("person-selected");
        this.selectedPerson.setAttribute(
          "style",
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.persons[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson
            .offsetWidth}px;height:${this.selectedPerson
            .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
            .selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add("person-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove("person-back", "person-selected");
        this.isOk = false;
      }, 400);
    }
  }
});
