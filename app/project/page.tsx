import React from "react";
import styles from "@/app/main.module.scss";
import Tap from "@/app/_base/Tap";
import CompanyProjects from "./_projectComponents/CompanyProejects";
import ToyProjects from "./_projectComponents/ToyProjects";
import MSBENTER from "./[project_detail]/_projectDetailComponents/projects/MSBENTER";
const ProjectPage = () => {
  const items = [
    {
      key: "1",
      label: "COMPANY",
      children: <CompanyProjects />,
    },
    // {
    //   key: "2",
    //   label: "TOY",
    //   children: <ToyProjects />,
    // },
  ];
  return (
    <main className={`${styles.main}`}>
      <div className="flex justify-center w-full">
        {/* <Tap items={items} /> */}
        <MSBENTER />
        {/* <CompanyProjects /> */}
      </div>
    </main>
  );
};

export default ProjectPage;
