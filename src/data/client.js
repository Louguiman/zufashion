const client = [
  {
    id: 1,
    nom: "Darling",
    prenom: "Moise",
    avatar: require("../../assets/profil.jpg"),
    telephone: 75192458,
    datelivre: "22-08-2022",
    task: [
      {
        id: 1,
        title: "Ensenble Boubou",
        prix: 1125000,
      },
      {
        id: 2,
        title: "Patalon Veste Khaki",
        prix: 11200,
      },
    ],
    taskEnd: [
      {
        id: 1,
        name: "Tailbase",
        prix: 1125000,
      },
      {
        id: 2,
        name: "Patalon Khaki",
        prix: 11200,
      },
      {
        id: 3,
        name: "Robe Complete",
        prix: 11200,
      },
    ],
  },
  {
    id: 2,
    nom: "Diarra",
    prenom: "Alpha",
    avatar: require("../../assets/profil.jpg"),
    telephone: 75192458,
    datelivre: "22-08-2022",
    task: [
      {
        id: 1,
        title: "Boubou 3 Piece",
        prix: 1125000,
      },
      {
        id: 2,
        title: "Patalon Veste Khaki",
        prix: 11200,
      },
    ],
    taskEnd: [
      {
        id: 1,
        name: "Tailbase",
        prix: 1125000,
      },
      {
        id: 2,
        name: "Patalon Khaki",
        prix: 11200,
      },
      {
        id: 3,
        name: "Robe Complete",
        prix: 11200,
      },
    ],
  },
  {
    id: 3,
    nom: "Kante",
    prenom: "Moussa",
    avatar: require("../../assets/profil.jpg"),
    telephone: 75192458,
    datelivre: "22-08-2022",
    task: [
      {
        id: 1,
        title: "Veste Complete",
        prix: 125000,
        depence: false,
      },
      {
        id: 2,
        title: "Patalon Veste",
        prix: 11200,
        depence: true,
      },
    ],
    taskEnd: [
      {
        id: 1,
        name: "Tailbase",
        prix: 1125000,
      },
      {
        id: 2,
        name: "Patalon Khaki",
        prix: 11200,
      },
      {
        id: 3,
        name: "Robe Complete",
        prix: 11200,
      },
    ],
  },
  {
    id: 4,
    nom: "Sogodogo",
    prenom: "Kadi",
    avatar: require("../../assets/profil.jpg"),
    telephone: 75192458,
    datelivre: "22-08-2022",
    task: [
      {
        id: 1,
        title: "Jupe complete",
        prix: 112000,
        depence: true,
      },
      {
        id: 2,
        title: "Patalon Veste",
        prix: 11200,
        depence: true,
      },
    ],
    taskEnd: [
      {
        id: 1,
        name: "Tailbase",
        prix: 1125000,
      },
      {
        id: 2,
        name: "Patalon Khaki",
        prix: 11200,
      },
      {
        id: 3,
        name: "Robe Complete",
        prix: 11200,
      },
    ],
  },
  {
    id: 5,
    nom: "Samake",
    prenom: "Kadidiatou",
    avatar: require("../../assets/profil.jpg"),
    telephone: 75192458,
    datelivre: "22-08-2022",
    task: [
      {
        id: 1,
        title: "Tailbase",
        prix: 1125000,
        depence: false,
      },
      {
        id: 2,
        title: "Patalon Khaki",
        prix: 11200,
        depence: false,
      },
      {
        id: 3,
        title: "Robe Complete",
        prix: 11200,
        depence: true,
      },
    ],
    taskEnd: [
      {
        id: 1,
        name: "Tailbase",
        prix: 1125000,
      },
      {
        id: 2,
        name: "Patalon Khaki",
        prix: 11200,
      },
      {
        id: 3,
        name: "Robe Complete",
        prix: 11200,
      },
    ],
  },
];

export { client };
