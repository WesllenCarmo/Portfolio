import React from "react";
import Card from "../../components/ui/Card";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section
      role="region"
      id="skills"
      className="text-custom-blue flex flex-col gap-16 px-8"
    >
      <h2 className="text-custom-light-blue text-5xl font-bold self-center">
        {t("skills.title")}
      </h2>
      <div className="flex w-full justify-around flex-wrap gap-8">
        <Card
          title="Soft Skills"
          skills={[
            t("skills.softSkills.0"),
            t("skills.softSkills.1"),
            t("skills.softSkills.2"),
          ]}
        />
        <Card
          title="Hard SKills"
          skills={[
            t("skills.hardSkills.0"),
            t("skills.hardSkills.1"),
            t("skills.hardSkills.2"),
            t("skills.hardSkills.3"),
            t("skills.hardSkills.4"),
            t("skills.hardSkills.5"),
          ]}
        />
        <Card
          title={t("skills.tools.title")}
          skills={[
            t("skills.tools.tech.0"),
            t("skills.tools.tech.1"),
            t("skills.tools.tech.2"),
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
