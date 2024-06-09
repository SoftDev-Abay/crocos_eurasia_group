import React from "react";
import { useTransition } from "react";
import { useRouter } from "next/router";
// import { useLocale } from "next-intl";
import "./style.scss";

const LanguageToggleButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = router.locale;
  const languages = ["ru", "en"];

  console.log("localeActive", localeActive);

  const onLanguageChange = () => {
    if (isPending) {
      return;
    }

    const currentLanguageIndex = languages.indexOf(
      localeActive ? localeActive : "en"
    );
    const nextLanguageIndex = currentLanguageIndex + 1;

    startTransition(() => {
      router.push(router.pathname, undefined, {
        locale: languages[nextLanguageIndex],
      });
    });
  };

  return (
    <div className="language-toggle" onClick={onLanguageChange}>
      <span className="text">{localeActive === "ru" ? "Ру" : "En"}</span>
    </div>
  );
};

export default LanguageToggleButton;
