import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  AcademicCap,
  AdjustmentsIcon,
  SunIcon,
  AcademicCapIcon,
  BookOpenIcon,
  GlobeAltIcon,
  PhoneIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/sa2.jpg";
import benefitTwoImg from "../public/img/saa2.png";

const benefitOne = {
  title: "Why Choose Us?",
  //desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "We take our time to understand your profile",
      desc: "After doing this, we offer solutions on profile lapses.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "We give answers to all questions.",
      desc: "You can send us messages at any point in time. No question is too much.",
      icon: <PhoneIcon />,
    },
    {
      title: "Constant Update.",
      desc: "At every stage we get to, we provide you with regular updates on your application.",
      icon: <NewspaperIcon />,
    },
  ],
};

const benefitTwo = {
 //title: "Offer more benefits here",
  //desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Admission and Scholarship Application",
      desc: "We offer admission and scholarship application service to USA,UK, Canada and France.",
      icon: <AcademicCapIcon/>,
    },
    {
      title: "Standardized Tests Registration.",
      desc: "We register students for standardized exams such as SAT,GRE,GMAT,TOEFL,IELTS.",
      icon: <BookOpenIcon />,
    },
    {
      title: "Visa Application",
      desc: "Visa application process can be tedious and complicated. We take the stress off you.",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Visa Interview Preparation",
      desc: "France and USA require visa interview and we prepare you adequately for that.",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Free one on one consultancy.",
      desc: "We are available to meet with you for consultancy purposes either physically, over phone call or via zoom call",
      icon: <GlobeAltIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
