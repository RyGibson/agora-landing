const persons = [
  {
    name: "Maria Rioumine",
    photo: "images/Maria.jpg",
    title: "Co-Founder",
    bio:
      "<p>Maria is a co-founder of Agora</p><p>She was formerly an investor at 8VC, a San Francisco based venture capital fund focused on transforming major industries through data-centric technologies, where she primarily focused on enterprise software investments. She was formerly the Chief of Staff to Joe Lonsdale, Co-Founder of Addepar and Palantir, a multi-billion dollar global software company best known for its work in defense and finance. She is also a Co-Founder of RCI, a stealth financial services software company.</p><p>Previously, Maria worked at Goldman Sachs in the Investment Banking team in London where she focused on M&A and financing transactions in the consumer and healthcare industries. Maria also worked in AirAsia’s Business Development division in Indonesia and Malaysia.</p><p>Maria graduated with a degree in Philosophy, Politics, and Economics from the University of Oxford, where she was the President of the Oxford Union. Maria grew up in Russia, Israel, and the UK.</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/maria-rioumine-801a1058/"
    }
  },
  {
    name: "Ryan Gibson",
    photo: "images/Ryan.jpg",
    title: "Co-Founder",
    bio:
      "<p>Ryan is a co-founder at Agora.</p><p> He was formerly an engineer and program manager at Micrososft, working on the ambitious HoloLens project. Prior to Microsoft he was an investor at 8VC, a San Francisco based venture firm focused on transforming major industries through data-centric technologies. He has also held various engineering positions at Google, Facebook and BlackBerry, working on projects ranging from rural internet infrastructure to the first generation of flexible display technologies to designing and testing new wireless technologies.</p><p> Ryan recieved his Bachelor's degree in Engineering with Distinction from the University of Waterloo. While at Waterloo, Ryan co-founded a hackathon, coached varsity sports and focused on building various projects, most notibly his work in agricultural technology, which achieved both the 'most innovative' and 'best engineering' awards at the national Canadian Engineering Competition.</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/ryanjgibson/"
    }
  },
  {
    name: "Micah Rodman",
    photo: "images/Micah.jpg",
    title: "Chief Operating Officer",
    bio:
      "<p>Micah is COO at Agora where he brings together years of experience in city government, operations, and management systemization.</p><p>Before Agora, Micah was a Management Associate at Bridgewater Associates, the world’s largest hedge fund, where he was a manager on the firm’s founder, Ray Dalio’s management team. His responsibilities included developing, systemizing, and training the company to operate by the principles that make up the firm’s unique culture.</p><p>Micah is a graduate of Yale University, where he carried out his long-held passion for city government. At Yale, he was a recipient of the Yale President’s Public Service Fellowship, coordinator of the Dwight Hall Urban Fellowship, and Editor-in-chief of the Yale Herald. In high school, Micah was the youngest-ever elected member to one of Los Angeles’s Neighborhood Councils.</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/micah-rodman-589776160/"
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
