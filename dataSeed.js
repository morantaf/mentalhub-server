const User = require("./User/model");
const PracticianFile = require("./PracticiansFile/model");
const bcrypt = require("bcrypt");

const dataSeed = async () => {
  try {
    const drChristineEmperaire = await User.create({
      firstName: "Christine",
      lastName: "Emperaire",
      email: "christine.emperaire@email.com",
      password: bcrypt.hashSync("blabla", 10),
      profilePicture:
        "https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg",
      whatsAppNumber: "+31625983442",
      gender: "Woman",
      practician: true,
      languages: ["French", "English", "Arabic"],
    });

    const drChristineEmperaireFile = await PracticianFile.create({
      userId: drChristineEmperaire.id,
      presentation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit est quis risus viverra, quis molestie libero varius. Etiam dapibus eros ac sem sodales elementum. Duis pretium lobortis congue. Phasellus euismod justo vitae quam condimentum, sit amet elementum eros ornare. Mauris pellentesque consectetur scelerisque. Nam congue augue dui, vel consectetur lorem consequat nec. Donec aliquam auctor risus ac pharetra.",
      specializations: ["CBT", "Arachnophobia", "Hypnosis"],
      education: [
        {
          school: "University of Paris",
          diploma: "Behavioural Pyschology PHD",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "2001",
        },
        {
          school: "University of Marseille",
          diploma: "DESU Medical Hypnosis",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "2005",
        },
      ],
      prices: [{ "Adult consultation": 60 }, { "Adult Hypnosis Session": 80 }],
    });

    const drOlyaZladivoca = await User.create({
      firstName: "Olya",
      lastName: "Zladivoca",
      email: "olya.zladivoca@email.com",
      password: bcrypt.hashSync("blabla", 10),
      profilePicture:
        "https://www.guttersdirectmn.com/wp-content/uploads/2018/07/student-profile-gabriela-mills-college.jpg",
      whatsAppNumber: "+31625978742",
      gender: "Woman",
      practician: true,
      languages: ["Ukrainian", "English", "Russian"],
    });

    const drOlyaZladivocaFile = await PracticianFile.create({
      userId: drOlyaZladivoca.id,
      presentation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit est quis risus viverra, quis molestie libero varius. Etiam dapibus eros ac sem sodales elementum. Duis pretium lobortis congue. Phasellus euismod justo vitae quam condimentum, sit amet elementum eros ornare. Mauris pellentesque consectetur scelerisque. Nam congue augue dui, vel consectetur lorem consequat nec. Donec aliquam auctor risus ac pharetra.",
      specializations: ["Psychoanalysis", "Trauma healing"],
      education: [
        {
          school: "University of Odessa",
          diploma: "Master in Psychoanalyst",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "2010",
        },
      ],
      prices: [{ Adult: 80 }],
    });

    const drBrianVandeVaar = await User.create({
      firstName: "Brian",
      lastName: "Van de Vaar",
      email: "brian.vandevaar@email.com",
      password: bcrypt.hashSync("blabla", 10),
      profilePicture:
        "https://cdn.datingxp.co/wp-content/uploads/2019/03/image-1.jpeg",
      whatsAppNumber: "+31625978742",
      gender: "Man",
      practician: true,
      languages: ["Dutch", "English", "German", "Polish"],
    });

    const drBrianVandeVaarFile = await PracticianFile.create({
      userId: drBrianVandeVaar.id,
      presentation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit est quis risus viverra, quis molestie libero varius. Etiam dapibus eros ac sem sodales elementum. Duis pretium lobortis congue. Phasellus euismod justo vitae quam condimentum, sit amet elementum eros ornare. Mauris pellentesque consectetur scelerisque. Nam congue augue dui, vel consectetur lorem consequat nec. Donec aliquam auctor risus ac pharetra.",
      specializations: ["CBT", "Couple therapy", "Sophrology", "Phobia"],
      education: [
        {
          school: "University of Amsterdam",
          diploma: "Psychology degree in adult consulting",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "2005",
        },
      ],
      prices: [{ Adult: 50 }, { Couple: 90 }],
    });

    const drArnaudNiang = await User.create({
      firstName: "Arnaud",
      lastName: "Niang",
      email: "arnaud.niang@email.com",
      password: bcrypt.hashSync("blabla", 10),
      profilePicture:
        "https://50bold.com/wp-content/uploads/2018/04/grooming.jpg",
      whatsAppNumber: "+31625978742",
      gender: "Man",
      practician: true,
      languages: ["French", "English", "German", "Wolof"],
    });

    const drArnaudNiangFile = await PracticianFile.create({
      userId: drArnaudNiang.id,
      presentation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit est quis risus viverra, quis molestie libero varius. Etiam dapibus eros ac sem sodales elementum. Duis pretium lobortis congue. Phasellus euismod justo vitae quam condimentum, sit amet elementum eros ornare. Mauris pellentesque consectetur scelerisque. Nam congue augue dui, vel consectetur lorem consequat nec. Donec aliquam auctor risus ac pharetra.",
      specializations: [
        "CBT",
        "Couple therapy",
        "Sophrology",
        "Phobia",
        "Hypnosis",
      ],
      education: [
        {
          school: "University of Dakar",
          diploma: "Master degree in clinical Psychology",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "1995",
        },
        {
          school: "La Sorbonne",
          diploma: "Clinical Psychology PHD",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "1998",
        },
        {
          school: "Hypnosis Certification center of Lyon",
          diploma: "Medical Hypnosis Certificate",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "2005",
        },
      ],
      prices: [
        { Adult: 50 },
        { Couple: 90 },
        { Children: 40 },
        { "Hypnosis session": 60 },
      ],
    });

    const drJohnDoe = await User.create({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@email.com",
      password: bcrypt.hashSync("blabla", 10),
      profilePicture:
        "https://i.pinimg.com/originals/a7/fc/0d/a7fc0d26de6bef7122c89cec10e6cc50.jpg",
      whatsAppNumber: "+31625978742",
      gender: "Man",
      practician: true,
      languages: ["English"],
    });

    const drJohnDoeFile = await PracticianFile.create({
      userId: drJohnDoe.id,
      presentation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit est quis risus viverra, quis molestie libero varius. Etiam dapibus eros ac sem sodales elementum. Duis pretium lobortis congue. Phasellus euismod justo vitae quam condimentum, sit amet elementum eros ornare. Mauris pellentesque consectetur scelerisque. Nam congue augue dui, vel consectetur lorem consequat nec. Donec aliquam auctor risus ac pharetra.",
      specializations: ["CBT", "Couple therapy", "Phobia"],
      education: [
        {
          school: "University of New York",
          diploma: "Master degree in clinical Psychology",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "1995",
        },
      ],
      prices: [{ Adult: 50 }, { Couple: 90 }, { Children: 40 }],
    });

    const drJessicaZhang = await User.create({
      firstName: "Jessica",
      lastName: "Zhang",
      email: "jessica.zhang@email.com",
      password: bcrypt.hashSync("blabla", 10),
      profilePicture:
        "https://i1.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-18.jpg?fit=800%2C1200",
      whatsAppNumber: "+31625978742",
      gender: "Woman",
      practician: true,
      languages: ["English", "Chinese", "Dutch"],
    });

    const drJessicaZhangFile = await PracticianFile.create({
      userId: drJessicaZhang.id,
      presentation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit est quis risus viverra, quis molestie libero varius. Etiam dapibus eros ac sem sodales elementum. Duis pretium lobortis congue. Phasellus euismod justo vitae quam condimentum, sit amet elementum eros ornare. Mauris pellentesque consectetur scelerisque. Nam congue augue dui, vel consectetur lorem consequat nec. Donec aliquam auctor risus ac pharetra.",
      specializations: ["CBT", "Phobia"],
      education: [
        {
          school: "University of Honk Kong",
          diploma: "Master degree in clinical Psychology",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "1995",
        },
      ],
      prices: [{ Adult: 50 }, { Couple: 90 }, { Children: 40 }],
    });

    const drMauriceGenevoix = await User.create({
      firstName: "Maurice",
      lastName: "Genevoix",
      email: "maurice.genevoix@email.com",
      password: bcrypt.hashSync("blabla", 10),
      profilePicture:
        "https://www.bpimaging.com/assets/uploads/2015/02/business-portrait-photography-ford-motor-company-executive.jpg",
      whatsAppNumber: "+31625978742",
      gender: "Woman",
      practician: true,
      languages: ["English", "French", "Dutch"],
    });

    const drMauriceGenevoixFile = await PracticianFile.create({
      userId: drMauriceGenevoix.id,
      presentation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit est quis risus viverra, quis molestie libero varius. Etiam dapibus eros ac sem sodales elementum. Duis pretium lobortis congue. Phasellus euismod justo vitae quam condimentum, sit amet elementum eros ornare. Mauris pellentesque consectetur scelerisque. Nam congue augue dui, vel consectetur lorem consequat nec. Donec aliquam auctor risus ac pharetra.",
      specializations: ["Psychoanalysis", "Trauma healing", "Couple Therapy"],
      education: [
        {
          school: "University of Poitiers",
          diploma: "Master degree in clinical Psychology",
          description:
            "Pellentesque sed turpis nec arcu mattis mollis quis et purus. Curabitur euismod risus nec massa vulputate feugiat. Pellentesque non enim at arcu tempus ullamcorper ultricies a lorem. Proin posuere, enim eu pretium mattis, mi nulla auctor nunc, pellentesque laoreet dui magna eu quam. Mauris tempor ante eu nunc finibus placerat.",
          date: "1995",
        },
      ],
      prices: [{ Adult: 50 }, { Couple: 90 }, { Children: 40 }],
    });
  } catch (e) {
    console.error(e);
  }
};

dataSeed();
