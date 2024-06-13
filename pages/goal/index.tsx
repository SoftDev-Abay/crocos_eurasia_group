import { useEffect } from "react";
import ValuesSection from "@/app/pages/Goal/ValuesSection";
import GoalHeroSection from "@/app/pages/Goal/GoalHeroSection";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import { GetServerSideProps, GetStaticPropsContext } from "next";
import {
  getMissionsMain,
  getMissionsValues,
} from "@/app/services/OurMissionsService";
import { MissionsMain, MissionsValue } from "@/app/constants/MissionsTypes";

export async function getServerSideProps({ locale }: { locale: string }) {
  let missionGoalData;
  let missionValuesData;
  try {
    const missionGoalResponse = await getMissionsMain(locale ?? "ru");
    missionGoalData = missionGoalResponse?.data?.data;

    const missionValuesResponse = await getMissionsValues(locale ?? "ru");
    missionValuesData = missionValuesResponse?.data?.data;

    // Load the locale messages
    const messages = (
      await import(`../../public/locales/${locale}/translation.json`)
    ).default;

    return {
      props: {
        missionGoalData,
        missionValuesData,
        messages,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default function Mission({
  missionGoalData: missionGoal,
  missionValuesData: valueInfo,
}: {
  missionGoalData: MissionsMain;
  missionValuesData: MissionsValue[];
}) {
  useEffect(() => {
    console.log("missionGoal", missionGoal);
  }, []);
  return (
    <Wrapper>
      <GoalHeroSection data={missionGoal} />
      <ValuesSection data={valueInfo} />
    </Wrapper>
  );
}
