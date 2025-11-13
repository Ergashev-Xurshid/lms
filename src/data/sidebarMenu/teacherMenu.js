export const teacherMenu = [
    { name: "Asosiy sahifa  ", path: "/teacher/dashboard" },
    {
      name: "Mashg'ulotlar",
      path: "/teacher/trening",
      children: [
        { name: "Biriktirilgan fanlar", path: "/teacher/trening/disciplines" },
        { name: "Fanlar", path: "/teacher/trening/subject" },
        { name: "Dars o'tish ", path: "/teacher/trening/lesson" },
        { name: "Davomat jurnali ", path: "/teacher/trening/jurnal" },
      ],
    },
    {
      name: "Nazorat topshiriqlari ",
      path: "/teacher/tasks",
      children: [
        { name: "Topshiriqlar bazasi ", path: "/teacher/tasks/database" },
      ],
    },
    { name: "Dars jadvali ", path: "/teacher/class" },
    {
      name: "Tizim ",
      path: "/teacher/systems",
      children: [
        { name: "Kirishlar ", path: "/teacher/systems/inputs" },
        { name: "Amallar tarixi ", path: "/teacher/systems/history" },
      ],
    },
    { name: "Kutubxona", path: "/teacher/library" },
    { name: "Texnik qo‘llab-quvvatlash ", path: "/teacher/support" },
  ]