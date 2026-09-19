export interface ContactInfoData {
  companyName: string;
  generalManager: string;
  contactPersons: string[];
  phones: { display: string; href: string }[];
  email: string;
  address: {
    building: string;
    floor: string;
    subCity: string;
    city: string;
    country: string;
    fullText: string;
  };
  officeHours: string;
  registration: {
    tin: string;
    licenseNo: string;
    authority: string;
  };
}

export const contactData: ContactInfoData = {
  companyName: "GE'EZ Marketing Solution PLC",
  generalManager: "Ms. Yeabsira Kebede Negash",
  contactPersons: ["Yeabsira Kebede", "Yeabsra Worku"],
  phones: [
    { display: "+251 941 912 041", href: "tel:+251941912041" },
    { display: "+251 929 018 171", href: "tel:+251929018171" },
  ],
  email: "yeabsirakebede720@gmail.com",
  address: {
    building: "Selam City Mall",
    floor: "4th Floor",
    subCity: "Bole Sub-City",
    city: "Addis Ababa",
    country: "Ethiopia",
    fullText: "Bole, Selam City Mall - 4th Floor, Addis Ababa, Ethiopia",
  },
  officeHours: "Mon - Sat: 8:30 AM - 6:00 PM",
  registration: {
    tin: "0100200156",
    licenseNo: "Proc. No 980/2016",
    authority: "Addis Ababa City Administration Trade Bureau",
  },
};
