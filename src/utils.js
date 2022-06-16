import kidnapping from "./components/assets/kidnapping.jpg";
import fraud from "./components/assets/fraud.jpg";
import burglar from "./components/assets/burglary.jpg";
import suspicious from "./components/assets/suspicious.jpg";
import rape from "./components/assets/rape.jpg";
import incident from "./components/assets/incident.jpg";
import murder from "./components/assets/murder.jpg";
import threat from "./components/assets/threat.jpg";

export const crimes = [
  {
    name: "burglary",
    image: burglar,
    description:
      "The unlawful breaking and entry (trespass) onto another person's property with the specific intent to commit a felony crime on the victim's premises.",
  },
  {
    name: "fraud",
    image: fraud,
    description:
      "Fraud is an intentionally deceptive action designed to provide the perpetrator with an unlawful gain or to deny a right to a victim. Examples are tax fraud, credit card fraud, wire fraud, securities fraud, and bankruptcy fraud",
  },
  {
    name: "kidnapping",
    image: kidnapping,
    description:
      "Kidnapping is a major problem in Nigeria in the early 21st century. Kidnapping by bandits and insurgents is among the biggest organised or gang crime in Nigeria and is a national security challenge.",
  },
  {
    name: "suspicious activity",
    image: suspicious,
    description:
      "A stranger loitering in your neighborhood or a vehicle cruising the streets repeatedly OR Someone peering into cars or windows OR A high volume of traffic going to and coming from a home on a daily basis OR Someone loitering around schools, parks, or secluded areas? Leave a Report now!",
  },
  {
    name: "rape",
    image: rape,
    description:
      "According to UNICEF data, 1 in 4 Nigerian girls are sexually assaulted before the age of 18. Despite an increase in activism, justice is rare: Nigeria, a country of 206 million people, had just 32 rape convictions between 2019 and 2020, according to data from Nigeria's national anti-trafficking agency. We'll make it better",
  },
  {
    name: "incidence",
    image: incident,
    description: "",
  },
  {
    name: "murder",
    image: murder,
    description:
      "Rate at which cases of murder comes up in different areas of the state means actions need to be taken. We the police are ready to help and keep the citizens safe from harms way.",
  },
  {
    name: "threats",
    image: threat,
    description:
      "Did Someone suggest that something unpleasant or violent will happen if you fail to carry out an action or order is not followed? Drop a Threat Report immediately!!",
  },
];

export const states = [
  {
    id: 0,
    state: "Abia",
  },
  {
    id: 1,
    state: "Adamawa",
  },
  {
    id: 2,
    state: "Akwa Ibom",
  },
  {
    id: 3,
    state: "Anambra",
  },
  {
    id: 4,
    state: "Bauchi",
  },
  {
    id: 5,
    state: "Bayelsa",
  },
  {
    id: 6,
    state: "Benue",
  },
  {
    id: 7,
    state: "Borno",
  },
  {
    id: 8,
    state: "Cross River",
  },
  {
    id: 9,
    state: "Delta",
  },
  {
    id: 10,
    state: "Ebonyi",
  },
  {
    id: 11,
    state: "Edo",
  },
  {
    id: 12,
    state: "Ekiti",
  },
  {
    id: 13,
    state: "Enugu",
  },
  {
    id: 14,
    state: "Gombe",
  },
  {
    id: 15,
    state: "Imo",
  },
  {
    id: 16,
    state: "Jigawa",
  },
  {
    id: 17,
    state: "Kaduna",
  },
  {
    id: 18,
    state: "Kano",
  },
  {
    id: 19,
    state: "Katsina",
  },
  {
    id: 20,
    state: "Kebbi",
  },
  {
    id: 21,
    state: "Kogi",
  },
  {
    id: 22,
    state: "Kwara",
  },
  {
    id: 23,
    state: "Lagos",
  },
  {
    id: 24,
    state: "Nasarawa",
  },
  {
    id: 25,
    state: "Niger",
  },
  {
    id: 26,
    state: "Ogun",
  },
  {
    id: 27,
    state: "Ondo",
  },
  {
    id: 28,
    state: "Osun",
  },
  {
    id: 29,
    state: "Oyo",
  },
  {
    id: 30,
    state: "Plateau",
  },
  {
    id: 31,
    state: "Rivers",
  },
  {
    id: 32,
    state: "Sokoto",
  },
  {
    id: 33,
    state: "Taraba",
  },
  {
    id: 34,
    state: "Yobe",
  },
  {
    id: 35,
    state: "Zamfara",
  },
  {
    id: 36,
    state: "Abuja (F.C.T)",
  },
];


export const emergency = [
  {
    state: "Abia",
    number: "08079210003, 08079210004, 08079210005",
  },
  {
    state: 'Adamawa',
    number: '08089671313'
  },
  {
    state: 'Akwa Ibom',
    number: '08039213071, 08020913810'
  },
  {
    state: 'Anambra',
    number: '07039194332, 08024922772, 08075390511, 08182951257'
  },
  {
    state: 'Bauchi',
    number: '08151849417, 08127162434, 08084763669, 08073794920'
  },
  {
    state: 'Benue',
    number: '08066006475, 08053039936, 07075390977'
  },
  {
    state: 'Bayelsa',
    number: '07034578208'
  },
  {
    state: 'Borno',
    number: '08068075581, 08036071667, 08123823322'
  },
  {
    state: 'Cross Rivers',
    number: '08133568456, 07053355415'
  },
  {
    state: 'Delta',
    number: '08036684974'
  },
  {
    state: 'Ebonyi',
    number: '07064515001, 08125273721, 08084704673'
  },
  {
    state: 'Edo',
    number: '08037646272, 08077773721, 08067551618'
  },
  {
    state: 'Ekiti',
    number: '08062335577, 07089310359'
  },
  {
    state: 'Enugu',
    number: '08032003702, 08075390883, 08086671202'
  },
  {
    state: 'Gombe',
    number: '08150567771, 08151855014'
  },
  {
    state: 'Imo',
    number: '08034773600, 08037037283'
  },
  {
    state: 'Jigawa',
    number: '08075391069, 07089846285, 08123821598'
  },
  {
    state: 'Kaduna',
    number: '08123822284'
  },
  {
    state: 'Kano',
    number: '08032419754, 08123821575, 064977004, 064977005'
  },
  {
    state: 'Katsina',
    number: '08075391255, 08075391250'
  },
  {
    state: 'Kebbi',
    number: '08038797644, 08075391307'
  },
  {
    state: 'Kogi',
    number: '08075391335, 07038329084'
  },
  {
    state: 'Kwara',
    number: '07032069501, 08125275046'
  },
  {
    state: 'Lagos',
    number: '07055462708, 08035963919'
  },
  {
    state: 'Nassarawa',
    number: '08123821571, 07075391560'
  },
  {
    state: 'Niger',
    number: '08081777498, 08127185198'
  },
  {
    state: 'Ogun',
    number: '08032136765, 08081770416'
  },
  {
    state: 'Ondo',
    number: '07034313903, 08075391808'
  },
  {
    state: 'Osun',
    number: '08075872433, 08039537995, 08123823981'
  },
  {
    state: 'Oyo',
    number: '08081768614,08150777888'
  },
  {
    state: 'Plateau',
    number: '08126375938, 08075391844, 08038907662'
  },
  {
    state: 'Rivers',
    number: '08032003514, 08073777717'
  },
  {
    state: 'Sokoto',
    number: '07068848035, 08075391943'
  },
  {
    state: 'Taraba',
    number: '08140089863, 08073260267'
  },
  {
    state: 'Yobe',
    number: '07039301585, 08035067570'
  },
  {
    state: 'Zamfara',
    number: '08106580123'
  },
  {
    state: 'Abuja (F.C.T)',
    number: '07057337653, 08061581938, 08032003913'
  },
]